import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaChalkboardTeacher,
  FaGlobe,
  FaBook,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Networking Events",
    description:
      "Regular meetups designed to foster genuine business relationships and collaborations.",
  },
  {
    icon: <FaHandshake />,
    title: "Business Referrals",
    description:
      "A structured referral system that drives real revenue for every member.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Mentorship",
    description:
      "Learn from seasoned entrepreneurs and gain insights to accelerate your growth.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description:
      "Connect with members across 12+ countries and expand your business network.",
  },
  {
    icon: <FaBook />,
    title: "Workshops",
    description:
      "Hands-on training sessions covering key business and growth strategies.",
  },
  {
    icon: <FaHeart />,
    title: "Community",
    description:
      "A supportive ecosystem where members collaborate and grow together.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Features That Drive Growth
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            BusiHunt provides a comprehensive suite of tools and experiences
            designed to accelerate your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-[#1F2A5A] mb-4 group-hover:bg-[#1F2A5A] group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}