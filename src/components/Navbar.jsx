import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    dropdown: [
      { label: "About Us", to: "/about" },
      { label: "About Director", to: "/director" },
    ],
  },
  { label: "Find a Chapter", to: "/chapter" },
  { label: "Team", to: "/team" },
  { label: "How to Join", to: "/how-to-join" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [desktopDropOpen, setDesktopDropOpen] = useState(false);
  const location = useLocation();
  const dropRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDesktopDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <header className="bg-[#1F2A5A] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#E63946] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BH</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide font-poppins">
            Busi<span className="text-[#E63946]">Hunt</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                ref={dropRef}
                className="relative"
                onMouseEnter={() => setDesktopDropOpen(true)}
                onMouseLeave={() => setDesktopDropOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    desktopDropOpen ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={desktopDropOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${desktopDropOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {desktopDropOpen && (
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
                      onClick={() => setMobileDropOpen(!mobileDropOpen)}
                      aria-expanded={mobileDropOpen}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropOpen && (
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}