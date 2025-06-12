"use client";

import {
  ChevronDown,
  Globe,
  HelpCircle,
  Mail,
  ShoppingCart,
  ImportIcon as Translate,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Institution Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                  <div className="text-white text-xs font-bold">⚔</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">
                School of
              </div>
              <div className="text-lg font-semibold text-gray-900">
                Business Management
              </div>
              <div className="text-sm text-gray-600">Vijayawada · India</div>
            </div>
          </div>

          {/* Navigation Menu and Actions */}
          <div className="flex items-center space-x-8">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("courses")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                  <span>Courses</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "courses" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {/* Triangle indicator */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Online Courses
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Language Tests
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Institute Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("institute")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                  <span>Institute</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "institute" && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {/* Triangle indicator */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        About Us
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Certificate Verification
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Social Impact
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Jobs
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Language/Region Selector */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("language")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <Globe className="h-4 w-4" />
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "language" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {/* Triangle indicator */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="py-1">
                      <Link
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        <span>Help Center</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        <span>Contact</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        <Translate className="h-4 w-4 mr-2" />
                        <span>Translate Website</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                ENROLL
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
