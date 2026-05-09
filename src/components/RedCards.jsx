import React from "react";
import { motion } from "framer-motion";

const redCards = [
  {
    title: "Global Network",
    description:
      "Access a worldwide community of entrepreneurs and professionals ready to collaborate.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9m-8-9h16"
        />
      </svg>
    ),
  },
  {
    title: "Fast Growth",
    description:
      "Accelerate your business growth with curated resources, mentors, and opportunities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 17l6-6 4 4 7-7M14 8h7v7"
        />
      </svg>
    ),
  },
  {
    title: "Recognition",
    description:
      "Get recognized for your achievements within a community that celebrates success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17l-5 3 1.5-5.5L4 10l5.7-.5L12 4l2.3 5.5L20 10l-4.5 4.5L17 20l-5-3z"
        />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export default function PremiumRedCardsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F5F9FF] to-[#EDF4FF] py-20 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1F2A5A]/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#E63946]/20 bg-[#E63946]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E63946]">
            Why Choose BusiHunt
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#1F2A5A] sm:text-4xl lg:text-5xl">
            Premium Networking
            <span className="block text-[#E63946]">
              For Modern Businesses
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Everything you need to accelerate your business journey with a premium business community.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {redCards.map((card, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-[26px] bg-[#E63946] p-[1px] shadow-[0_15px_50px_rgba(230,57,70,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_70px_rgba(230,57,70,0.28)]"
              >
                <div className="relative h-full rounded-[26px] bg-gradient-to-br from-[#E63946] via-[#e93f4d] to-[#cf2f3b] p-6 sm:p-7">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    {card.icon}
                  </div>

                  <div className="relative mt-6">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/80">
                      {card.description}
                    </p>
                  </div>

                  <div className="relative mt-7 flex items-center justify-between">
                    <div className="h-[2px] w-full max-w-[120px] bg-white/20 transition-all duration-500 group-hover:max-w-[160px]"></div>

                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20"
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
