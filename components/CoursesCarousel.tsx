"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/Card";

const courses = [
  {
    id: 1,
    title: "Accounting",
    image: "/basics-of-strategic-management.jpg",
    certificate: true,
    duration: "3 hours duration",
    online: true,
  },
  {
    id: 2,
    title: "Management Skills",
    image: "/change-management.jpg",
    certificate: true,
    duration: "3 hours duration",
    online: true,
  },
  {
    id: 3,
    title: "Strategy & Operations",
    image: "/essential-management-skills.jpg",
    certificate: true,
    duration: "3 hours duration",
    online: true,
  },
  {
    id: 4,
    title: "Change Management",
    image: "/change-management.jpg",
    certificate: true,
    duration: "2 hours duration",
    online: true,
  },
  {
    id: 5,
    title: "Financial Performance",
    image: "/essential-management-skills.jpg",
    certificate: true,
    duration: "1.5 hours duration",
    online: true,
  },
  {
    id: 6,
    title: "Leadership & Team",
    image: "/change-management.jpg",
    certificate: true,
    duration: "2 hours duration",
    online: true,
  },
  {
    id: 7,
    title: "Digital Marketing",
    image: "/basics-of-strategic-management.jpg",
    certificate: true,
    duration: "2.5 hours duration",
    online: true,
  },
  {
    id: 8,
    title: "Project Management",
    image: "/essential-management-skills.jpg",
    certificate: true,
    duration: "3 hours duration",
    online: true,
  },
  {
    id: 9,
    title: "Financial Performance",
    image: "change-management.jpg",
    certificate: true,
    duration: "1.5 hours duration",
    online: true,
  },
  {
    id: 10,
    title: "Leadership & Team",
    image: "/essential-management-skills.jpg",
    certificate: true,
    duration: "2 hours duration",
    online: true,
  },
  {
    id: 11,
    title: "Digital Marketing",
    image: "/change-management.jpg",
    certificate: true,
    duration: "2.5 hours duration",
    online: true,
  },
  {
    id: 12,
    title: "Project Management",
    image: "/essential-management-skills.jpg",
    certificate: true,
    duration: "3 hours duration",
    online: true,
  },
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerView = 4;
  const totalSlides = Math.ceil(courses.length / coursesPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-10">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Master core business skills in a few hours
          </h2>
          <p className="text-lg text-gray-600">
            Choose from 28 certified online short courses
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous courses"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next courses"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Course Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses
                      .slice(
                        slideIndex * coursesPerView,
                        (slideIndex + 1) * coursesPerView
                      )
                      .map((course) => (
                        <Card
                          key={course.id}
                          className="bg-white border !rounded-none border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                        >
                          <CardContent className="p-0">
                            <div className="overflow-hidden">
                              <img
                                src={course.image || "/placeholder.svg"}
                                alt={course.title}
                                className="w-full h-[150px] object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold text-lg text-gray-900 mb-3">
                                {course.title}
                              </h3>
                              <div className="space-y-1 text-sm text-gray-600">
                                {course.certificate && (
                                  <div className="flex items-start">
                                    <span className="mr-1">›</span>
                                    <span>Course certificate</span>
                                  </div>
                                )}
                                <div className="flex items-start">
                                  <span className="mr-1">›</span>
                                  <span>{course.duration}</span>
                                </div>
                                {course.online && (
                                  <div className="flex items-start">
                                    <span className="mr-1">›</span>
                                    <span>100% online</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators - Exactly Three Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {/* First Dot */}
          <button
            onClick={() => goToSlide(0)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
              currentIndex === 0
                ? "bg-black"
                : "bg-transparent border-4 border-gray-400 hover:border-gray-600"
            }`}
            aria-label="Go to first slide"
          />

          {/* Middle Dot */}
          <button
            onClick={() => {
              const middleIndex =
                totalSlides <= 2
                  ? totalSlides - 1
                  : Math.floor(totalSlides / 2);
              goToSlide(middleIndex);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
              (totalSlides <= 2 && currentIndex === totalSlides - 1) ||
              (totalSlides > 2 &&
                currentIndex !== 0 &&
                currentIndex !== totalSlides - 1)
                ? "bg-black"
                : "bg-transparent border-4 border-gray-400 hover:border-gray-600"
            }`}
            aria-label="Go to middle slide"
          />

          {/* Last Dot */}
          <button
            onClick={() => goToSlide(totalSlides - 1)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
              currentIndex === totalSlides - 1 && totalSlides > 2
                ? "bg-black"
                : "bg-transparent border-4 border-gray-400 hover:border-gray-600"
            }`}
            aria-label="Go to last slide"
          />
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            VIEW ALL COURSES
          </Button>
        </div>
      </div>
    </section>
  );
}
