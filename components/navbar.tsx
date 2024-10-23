"use client";
import React, { useState } from 'react';
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full flex items-center justify-between p-2 bg-transparent relative">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/corium_connect.png"
          width={60}
          height={60}
          alt="Corium Connect Logo"
          className="cursor-pointer"
          aria-label="Corium Connect Home"
        />
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {!isMenuOpen ? (
            <FaBars className="text-gray-800 text-2xl" />
          ) : (
            <FaTimes className="text-gray-800 text-2xl" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={cn(
          "md:flex md:items-center md:space-x-8",
          "fixed md:static top-0 left-0 w-full h-full bg-white md:bg-transparent md:shadow-none",
          "flex-col md:flex-row items-center justify-center",
          isMenuOpen ? "flex" : "hidden",
          "transition-all ease-in-out duration-300 md:transition-none"
        )}
      >
        {/* Close Icon on Mobile */}
        {isMenuOpen && (
          <div className="absolute top-5 right-5 md:hidden">
            <button onClick={toggleMenu} aria-label="Close Menu">
              <FaTimes className="text-gray-800 text-2xl" />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        {navItems.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "navbar-link py-2 px-4 text-gray-800 hover:bg-gray-200 rounded",
                { "bg-sky-950 text-white": isActive }
              )}
              aria-label={item.label}
              onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
