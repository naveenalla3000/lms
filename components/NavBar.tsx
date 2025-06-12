"use client";

import {
  ChevronDown,
  Globe,
  HelpCircle,
  Mail,
  Menu,
  ShoppingCart,
  X,
  ImportIcon as Translate,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling the mobile menu
    setActiveDropdown(null);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Institution Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-sm flex items-center justify-center">
                  <div className="text-white text-xs font-bold">⚔</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm sm:text-lg font-semibold text-gray-900">
                School of
              </div>
              <div className="text-sm sm:text-lg font-semibold text-gray-900">
                Business Management
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Vijayawada · India
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation Menu and Actions */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
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
              <Link href={"/enroll"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                ENROLL
              </Link>
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="text-white text-xs font-bold">⚔</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                School of
              </div>
              <div className="text-sm font-semibold text-gray-900">
                Business Management
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Courses Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => toggleDropdown("courses")}
              >
                <span>Courses</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "courses" ? "rotate-180" : ""
                  )}
                />
              </button>
              {activeDropdown === "courses" && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Online Courses
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Language Tests
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Institute Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => toggleDropdown("institute")}
              >
                <span>Institute</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "institute" ? "rotate-180" : ""
                  )}
                />
              </button>
              {activeDropdown === "institute" && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Certificate Verification
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Social Impact
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Jobs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Language/Region Selector */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => toggleDropdown("language")}
              >
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>Language & Help</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "language" ? "rotate-180" : ""
                  )}
                />
              </button>
              {activeDropdown === "language" && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="#"
                    className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    <span>Help Center</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Translate className="h-4 w-4 mr-2" />
                    <span>Translate Website</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Action Buttons */}
        <div className="p-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/enroll"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              <span>ENROLL</span>
            </Link>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full flex items-center justify-center"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
