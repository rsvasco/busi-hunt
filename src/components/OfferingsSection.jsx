import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    number: "01",
    title: "Networking Events",
    description:
      "Exclusive business meetups and events that help members build meaningful professional relationships and partnerships.",
  },
  {
    number: "02",
    title: "Knowledge Sharing",
    description:
      "Interactive workshops and expert-led sessions designed to keep members informed, skilled, and future-ready.",
  },
  {
    number: "03",
    title: "Mentorship Programs",
    description:
      "Guidance from experienced professionals focused on helping entrepreneurs and leaders accelerate growth.",
  },
  {
    number: "04",
    title: "Community Platform",
    description:
      "A collaborative environment where members connect, share ideas, and support each other continuously.",
  },
];

function OfferCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(31,42,90,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(31,42,90,0.10)]"
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E63946]/5 blur-2xl transition-all duration-500 group-hover:bg-[#E63946]/10" />

      {/* Number */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E63946]/10 text-base font-black text-[#E63946]">
        {item.number}
      </div>

      {/* Content */}
      <div className="relative mt-5">
        <h3 className="text-lg font-black text-[#1F2A5A]">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E63946] text-[10px] font-bold text-white">
        ✓
      </div>

      <p className="text-sm leading-6 text-slate-200">{text}</p>
    </div>
  );
}

export default function OfferingsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
            What We Offer
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2A5A] md:text-5xl">
            Empowering Businesses Through Premium Networking
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-slate-600 md:text-base">
            BusiHunt provides powerful opportunities for entrepreneurs,
            professionals, and business leaders to connect, learn, and grow
            together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {offerings.map((item, index) => (
              <OfferCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[28px] bg-[#1F2A5A] p-7 shadow-[0_20px_60px_rgba(31,42,90,0.16)] md:p-9"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E63946] backdrop-blur-sm">
                Join BusiHunt
              </span>

              <h3 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                Unlock Opportunities & Grow Your Network
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-slate-300 md:text-base">
                Become part of a thriving professional ecosystem where
                collaboration, mentorship, and innovation create real business
                growth opportunities.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Connect with professionals globally",
                  "Gain mentorship from industry leaders",
                  "Access premium networking events",
                  "Grow your personal and business brand",
                ].map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>

              {/* Button */}
              <div className="mt-9">
                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-[#E63946] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#E63946]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#d92f3c]"
                >
                  Join Our Community

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
