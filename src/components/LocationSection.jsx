import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-[#1F2A5A]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#E63946]/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-xs uppercase tracking-[0.28em] text-[#E63946] mb-3 font-semibold">
            Our Location
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1F2A5A] leading-tight">
            Visit Our Experience Hub
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Where connections become collaborations and opportunities turn into success.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden rounded-[30px] shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
          >

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent z-10" />

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-[#E63946]/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

            {/* Open Maps Button */}
            <a
              href="https://www.google.com/maps?q=11.9409063,79.8110432"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-5 right-5 z-30 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold text-[#1F2A5A] shadow-lg hover:scale-105 transition"
            >
              Open Maps ↗
            </a>

            {/* MAP IFRAME */}
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[440px] overflow-hidden">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4847017711113!2d79.81104320000001!3d11.940906300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361f46a91e8cb%3A0xffe85a9a6d291d47!2sBusiHunt!5e0!3m2!1sen!2sin!4v1777974786792!5m2!1sen!2sin"
                className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BusiHunt Location"
              />
            </div>

            

            {/* Location Badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg z-20">

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E63946]"></span>
              </span>

              <span className="text-xs font-semibold text-[#1F2A5A]">
                BusiHunt HQ
              </span>
            </div>
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-[30px] p-[1px] bg-gradient-to-br from-white/20 to-white/5"
          >

            {/* Glassmorphism Card */}
            <div className="bg-[#1F2A5A]/95 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Your Network Starts Here
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-10">
                Walk into a space built for growth, collaboration, and powerful connections.
              </p>

              {/* INFO ITEMS */}
              <div className="space-y-6">

                {/* Address */}
                <div className="flex gap-4 items-start">

                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-[#E63946]" />
                  </div>

                  <p className="text-gray-200 leading-relaxed">
                    No. 513, Kamaraj Salai, Sathya Nagar,
                    Saram, Puducherry - 605013
                  </p>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-center">

                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-[#E63946]" />
                  </div>

                  <p className="text-gray-200">
                    +91 9500900595
                  </p>
                </div>

                {/* Timing */}
                <div className="flex gap-4 items-center">

                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-[#E63946]" />
                  </div>

                  <p className="text-gray-200">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <a
                  href="https://www.google.com/maps?q=11.9409063,79.8110432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E63946] text-white px-6 py-3 rounded-xl text-sm font-semibold text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Directions →
                </a>

                <a
                  href="tel:+919500900595"
                  className="bg-white text-[#1F2A5A] px-6 py-3 rounded-xl text-sm font-semibold text-center hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}