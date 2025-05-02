"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-[#ff3366] font-bold text-3xl mr-1">ai</span>
            <span className="text-white font-bold text-3xl">af</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-white hover:text-[#ff3366] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-white hover:text-[#ff3366] transition-colors"
          >
            What We Do
          </Link>
          <Link
            href="/#process"
            className="text-white hover:text-[#ff3366] transition-colors"
          >
            How We Work
          </Link>
          <Link
            href="/#projects"
            className="text-white hover:text-[#ff3366] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="text-white hover:text-[#ff3366] transition-colors"
          >
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/booking"
            target="_blank"
            className=" cursor-pointer px-4 py-2 bg-white text-[#111132] rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            Book Now
          </Link>
          <Link
            href="/#process"
            className="px-4 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all hover:text-black"
          >
            Learn more
          </Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-[#ff3366] transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-[#ff3366] transition-colors py-2"
            >
              What We Do
            </Link>
            <Link
              href="/#process"
              className="text-white hover:text-[#ff3366] transition-colors py-2"
            >
              How We Work
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-[#ff3366] transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#ff3366] transition-colors py-2"
            >
              About Us
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                href="/booking"
                target="_blank"
                className="px-4 py-2 bg-white text-[#111132] rounded-full font-medium text-center hover:bg-opacity-90 transition-all"
              >
                Book Now
              </Link>
              <Link
                href="/#process"
                className="px-4 py-2 border border-white text-white rounded-full font-medium text-center hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
