import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-[#1F2A5A]/10 blur-[140px] -top-10 -left-10 rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-[#E63946]/10 blur-[140px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E63946] mb-3">
            Our Location
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A5A] leading-tight">
            Visit Our Experience Hub
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Where connections become collaborations and opportunities turn into success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A5A]/80 via-transparent to-transparent z-10" />

            {/* Red hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#E63946]/10 z-10" />

            {/* Map */}
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4847017711113!2d79.81104320000001!3d11.940906300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361f46a91e8cb%3A0xffe85a9a6d291d47!2sBusiHunt!5e0!3m2!1sen!2sin!4v1777974786792!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BusiHunt Location"
        />
        </div>

            {/* Animated location badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md z-20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E63946]"></span>
              </span>
              <span className="text-xs font-semibold text-[#1F2A5A]">BusiHunt HQ</span>
            </div>
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5"
          >

            {/* Glass card */}
            <div className="bg-[#1F2A5A]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Your Network Starts Here
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Walk into a space built for growth, collaboration, and powerful connections.
              </p>

              {/* Info */}
              <div className="space-y-6 text-sm">

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10">
                    <FaMapMarkerAlt className="text-[#E63946]" />
                  </div>
                  <p className="text-gray-200">
                    No. 513, Kamaraj Salai, Sathya Nagar, Saram, Puducherry - 605013
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10">
                    <FaPhoneAlt className="text-[#E63946]" />
                  </div>
                  <p className="text-gray-200">+91 9500900595</p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10">
                    <FaClock className="text-[#E63946]" />
                  </div>
                  <p className="text-gray-200">Mon – Sat, 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <a
                  href="https://www.google.com/maps?q=11.9409063,79.8110432"
                  target="_blank"
                  className="bg-[#E63946] px-6 py-3 rounded-xl text-sm font-semibold text-center hover:scale-105 hover:shadow-xl transition"
                >
                  Get Directions →
                </a>

                <a
                  href="tel:+919500900595"
                  className="bg-white text-[#1F2A5A] px-6 py-3 rounded-xl text-sm font-semibold text-center hover:bg-gray-100 hover:scale-105 transition"
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
