import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#1F2A5A] overflow-hidden text-white">

      {/* Soft radial spotlight (subtle, centered) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.12),transparent_70%)]" />

      {/* Minimal glow accents (reduced for compact section) */}
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-[#E63946]/20 blur-3xl -top-10 -left-10 rounded-full" />
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-[#E63946]/10 blur-3xl -bottom-10 -right-10 rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gray-300 mb-4"
        >
          BusiHunt Philosophy
        </motion.p>

        {/* Cinematic headline (responsive + compact) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
        >
          Your Network is Your
          <span className="block text-[#E63946] mt-1">
            Networth
          </span>
        </motion.h2>

        {/* Animated underline (short + elegant) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="h-[2px] bg-[#E63946] mx-auto mt-4 rounded-full"
        />

        {/* Supporting text (tight spacing for minimal height) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl mx-auto"
        >
          Build meaningful connections and unlock real opportunities through a powerful business network.
        </motion.p>

        {/* CTA (compact + centered) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-6"
        >
          <button className="relative px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#E63946] text-white text-sm sm:text-base font-medium overflow-hidden group transition">
            <span className="relative z-10">Join Now →</span>

            {/* subtle shine */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            <span className="absolute -left-[100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
