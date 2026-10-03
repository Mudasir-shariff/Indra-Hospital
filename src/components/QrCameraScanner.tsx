"use client";

import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { Camera, X, RefreshCw, CheckCircle2, ExternalLink, AlertCircle } from "lucide-react";

interface QrCameraScannerProps {
  onClose?: () => void;
  onScanSuccess?: (data: string) => void;
}

export default function QrCameraScanner({ onClose, onScanSuccess }: QrCameraScannerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const animFrameId = useRef<number | null>(null);

  const startCamera = async () => {
    setCameraError(null);
    setScannedData(null);
    setIsScanning(true);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera API is not supported on this browser or connection (requires HTTPS or localhost).");
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 640 } },
        audio: false,
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.setAttribute("playsinline", "true");
        await videoRef.current.play();
      }
    } catch (err: any) {
      console.error("Camera access error:", err);
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        setCameraError("Camera permission was denied. Please allow camera access in your browser settings to scan QR codes.");
      } else if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
        setCameraError("No camera device was detected on your device.");
      } else {
        setCameraError(err.message || "Failed to initialize camera scanner.");
      }
      setIsScanning(false);
    }
  };

  const stopCamera = () => {
    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
      animFrameId.current = null;
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  // Frame scanning loop
  useEffect(() => {
    if (!isScanning || !stream) return;

    const scanFrame = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas && video.readyState === video.HAVE_ENOUGH_DATA) {
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (ctx) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });

          if (code && code.data) {
            setScannedData(code.data);
            setIsScanning(false);
            if (onScanSuccess) {
              onScanSuccess(code.data);
            }
            return; // pause loop
          }
        }
      }

      animFrameId.current = requestAnimationFrame(scanFrame);
    };

    animFrameId.current = requestAnimationFrame(scanFrame);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isScanning, stream, onScanSuccess]);

  const handleRestartScan = () => {
    setScannedData(null);
    setIsScanning(true);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black text-white p-4 shadow-xl border border-white/10">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            Live QR Scanner
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Close Camera"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {cameraError ? (
        <div className="p-6 text-center space-y-3 bg-red-950/40 rounded-xl border border-red-500/20">
          <AlertCircle className="w-8 h-8 text-red-400 mx-auto" />
          <p className="text-xs text-red-200 leading-relaxed">{cameraError}</p>
          <button
            onClick={startCamera}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="relative aspect-square max-w-[320px] mx-auto rounded-xl overflow-hidden bg-neutral-900 border border-white/20">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
          />
          <canvas ref={canvasRef} className="hidden" />

          {/* Scanner Reticle Overlay */}
          {isScanning && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {/* Corner brackets */}
              <div className="relative w-48 h-48 border-2 border-emerald-400/80 rounded-2xl">
                {/* Animated laser line */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-[scannerLaser_2s_easeInOut_infinite]" />
              </div>
              <span className="absolute bottom-3 text-[11px] font-medium text-white/80 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                Align QR Code inside frame
              </span>
            </div>
          )}

          {/* Scanned Result Card */}
          {scannedData && (
            <div className="absolute inset-0 bg-[#0A2F4A]/95 p-4 flex flex-col justify-center items-center text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
                  QR Code Detected!
                </span>
                <p className="text-xs text-white/90 break-all max-w-[260px] bg-black/40 p-2.5 rounded-lg border border-white/10 font-mono">
                  {scannedData}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {scannedData.startsWith("http") && (
                  <a
                    href={scannedData}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-bold transition-all shadow-md"
                  >
                    <span>Open Booking Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={handleRestartScan}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Scan Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-3 text-center">
        <p className="text-[11px] text-white/60">
          Point at any Indira Hospital booking QR code or doctor prescription
        </p>
      </div>
    </div>
  );
}
