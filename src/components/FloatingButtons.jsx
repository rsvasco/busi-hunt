import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4 sm:bottom-7 sm:right-7">
      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#4A9EFF] shadow-[0_10px_30px_rgba(74,158,255,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_40px_rgba(74,158,255,0.45)] sm:h-16 sm:w-16"
            aria-label="Scroll to top"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              className="relative z-10 h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0-6 6m6-6 6 6"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919500900595"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(37,211,102,0.45)] sm:h-16 sm:w-16"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative z-10 h-7 w-7 fill-white sm:h-8 sm:w-8"
        >
          <path d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.08-.29-.14-1.21-.44-2.3-1.41-.85-.76-1.42-1.69-1.58-1.97-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.91 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33z" />
          <path d="M16.01 3C8.84 3 3 8.74 3 15.82c0 2.26.6 4.47 1.74 6.42L3 29l6.95-1.8c1.88 1.01 3.99 1.54 6.06 1.54h.01c7.17 0 13-5.74 13-12.82C29.01 8.74 23.18 3 16.01 3zm0 23.44h-.01c-1.92 0-3.8-.52-5.44-1.49l-.39-.23-4.12 1.07 1.1-4-.25-.41c-1.09-1.74-1.67-3.75-1.67-5.81 0-6.04 4.84-10.95 10.79-10.95 2.88 0 5.58 1.11 7.61 3.13a10.8 10.8 0 0 1 3.16 7.73c0 6.04-4.84 10.96-10.78 10.96z" />
        </svg>
      </motion.a>
    </div>
  );
}
