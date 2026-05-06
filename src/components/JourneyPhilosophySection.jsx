import React from "react";
import { motion } from "framer-motion";

const philosophyPoints = [
  {
    title: "Empowerment",
    description:
      "Providing members with the right tools, resources, and opportunities to grow confidently in their industries.",
  },
  {
    title: "Innovation",
    description:
      "Encouraging collaboration, creativity, and forward-thinking ideas that help businesses evolve faster.",
  },
  {
    title: "Collaboration",
    description:
      "Building a supportive networking culture where professionals connect, share insights, and succeed together.",
  },
];

export default function JourneyPhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">
            Our Foundation
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2A5A] md:text-5xl">
            Driven by Vision & Collaboration
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            BusiHunt helps entrepreneurs and professionals connect, collaborate,
            and grow through meaningful networking opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(31,42,90,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(31,42,90,0.14)]"
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#E63946]/5 blur-3xl transition-all duration-500 group-hover:bg-[#E63946]/10" />

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E63946]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7 text-[#E63946]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="relative mt-7">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">
                Our Journey
              </span>

              <h3 className="mt-4 text-2xl font-black leading-tight text-[#1F2A5A] md:text-3xl">
                From Small Connections to a Thriving Community
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                BusiHunt started with one simple mission — helping professionals
                and entrepreneurs build meaningful business relationships.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Today, we continue empowering members through networking,
                collaboration, and business growth opportunities.
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative overflow-hidden rounded-[30px] bg-[#1F2A5A] p-8 shadow-[0_20px_60px_rgba(31,42,90,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(31,42,90,0.25)]"
          >
            {/* Glow */}
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18l-1.813-2.096a5.25 5.25 0 1111.626 0L18 18l-.813-2.096"
                />
              </svg>
            </div>

            <div className="relative mt-7">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">
                Our Philosophy
              </span>

              <h3 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
                Empowering Businesses Through Collaboration
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                We believe success grows faster when professionals collaborate,
                support, and learn from each other.
              </p>

              {/* Points */}
              <div className="mt-7 space-y-4">
                {philosophyPoints.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E63946] text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
