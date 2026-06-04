'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const totalImages = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Start Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, 1500);
  }, [isPlaying, nextSlide]);

  // Stop Autoplay
  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  // Handle auto-play cycle
  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isPlaying, startAutoplay, stopAutoplay]);

  // Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // min distance in px

    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full h-full group/carousel overflow-hidden rounded-2xl border border-slate-200/50 bg-slate-900 shadow-md transition-all duration-300"
      onMouseEnter={() => stopAutoplay()}
      onMouseLeave={() => {
        if (isPlaying) startAutoplay();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images List */}
      <div className="relative w-full h-full aspect-[4/3]">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} - Foto ${index + 1}`}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                priority={index === 0}
                className="object-cover"
              />
              {/* Subtle bottom gradient to make indicators readable */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        id="carousel-btn-prev"
        type="button"
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-slate-950/70 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        id="carousel-btn-next"
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-slate-950/70 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom Controls Bar (Dots + Play/Pause toggle) */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-6">
        {/* Play / Pause Controls */}
        <button
          id="carousel-btn-play-pause"
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-slate-950/60 transition-all duration-200"
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 pl-[1px]" />}
        </button>

        {/* Indicators Dots */}
        <div className="flex gap-2">
          {images.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                id={`carousel-dot-${index}`}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-[#0ebd9f] shadow-[0_0_8px_rgba(14,189,159,0.5)]"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>

        {/* Image Counter Badge */}
        <span className="text-[10px] font-bold text-white/70 bg-slate-950/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
          {currentIndex + 1} / {totalImages}
        </span>
      </div>
    </div>
  );
}
