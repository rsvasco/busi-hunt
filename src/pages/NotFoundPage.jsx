import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20 bg-[#1F2A5A]">

      {/* Soft Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#E63946]/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#E63946]/15 blur-3xl rounded-full" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
        className="relative w-full max-w-[460px]"
      >

        {/* Shadow */}
        <div className="absolute inset-0 bg-black/20 blur-2xl scale-105 rounded-[32px]" />

        {/* Card */}
        <div className="relative bg-white rounded-[28px] px-8 sm:px-10 py-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden">

          {/* Small Decorative Blur */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#E63946]/10 rounded-full blur-3xl" />

          {/* 404 */}
          <motion.h1
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[72px] sm:text-[88px] font-black leading-none tracking-[-4px]"
          >
            <span className="text-[#1F2A5A]">
              4
            </span>

            <span className="text-[#E63946]">
              0
            </span>

            <span className="text-[#1F2A5A]">
              4
            </span>
          </motion.h1>

          {/* Title */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#1F2A5A]">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            The page you’re looking for doesn’t exist
            or has been moved from the BusiHunt network.
          </p>

          {/* Button */}
          <motion.a
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="/"
            className="group relative inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-[#1F2A5A] text-white font-semibold text-sm sm:text-base shadow-[0_12px_30px_rgba(31,42,90,0.25)] overflow-hidden hover:bg-[#18214A] transition-all duration-300"
          >

            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <span className="relative flex items-center gap-2">
              Return To Home

              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}