import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

export default function ChennaiChapterMembers() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1F2A5A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#E63946]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#E63946]/10 border border-[#E63946]/20 mb-6">
            <span className="text-[#E63946] text-xs md:text-sm font-semibold tracking-[0.35em] uppercase">
              Chennai Chapter
            </span>
          </div>

          {/* Title */}
          <h2 className="font-extrabold leading-tight">
            <span className="block text-[#1F2A5A] text-4xl md:text-5xl lg:text-6xl">
              Chennai
            </span>
            <span className="block text-[#E63946] text-4xl md:text-5xl lg:text-6xl mt-1">
              Chapter Members
            </span>
          </h2>

          {/* Empty State Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-white border border-slate-200 rounded-3xl shadow-lg px-8 py-12 md:px-12 md:py-14">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1F2A5A]/8 flex items-center justify-center">
                <FiUsers className="text-[#1F2A5A] text-4xl opacity-70" />
              </div>

              {/* Main Message */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2A5A] mb-4">
                No Members Available
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Member information for the Chennai Chapter will be added soon.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}