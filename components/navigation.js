import React from "react";
import { useState } from "react";
import Link from "next/link";
function Navigation() {
  const [menuActive, setMenuState] = useState(true);

  const closeMenu = () => setMenuState(true);

  return (
    <nav className="w-screen max-w-6xl mx-auto px-4 shadow-lg bg-white fixed top-0 z-10">
      <div className="flex justify-between">
        <div className="flex w-screen justify-between">
          <div>
            <a className="flex items-center py-4 px-2 text-gray-500 text-lg hover:text-blue-500 duration-300">
              <span className="font-semibold ">hüseyin</span>
              <span className="font-thin italic">içen</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <a className="py-4 px-2 text-gray-500 hover:border-b-4 hover:border-blue-500 hover:text-blue-500 font-semi-bold transition-all duration-300">
                home
              </a>
            </Link>
            <Link href="/codes">
              <a className="py-4 px-2 text-gray-500 font-semi-bold hover:text-blue-500 hover:border-b-4 hover:border-blue-500 transition-all duration-300 ">
                codes
              </a>
            </Link>
            <Link href="/blog">
              <a className="py-4 px-2 text-gray-500 font-semi-bold hover:text-blue-500  hover:border-b-4 hover:border-blue-500 transition-all duration-300 ">
                blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="py-4 px-2 text-gray-500 font-semi-bold hover:text-blue-500 hover:border-b-4 hover:border-blue-500 transition-all duration-300 ">
                contact
              </a>
            </Link>
          </div>
          <div className="md:hidden mx-10 flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setMenuState(!menuActive)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${menuActive ? "hidden " : ""}  `}>
        <ul className="">
          <li className="active">
            <Link href="/">
              <a
                onClick={closeMenu}
                className="block text-sm px-2 py-4  hover:bg-blue-400 hover:text-white font-semibold"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="/codes"
              className="block text-sm px-2 py-4 hover:bg-blue-400 hover:text-white transition duration-300"
            >
              Codes
            </a>
          </li>

          <li>
            <Link href="/blog">
              <a
                onClick={closeMenu}
                className="block text-sm px-2 py-4 hover:bg-blue-400 hover:text-white transition duration-300"
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                onClick={closeMenu}
                className="block text-sm px-2 py-4 hover:bg-blue-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
