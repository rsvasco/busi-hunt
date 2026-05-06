import { motion } from "framer-motion";

export default function PageHeader() {
  return (
    <section className="bg-[#243266] py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          About Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Discover the story behind BusiHunt and our mission to transform business networking.
        </motion.p>
      </div>
    </section>
  );
}
