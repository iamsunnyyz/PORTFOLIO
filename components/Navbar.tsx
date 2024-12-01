"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Menu for mobile view
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Set the theme on component mount based on system preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-lg">
      {/* Brand Logo */}
      <h1 className="text-2xl font-agustina text-accent">
        <Link href="/#hero">SunnyChauhan</Link>
      </h1>

      {/* Hamburger Menu for Mobile View */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
      >
        <span
          className={`block w-6 h-0.5 bg-accent transform transition ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent transition ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent transform transition ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Navbar Links */}
      <nav
        className={`absolute top-full left-0 w-full bg-bg-secondary md:static md:w-auto md:bg-transparent ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-6 p-4 md:p-0">
          {["about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
  href={`/#${section}`}
  className="group block p-2 duration-500 text-1xl text-[#94A3B8] hover:text-[#38bdf8]"
>
  <span className="relative w-fit">{section}
    <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300 ease-in-scroll"></span>
  </span>
</Link>

              </li>
            )
          )}
          {/* Resume Button */}
          <li>
            <a
              className="block px-4 py-2 text-sm text-accent border border-accent rounded hover:bg-accent-light duration-200"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="block px-4 py-2 text-accent focus:outline-none"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"></path>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
