import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] bg-[#1F2A5A] px-6 sm:px-10 md:px-16 py-10 md:py-14 text-center shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E63946]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#E63946]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Grow Your Business?
            </h2>

            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8">
              Join 500+ business leaders already leveraging BusiHunt’s powerful network to scale faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Primary Button */}
              <Link
                to="/how-to-join"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#E63946] text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Apply to Join
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white rounded-xl hover:bg-white hover:text-[#1F2A5A] transition-all duration-300"
              >
                Talk to Us
              </Link>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}