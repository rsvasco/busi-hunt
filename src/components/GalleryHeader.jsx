import { motion } from "framer-motion";
import galleryBg from "../assets/about.png";

export default function GalleryHeader() {
  return (
    <section className="relative min-h-[55vh] md:min-h-[68vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${galleryBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A5A]/90 via-[#1F2A5A]/40 to-[#E63946]/60" />

      {/* Glow Effects */}
      <div className="absolute -top-20 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1F2A5A]/30 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#E63946]/25 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.35em] text-[#E63946] text-xs sm:text-sm font-semibold mb-5"
        >
          Premium Gallery
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6"
        >
          Capturing{" "}
          <span className="text-[#E63946]">
            Memorable
          </span>{" "}
          Moments
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Explore inspiring celebrations, networking
          events, business gatherings, and unforgettable
          experiences from the vibrant BusiHunt
          community.
        </motion.p>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[4px] bg-gradient-to-r from-[#1F2A5A] to-[#E63946] rounded-full mx-auto mt-10"
        />
      </div>
    </section>
  );
}