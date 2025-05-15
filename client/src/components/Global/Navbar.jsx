import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Programes", link: "/programes" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false); // Close menu on click
  };

  return (
    <header className="fixed top-0 left-0 w-[100vw] z-50">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between md:justify-center backdrop-blur-md bg-pink-300/10 rounded-full shadow-sm mt-1.5">
        {/* Desktop Nav */}
        <Link
          to="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <img
            src="/logo.png"
            alt="Jack & Jills Logo"
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center justify-center scroll-smooth">
          <div className="bg-pink-200/30 px-4 py-1 rounded-full flex items-center gap-3 shadow-inner backdrop-blur-3xl">
            <div className="flex gap-3">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="px-4 py-2 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition"
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
            <a
              href="https://wa.me/7819000288"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-2 bg-purple-500 text-white rounded-full shadow-md hover:shadow-purple-500/50 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="relative w-full md:hidden flex items-center justify-center gap-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none text-3xl absolute left-3"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo1.png"
              alt="Jack & Jills Logo"
              className="h-10 w-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/70 mt-2 mx-4 px-6 py-5 rounded-2xl shadow-xl backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4 text-center font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="block px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
                  onClick={handleMenuClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/7819000288"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-green-600 text-white rounded-full shadow hover:shadow-purple-500/40 transition"
                onClick={handleMenuClick}
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
