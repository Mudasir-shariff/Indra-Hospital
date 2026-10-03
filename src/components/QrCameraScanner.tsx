"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const jsQRRef = useRef<any>(null);

  const startCamera = async () => {
    setCameraError(null);
    setScannedData(null);
    setIsScanning(true);

    try {
      if (typeof window === "undefined" || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
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

  // Preload jsQR on client mount
  useEffect(() => {
    let mounted = true;
    import("jsqr")
      .then((mod) => {
        if (mounted) {
          jsQRRef.current = mod.default || mod;
        }
      })
      .catch((e) => {
        console.warn("Client QR scanner module loader:", e);
      });

    startCamera();
    return () => {
      mounted = false;
      stopCamera();
    };
  }, []);

  // Frame scanning loop
  useEffect(() => {
    if (!isScanning || !stream) return;

    let isScanningFrame = false;

    const scanFrame = async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!isScanningFrame && video && canvas && video.readyState === video.HAVE_ENOUGH_DATA) {
        isScanningFrame = true;

        // Try native BarcodeDetector API if available
        if (typeof window !== "undefined" && "BarcodeDetector" in window) {
          try {
            // @ts-ignore
            const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
            const barcodes = await detector.detect(video);
            if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
              setScannedData(barcodes[0].rawValue);
              setIsScanning(false);
              if (onScanSuccess) {
                onScanSuccess(barcodes[0].rawValue);
              }
              return;
            }
          } catch (e) {
            // fall back to canvas
          }
        }

        // Canvas fallback with jsQR
        if (jsQRRef.current) {
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          if (ctx) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQRRef.current(imageData.data, imageData.width, imageData.height, {
              inversionAttempts: "dontInvert",
            });

            if (code && code.data) {
              setScannedData(code.data);
              setIsScanning(false);
              if (onScanSuccess) {
                onScanSuccess(code.data);
              }
              return;
            }
          }
        }

        isScanningFrame = false;
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

  return (
    <div className="relative w-full max-w-md mx-auto bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 text-white">
      {/* Header bar */}
      <div className="p-4 bg-neutral-900/90 backdrop-blur-md flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-[#0068B0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
            Live QR Code Scanner
          </span>
        </div>
        {onClose && (
          <button
            onClick={() => {
              stopCamera();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close scanner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Video Viewport */}
      <div className="relative aspect-square w-full bg-black overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
        />
        <canvas ref={canvasRef} className="hidden" />

        {/* Viewfinder Target Overlay */}
        {isScanning && !cameraError && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
            <div className="relative w-56 h-56 border-2 border-[#0068B0] rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(0,104,176,0.3)]">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white rounded-br-xl" />

              {/* Animated Laser Scanning Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C03A21] to-transparent shadow-[0_0_12px_#C03A21] animate-[scannerLaser_2s_easeInOut_infinite]" />
            </div>
          </div>
        )}

        {/* Camera Error State */}
        {cameraError && (
          <div className="absolute inset-0 bg-neutral-900/95 p-6 flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-10 h-10 text-[#C03A21] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">Camera Access Issue</h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-light">
              {cameraError}
            </p>
            <button
              onClick={startCamera}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0068B0] text-xs font-semibold text-white hover:bg-[#075486] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry Camera
            </button>
          </div>
        )}

        {/* Success Overlay */}
        {scannedData && (
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">QR Code Detected!</h4>
            <p className="text-xs text-neutral-400 mb-4 break-all max-w-xs font-mono bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
              {scannedData}
            </p>

            <div className="flex gap-2">
              <a
                href={scannedData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setScannedData(null);
                  setIsScanning(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Rescan
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer instruction */}
      <div className="p-3 bg-neutral-900 text-center text-[11px] text-neutral-400 border-t border-neutral-800">
        Point at any Indira Hospital booking QR code or doctor prescription
      </div>
    </div>
  );
}
