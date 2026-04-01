import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/universities" },
    { name: "Menu", href: "/courses" },
    { name: "Pages", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Right Section (Menu + Button) */}
          <div className="flex items-center space-x-6">

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 font-['DM Sans'] text-[16px] font-medium">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-black hover:text-gray-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side Button */}
            <button
              className="
                hidden md:block
                font-['DM Sans']
                text-[16px]
                font-bold
                leading-[24px]
                tracking-[0px]
                bg-white
                text-black
                border-2
                border-black
                px-6
                py-2
                rounded-full
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Book A Table
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4 font-['DM Sans'] text-[16px] font-medium">

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-black hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Button */}
            <button
              className="
              block md:hidden
                font-['DM Sans']
                text-[16px]
                font-bold
                leading-[24px]
                tracking-[0px]
                bg-white
                text-black
                border-2
                border-black
                px-6
                py-2
                rounded-full
                hover:bg-black
                hover:text-white
                transition
                
              "
            >
              Book A Table
            </button>

          </div>
        </div>
      )}
    </header>
  );
}