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
    <nav className="w-full flex items-center justify-between p-2 bg-transparent ">
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
          <FaBars className="text-gray-800 text-2xl" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-md md:flex-row flex-col items-center md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0`}>
        {/* Close Icon */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <FaTimes className="text-gray-800 text-2xl" />
          </button>
        </div>

        {navItems.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "navbar-link py-2 px-4 text-gray-800 hover:bg-gray-200 rounded",
                { "bg-sky-950 text-white": isActive }
              )}
              aria-label={item.label}
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

