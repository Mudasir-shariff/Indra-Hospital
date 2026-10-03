import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function SubpageHero({
  title,
  subtitle,
  category,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: SubpageHeroProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50/80 via-[#FAFAF8] to-[#FAFAF8] pt-32 pb-14 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-4 font-medium">
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={bc.label}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-muted/60" />}
              {bc.href ? (
                <Link href={bc.href} className="hover:text-[#0068B0] transition-colors">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-charcoal font-semibold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-charcoal font-semibold truncate">{title}</span>
        </nav>

        {category && (
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
            <span className="w-6 h-0.5 bg-[#C03A21]" />
            {category}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight max-w-4xl">
          {title}
        </h1>

        <p className="text-muted text-base sm:text-lg mt-3 max-w-3xl leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
