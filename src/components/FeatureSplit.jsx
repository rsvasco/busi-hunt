import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FeatureSplit() {
  return (
    <section className="py-16 md:py-24 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80"
            alt="Business meeting"
            className="w-full h-72 sm:h-80 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">

          <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            Africa's Premier Business Network
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            BusiHunt is a community-driven organization dedicated to empowering entrepreneurs and business professionals through networking, mentorship, and collaboration.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
            With chapters spanning over 30 cities, we create environments where businesses can thrive, connections are made, and opportunities are unlocked.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d62839] transition"
            >
              Discover Our Story
              <FaArrowRight size={14} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
