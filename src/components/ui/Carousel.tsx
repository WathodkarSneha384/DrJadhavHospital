"use client";

import { useCallback, useEffect, useState, Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
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
  const slides = Children.toArray(children);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: loop && slides.length > 1,
      align,
      skipSnaps: false,
      containScroll: "trimSnaps",
      dragFree: false,
    },
    autoplay && slides.length > 1
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
      : []
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
  }, [emblaApi, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative w-full min-w-0", className)}>
      <div className="w-full min-w-0 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x">
          {slides.map((child, i) => (
            <div
              key={i}
              className={cn(
                "min-w-0 w-0 shrink-0 grow-0 basis-full overflow-hidden",
                slideClassName
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-900/80 text-white shadow-lg backdrop-blur-md transition hover:scale-105 sm:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-900/80 text-white shadow-lg backdrop-blur-md transition hover:scale-105 sm:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-6 bg-accent-500"
                  : "w-1.5 bg-brand-300 hover:bg-brand-400"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
