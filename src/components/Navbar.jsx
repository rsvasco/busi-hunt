import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../assets/logo.png';

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    dropdown: [
      { label: "About Us", to: "/about" },
      { label: "About Director", to: "/director" },
    ],
  },
  {
  label: "Find a Chapter",
  dropdown: [
    { label: "Pondy Chapter", to: "/pondy-chapter" },
    { label: "Chennai Chapter", to: "/chennai-chapter" },
  ],
  },
  { label: "Team", to: "/team" },
  { label: "How to Join", to: "/how-to-join" },
  { label: "Gallery", to: "/gallery" },
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(null);
  const [desktopDropOpen, setDesktopDropOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropOpen(null);
  }, [location]);

 

  const isActive = (to) => location.pathname === to;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1F2A5A]/95 backdrop-blur-md border-b border-white/10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-2 sm:gap-3"
>
  <div className="rounded-xl bg-white/95 p-1.5 shadow-lg">
  <img
    src={logo}
    alt="BusiHunt Logo"
    className="
      h-8 w-auto
      sm:h-9
      md:h-10
      object-contain
    "
  />
</div>

  <div className="leading-none">
    <h1 className="text-lg font-bold text-white sm:text-xl">
      Busi
      <span className="text-[#E63946]">
        Hunt
      </span>
    </h1>

    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-slate-300">
      Business Excellence
    </p>
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDesktopDropOpen(link.label)}
                onMouseLeave={() => setDesktopDropOpen(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    desktopDropOpen === link.label ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={desktopDropOpen === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${desktopDropOpen === link.label ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {desktopDropOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white shadow-md rounded-md overflow-hidden z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E63946] "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-[#E63946]"
                    : "text-white hover:text-[#E63946]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          {/* CTA Button */}
          <Link
  to="/contact"
  className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-[#E63946] to-[#ff4d5a] text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(230,57,70,0.35)]"
>
  Get In Touch
</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-primary border-t border-blue-900 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-white text-sm font-medium hover:text-[#E63946] transition-colors"
                      onClick={() =>
                        setMobileDropOpen(
                          mobileDropOpen === link.label ? null : link.label
                        )
                      }
                      aria-expanded={mobileDropOpen === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileDropOpen === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropOpen === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-[#E63946] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                      isActive(link.to) ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              {/* Mobile CTA */}
<Link
  to="/contact"
  className="mt-4 w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#E63946] to-[#ff4d5a] text-white text-sm font-semibold transition-all duration-300"
>
  Get In Touch
</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}