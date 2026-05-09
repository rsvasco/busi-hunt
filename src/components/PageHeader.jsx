import { motion } from "framer-motion";
import aboutBg from "../assets/about.png";

export default function PageHeader() {
  return (
    <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B122B]/80 via-[#243266]/50 to-[#0B122B]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
        >
          About Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Discover the story behind BusiHunt and our mission to empower entrepreneurs and professionals through innovation, collaboration, and meaningful business connections.
        </motion.p>
      </div>
    </section>
  );
}