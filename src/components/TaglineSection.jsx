import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#1e2a4a] via-[#1a2440] to-[#0f172a] text-white">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-[120px] top-10 left-10 rounded-full"></div>
        <div className="absolute w-[300px] h-[300px] bg-red-500/10 blur-[100px] bottom-10 right-10 rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-6">

        {/* Small label */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          BusiHunt Philosophy
        </p>

        {/* Main tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Your Network is Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
            Networth
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Build meaningful relationships, unlock opportunities, and grow faster
          with a powerful network of like-minded professionals.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <button className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105">
            Join the Network →
          </button>
        </motion.div>
      </div>
    </section>
  );
}