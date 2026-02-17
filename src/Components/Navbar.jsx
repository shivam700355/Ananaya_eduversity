import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 fixed top-0 left-0 w-full z-50">

    
      <div className="flex justify-between items-center h-16 px-6">
        {/* Logo */}

        <Link
          to="/"
          className="text-xl text-white font-bold hover:text-gray-200 transition"
        >
          Eduversity
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 text-white text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-purple-500 text-white px-6 py-4 space-y-3`}
      >
        <Link to="/" className="block">
          Home
        </Link>
        <Link to="/about" className="block">
          About
        </Link>
        <Link to="/services" className="block">
          Services
        </Link>
        <Link to="/contact" className="block">
          Contact
        </Link>
      </div>
    </nav>
  );
}
