import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GrowthCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E63946]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Accent Line */}
            <div className="mb-8 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#E63946] to-transparent" />

            <h2 className="text-3xl font-black leading-tight text-[#1F2A5A] sm:text-4xl md:text-5xl">
              Grow Your Network.
              <span className="mt-2 block text-[#E63946]">
                Build Your Future.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base">
              At BusiHunt, we believe in the power of collaboration,
              mentorship, and meaningful business relationships. Join a
              thriving ecosystem designed to help entrepreneurs and
              professionals unlock growth opportunities.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Exclusive Networking",
                "Business Mentorship",
                "Growth Opportunities",
                "Global Community",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E63946]" />

                  <span className="text-sm font-semibold text-[#1F2A5A] sm:text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#E63946] via-[#ef3340] to-[#d62839] p-8 shadow-[0_25px_80px_rgba(230,57,70,0.35)] sm:p-10 md:p-14"
          >
            {/* Decorative Glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              {/* Small Line */}
              <div className="mb-8 h-[3px] w-14 rounded-full bg-white/70" />

              {/* Heading */}
              <h3 className="max-w-lg text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to Grow
                <span className="block">
                  Your Network &
                </span>
                <span className="block text-white/90">
                  Business?
                </span>
              </h3>

              {/* Description */}
              <p className="mt-6 max-w-md text-[15px] leading-8 text-white/90 sm:text-base">
                Join BusiHunt and connect with ambitious entrepreneurs,
                industry experts, and professionals building the future of
                business together.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {/* Primary Button */}
  <Link
    to="/how-to-join"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#E63946] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
  >
    Join Us Now
    <ArrowRight size={18} />
  </Link>

  {/* Secondary Button */}
  <Link
    to="/about"
    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
  >
    Learn More
  </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



