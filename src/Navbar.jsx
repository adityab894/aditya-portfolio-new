import React, { useState } from "react";
import { Link } from "react-router-dom";

import nashlogodark from "./assets/nashdarklogo.svg"; // Update path as needed
import nashlogolight from "./assets/nashlightlogo.svg"; // Update path as needed
import burger from "./assets/burger.svg"; // Use any burger icon
import toltvideo from "./assets/tootopvideo.gif";
import LightBulb from "./components/LightBulb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="pt-3 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <div className="block dark:hidden">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={nashlogolight} className="h-8" alt="Logo" />
            <span className="dark:text-2ndry-1 self-center text-2xl font-semibold whitespace-nowrap">
              Aditya Bisht
            </span>
          </Link>
        </div>
        <div className="hidden dark:block">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={nashlogodark} className="h-8" alt="Logo" />
            <span className="dark:text-2ndry-1 self-center text-2xl font-semibold whitespace-nowrap">
              Aditya Bisht
            </span>
          </Link>
        </div>
        {/* Buttons */}
        {/* Buttons */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* ttopp */}
          <div className="group relative inline-block">
            {/* LightBulb Icon with responsive sizing */}
            <div className="relative top-4 scale-140 transition-transform lg:scale-175 xl:scale-200">
              <LightBulb />
            </div>

            {/* Text Tooltip */}
            <div className="bg-primary-3 invisible absolute top-1/2 right-full z-10 mr-3 -translate-y-1/2 rounded px-3 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              Pull the chord!
              {/* Arrow */}
              <div className="bg-primary-3 border-2ndry-2 absolute top-1/2 left-0 h-2 w-2 translate-x-full -translate-y-1/2 rotate-45"></div>
            </div>

            {/* GIF Tooltip Below with viewport safety */}
            <div className="invisible absolute top-full right-2 z-20 mt-2 h-32 w-48 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <img
                src={toltvideo}
                alt="Tooltip animation"
                className="h-30 w-43 rounded object-cover shadow-lg"
              />
            </div>
          </div>
          {/* Toggle mobile menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="texthilit1 dark:hover:bg-primary focus:ring-2ndry-1 dark:focus:ring-primary-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:ring-2 focus:outline-none md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">menu</span>
            <span className="sr-only">Open main menu</span>
            {/* <img src={burger} alt="menu toggle" className="h-5 w-5" /> */}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link to="/" className="navilink">
                <span className="texthilit1">#</span>home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navilink">
                <span className="texthilit1">#</span>works
              </Link>
            </li>
            <li>
              <Link to="/about" className="navilink">
                <span className="texthilit1">#</span>about
              </Link>
            </li>

            <li>
              <Link to="/contact" className="navilink">
                <span className="texthilit1">#</span>contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
