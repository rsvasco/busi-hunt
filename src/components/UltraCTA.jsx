import { motion } from "framer-motion";

// ✅ Inline SVG icon (no external dependency)
const ArrowRightIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 12H6.75m10.5 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
    />
  </svg>
);

export default function UltraCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#1F2A5A] to-[#020617] overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-[#E63946] rounded-full blur-[120px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl px-6 sm:px-10 md:px-16 py-14 md:py-20 text-center shadow-2xl"
        >
          {/* Glow border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Scale Your Business 🚀
            </h2>

            <p className="text-white/70 text-base md:text-lg mb-10">
              Join a powerful network of entrepreneurs, unlock new opportunities,
              and accelerate your growth with BusiHunt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* ✅ FIX: replaced Link with anchor to avoid Router error */}
              <a
                href="/how-to-join"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#E63946] to-pink-500 transition-all duration-500 group-hover:scale-110" />
                <span className="relative flex items-center gap-2 text-white">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border border-white/20 text-white hover:bg-white hover:text-[#1F2A5A] transition-all duration-300"
              >
                Talk to Us
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ✅ Test cases
// 1. Component renders without React Router (no crash)
// 2. Buttons navigate using normal anchor links
// 3. Layout is responsive on mobile & desktop
// 4. Hover animation works on CTA button
// 5. No dependency errors (icons/router)

// ❗ If you WANT to use react-router Link instead:
// Wrap your app with <BrowserRouter> in main.jsx
// Then replace <a> back with <Link>
