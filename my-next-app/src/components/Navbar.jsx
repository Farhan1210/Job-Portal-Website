"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = (path) =>
    `rounded-md px-3 py-2 text-sm font-medium ${
      pathname === path
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <div>
      <nav className="relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start sm:items-stretch">
              <div className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48">
                {/* If you want to use next/image, replace with <Image ... /> and add the domain to next.config.js */}
                <Image
                  src="/job-logo.png"
                  alt="Your Company"
                  className="object-contain"
                  sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
                  fill
                />
              </div>
            </div>

            {/* Mobile menu button - visible on small screens */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((s) => !s)}
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>

                {/* show hamburger when closed, X when open */}
                {!mobileOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href={"/"} className={navClass("/")}>
                    Home
                  </Link>

                  <Link href={"/form"} className={navClass("/form")}>
                    Form
                  </Link>

                  <Link href={"/list"} className={navClass("/list")}>
                    List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`block sm:hidden ${mobileOpen ? "block" : "hidden"}`}
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href={"/"} className={navClass("/")}>
              Home
            </Link>

            <Link href={"/form"} className={navClass("/form")}>
              Form
            </Link>

            <Link href={"/list"} className={navClass("/list")}>
              List
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
