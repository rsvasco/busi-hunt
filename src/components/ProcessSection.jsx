import React from "react";
import { FaUserCheck, FaSearch, FaUsers, FaChartLine } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Apply Online",
    description:
      "Fill out a simple application form to express your interest in joining our network.",
    icon: <FaUserCheck />,
  },
  {
    step: "02",
    title: "Get Reviewed",
    description:
      "Our team reviews your application and matches you with the right chapter.",
    icon: <FaSearch />,
  },
  {
    step: "03",
    title: "Join Chapter",
    description:
      "Get welcomed into a local chapter and start building meaningful connections.",
    icon: <FaUsers />,
  },
  {
    step: "04",
    title: "Grow Together",
    description:
      "Attend events, share referrals, and watch your business thrive.",
    icon: <FaChartLine />,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#E63946] uppercase tracking-wider">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Your Journey With Us
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Getting started with BusiHunt is simple. Follow these four steps to begin your growth journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* Connector Line (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-[2px] bg-gray-300" />
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1F2A5A]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-[#1F2A5A] group-hover:bg-[#1F2A5A] group-hover:text-white transition">
                  <span className="text-lg">{step.icon}</span>
                </div>

                {/* Step */}
                <p className="text-xs font-bold text-[#E63946] uppercase tracking-wider">
                  Step {step.step}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 leading-relaxed flex-grow">
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}