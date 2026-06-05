"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  align?: "start" | "center";
};

export function Carousel({
  children,
  className,
  slideClassName,
  autoplay = true,
  autoplayDelay = 5000,
  loop = true,
  showDots = true,
  showArrows = true,
  align = "start",
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align, skipSnaps: false },
    autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children.map((child, i) => (
            <div
              key={i}
              className={cn("min-w-0 shrink-0 grow-0 basis-full", slideClassName)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && children.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-900/80 text-white shadow-lg backdrop-blur-md transition hover:bg-brand-800 hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-900/80 text-white shadow-lg backdrop-blur-md transition hover:bg-brand-800 hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {showDots && children.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-8 bg-accent-500"
                  : "w-2 bg-brand-300 hover:bg-brand-400"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
