"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/slider-1-city-skyline-online-2.jpg",
    title: "Learn management skills online",
    subtitle: "Enhance your professional knowledge and get your certificate",
    cta: "BROWSE COURSES",
  },
  {
    id: 2,
    image: "/slider-2-team-meeting-online2.jpg",
    title: "Master leadership techniques",
    subtitle: "Develop essential leadership skills for modern workplace success",
    cta: "START LEARNING",
  },
  {
    id: 3,
    image: "/slider-3-office-building-online.jpg",
    title: "Advance your career today",
    subtitle: "Join thousands of professionals who transformed their careers",
    cta: "VIEW PROGRAMS",
  },
]

export default function LMSCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[40vh] min-h-[400px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-base font-semibold tracking-wide"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute cursor-pointer left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute cursor-pointer right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400  duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10 group-hover:scale-110 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`w-3 h-3 border-2 border-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
        index === currentSlide
          ? "bg-white"
          : "bg-transparent "
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
