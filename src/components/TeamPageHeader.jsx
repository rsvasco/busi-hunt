import { motion } from "framer-motion";
import teamBg from "../assets/join.jpeg"; // change your image path

export default function TeamPageHeader() {
  return (
    <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${teamBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B122B]/50 via-[#1E3A5F]/15 to-[#0B122B]/50" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E63946]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFD166]/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center mt-28" >

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight mt-20"
        >
          Our Team
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Meet the passionate leaders and dedicated professionals behind
          BusiHunt who work together to build strong business communities,
          meaningful collaborations, and impactful networking opportunities.
        </motion.p>
      </div>
    </section>
  );
}