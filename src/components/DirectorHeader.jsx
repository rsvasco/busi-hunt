import { motion } from "framer-motion";
import directorBg from "../assets/hero1.png";

export default function DirectorHeader() {
  return (
    <section className="relative min-h-[58vh] md:min-h-[68vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${directorBg})`,
        }}  
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B122B]/85 via-[#243266]/55 to-[#E63946]/45" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-10 text-center">
        
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.28em] text-[#E63946] text-[10px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-5"
        >
          Leadership & Vision
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold text-white tracking-tight leading-[1.05] mb-5 sm:mb-6"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Our
          </span>

          <span className="block text-[#E63946] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 sm:mt-2">
            Directors
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-[95%] sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed"
        >
          Discover the passionate leaders behind
          BusiHunt who drive innovation, inspire
          collaboration, and shape meaningful business
          connections across our growing community.
        </motion.p>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="h-[4px] bg-gradient-to-r from-[#1F2A5A] to-[#E63946] rounded-full mx-auto mt-8 sm:mt-10"
        />
      </div>
    </section>
  );
}