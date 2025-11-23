"use client";

import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import logo from '../../../public/logofinal.png'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return  (
    <nav className="w-full mx-auto py-4 bg-white shadow-2xl">
      <div className="mx-auto w-11/12">
        <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image 
          src={logo}
          className="h-20 w-20 rounded-full"/>
        </div>

        {/* Desktop Menu */}
       <div className="hidden md:block">
        <ul className="flex flex-row gap-10 font-bold fontext text-xl">

        <Link href="/" className={pathname === "/" ? "cliking active" : "cliking"}>Home</Link>


          <Link href="/menu" className={pathname === "/menu" ? "cliking active" : "cliking"}>Menu</Link>


          <a href="">My-Meals</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </ul>
       </div>

        {/* Login Button */}
        <div className="hidden md:block ">
          <button className="animated-button">
            <span className="text flex justify-between items-center">
              <p>Login</p>
              <div className="pb-3">
                <IoLogIn />
              </div>
            </span>
            <span className="circle"></span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border rounded-md"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 font-medium text-lg fontext">
         <Link href="/" className={pathname === "/" ? "cliking active" : "cliking"}>Home</Link>


          <Link href="/menu" className={pathname === "/menu" ? "cliking active" : "cliking"}>Menu</Link>
          <a href="#">My Meals</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          {/* btn */}
          <button className="animated-button">
            <span className="text flex justify-between items-center">
              <p>Login</p>
              <div className="pb-3">
                <IoLogIn />
              </div>
            </span>
            <span className="circle"></span>
          </button>
        </div>
      )}
      </div>
    </nav>
  );
}
