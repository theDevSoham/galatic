"use client";

import { libreFranklin } from "@/assets/fonts";
import { container } from "@/constants/tailwind_customizations";
import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/" },
  { id: 3, name: "Offerings", link: "/" },
  { id: 4, name: "Contact", link: "/" },
];

interface INavBar {
  selectedRouteId?: number;
}

const Navbar: React.FC<INavBar> = ({ selectedRouteId = 1 }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[100px] bg-transparent relative z-50">
        <div
          className={`${container} w-full h-full flex justify-between items-center`}
        >
          <p
            className={`flex-1 text-left ${libreFranklin.className} font-semibold text-2xl`}
          >
            Galatic
          </p>

          {/* Desktop Navigation */}
          <div className="flex-1 hidden lg:flex justify-evenly items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`font-medium ${
                  item.id === selectedRouteId ? "text-[#6000cd]" : "text-black"
                } hover:animate-[fade-link_0.3s_ease_out_forwards]`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="flex-1 hidden lg:flex justify-end items-center">
            <Button type="linkButton" link="/" label="Call to Action" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex lg:hidden justify-end items-center">
            <Button
              type="icon"
              label={isMobileMenuOpen ? <X /> : <Menu />}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 lg:hidden z-40 animate-[fade-in-down_0.3s_ease-out_forwards]">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`text-lg font-medium ${
                  item.id === selectedRouteId ? "text-[#6000cd]" : "text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button type="linkButton" link="/" label="Call to Action" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
