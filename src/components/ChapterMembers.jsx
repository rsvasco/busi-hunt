import anand from "../assets/anand.jpeg";

import satishkumar from "../assets/Sathishkumar.jpeg";
import arunkumar from "../assets/kumar.png";
import devaraj from "../assets/Devaraj.jpeg";
import duraikannu from "../assets/duraikannu.jpeg";

import madhurai from "../assets/Madhurai.jpeg";

import muruganOne from "../assets/murugan1.jpeg";


import parvin from "../assets/Parvin.jpeg";
import babu from "../assets/babu.jpeg";

import sakarai from "../assets/Sakarai.jpeg";


import thanigaivelan from "../assets/tha.png";

import vairamani from "../assets/Vairamani.jpeg";

import { Link } from "react-router-dom";

const members = [
  {
    name: "S. V. Anand",
    designation: "Director",
    businessCategory: "Leadership",
    company: "BusiHunt",
    image: anand,
  },
  {
    name: "Mr. Murugan",
    designation: "Support Director",
    businessCategory: "Corporate Loans",
    company: "RR Associates",
    image: muruganOne,
  },
  {
    name: "Parvin Begum",
    designation: "Secretary Treasurer",
    businessCategory: "Tours & Travels",
    company: "TQ Fly Travels",
    image: parvin,
  },
  {
    name: "Vairamani",
    designation: "President",
    businessCategory: "Gym & Fitness",
    company: "Vairam Fitness Centre",
    image: vairamani,
  },
  {
    name: "Thanigaivelan Shanmugam",
    designation: "Vice President",
    businessCategory: "Digital Marketing",
    company: "Advanzo Digital Solutions",
    image: thanigaivelan,
  },
  {
    name: "Sathishkumar",
    designation: "LGT Coordinator",
    businessCategory: "Green Organic Kitchen / Water Purifier",
    company: "",
    image: satishkumar,
  },
  {
    name: "Devaraj",
    designation: "Menfo Coordinator",
    businessCategory: "Mobile Sales & Service",
    company: "Sivam Mobiles",
    image: devaraj,
  },
  {
    name: "Sakkarai",
    designation: "Growth Coordinator",
    businessCategory: "Furniture",
    company: "Furnitures Lifestyle",
    image: sakarai,
  },
  {
    name: "Madhurai",
    designation: "Attendance Coordinator",
    businessCategory: "Photography",
    company: "Athibene Creations",
    image: madhurai,
  },
  {
    name: "Arun Kumar",
    designation: "Referral Coordinator",
    businessCategory: "",
    company: "",
    image: arunkumar,
  },
   {
    name: "Babu",
    designation: "M2M Coordinator",
    businessCategory: "Steel",
    company: "Investment World",
    image: babu,
  }, 
  {
    name: "Duraikannu",
    designation: "Attire Coordinator",
    businessCategory: "Printers",
    company: "PRP Printers",
    image: duraikannu,
  },
];

export default function ChapterMembers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F5F9FF] to-[#EDF4FF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">
            Leadership Team
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1F2A5A] md:text-6xl">
            Meet Our
            <span className="block text-[#E63946]">Chapter Members</span>
          </h2>
        </div>

        {/* Member Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-white p-2 shadow-[0_20px_70px_rgba(15,23,42,0.10)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_110px_rgba(15,23,42,0.18)]"
            >
              {/* Soft Outer Glow */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#E63946]/10 via-transparent to-[#1F2A5A]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              {/* Card Body */}
              <div className="relative overflow-hidden rounded-[28px] bg-white">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[360px] sm:h-[400px] lg:h-[460px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4D06F]/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#1F2A5A]/45 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-white/12 blur-3xl transition-transform duration-700 group-hover:scale-150 sm:right-6 sm:top-6 sm:h-24 sm:w-24" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6 lg:p-7">
                  {/* Accent Line */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-12 rounded-full bg-[#E63946] sm:w-16" />
                    <span className="h-1.5 w-3 rounded-full bg-white/80 sm:w-4" />
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.1rem] font-black leading-tight tracking-[-0.03em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                    {member.name}
                  </h3>

                  {/* Business Category */}
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.20em] text-[#F4D06F]">
                    {member.businessCategory}
                  </p>

                  {/* Company */}
                  {member.company && (
                    <p className="mt-1 text-sm font-medium text-white/85">
                      {member.company}
                    </p>
                  )}

                  {/* Designation Badge */}
                  <div className="mt-4 inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#E63946] shadow-[0_0_12px_rgba(230,57,70,0.8)]" />
                    <span className="ml-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.30em] text-white">
                      {member.designation}
                    </span>
                  </div>
                </div>

                {/* Inner Border */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] bg-[#1F2A5A] px-6 py-16 text-center transition-all duration-500 hover:-translate-y-1 md:px-12">
          <h3 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Your Network Is Your
            <span className="block text-[#E63946]">Networth</span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build strong business relationships and unlock powerful growth
            opportunities through BusiHunt.
          </p>

          <Link
            to="/how-to-join"
            className="mt-10 inline-flex rounded-2xl bg-[#E63946] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#d62f3f]"
          >
            Join BusiHunt
          </Link>
        </div>
      </div>
    </section>
  );
}