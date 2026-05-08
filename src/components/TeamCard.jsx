import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import anand from "../assets/anand.jpeg";
import anbuSuriya from "../assets/anbu suriya.jpeg";
import satishkumar from "../assets/Sathishkumar.jpeg";
import arunkumar from "../assets/arunkumar.jpeg";
import devaraj from "../assets/Devaraj.jpeg";
import duraikannu from "../assets/duraikannu.jpeg";
import karthick from "../assets/Karthick.jpeg";
import madhurai from "../assets/Madhurai.jpeg";
import murugan from "../assets/Murugan.jpeg";
import muruganOne from "../assets/murugan1.jpeg";
import hema from "../assets/Hema.jpeg";
import bathmajaa from "../assets/Bathmajaa.jpeg";
import parvin from "../assets/Parvin.jpeg";
import naveen from "../assets/Naveen.jpeg";
import pravin from "../assets/Pravin.jpeg";
import preethi from "../assets/preethi.jpeg";
import sakarai from "../assets/Sakarai.jpeg";
import shanmugam from "../assets/Shanmugam.jpeg";
import shiva from "../assets/Shiva.jpeg";
import sundramoorthy from "../assets/Sundramoorthy.jpeg";
import suthakhar from "../assets/Suthakhar.jpeg";
import thanigaivelan from "../assets/Thanigaivelan.jpeg";
import thiyagu from "../assets/Thiyagu.jpeg";
import vairamani from "../assets/Vairamani.jpeg";
import Sadam from "../assets/Sadam.jpeg";

const teamData = [
  {
    name: "Mr. Anand",
    role: "Business Consultant",
    company: "BusiHunt",
    image: anand,
  },
  {
    name: "Mr. Anbu Suriya",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: anbuSuriya,
  },
  {
    name: "Mr. Satish Kumar",
    role: "Water Purifier",
    company: "Green Ocean Aquatech",
    image: satishkumar,
  },
  {
    name: "Mr. Arun Kumar",
    role: "Business Development",
    company: "BusiHunt",
    image: arunkumar,
  },
  {
    name: "Mr. Devaraj",
    role: "Corporate Services",
    company: "BusiHunt",
    image: devaraj,
  },
  {
    name: "Mr. Duraikannu",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: duraikannu,
  },
  {
    name: "Mr. Karthick",
    role: "Marketing",
    company: "BusiHunt",
    image: karthick,
  },
  {
    name: "Mr. Madhurai",
    role: "Business Consultant",
    company: "BusiHunt",
    image: madhurai,
  },
  {
    name: "Mr. Murugan",
    role: "Corporate Loans",
    company: "RR Associates",
    image: murugan,
  },
  {
    name: "Mr. Murugan",
    role: "Finance",
    company: "BusiHunt",
    image: muruganOne,
  },
  {
    name: "Mrs. Hema",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: hema,
  },
  {
    name: "Mrs. Bathmajaa",
    role: "Business Owner",
    company: "BusiHunt",
    image: bathmajaa,
  },
  {
    name: "Mr. Parvin",
    role: "Business Consultant",
    company: "BusiHunt",
    image: parvin,
  },
  {
    name: "Mr. Naveen",
    role: "Marketing Specialist",
    company: "BusiHunt",
    image: naveen,
  },
  {
    name: "Mr. Pravin",
    role: "Business Networking",
    company: "BusiHunt",
    image: pravin,
  },
  {
    name: "Mrs. Preethi",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: preethi,
  },
  {
    name: "Mr. Sakarai",
    role: "Furniture",
    company: "Furniture Lifestyle",
    image: sakarai,
  },
  {
    name: "Mr. Shanmugam",
    role: "Business Consultant",
    company: "BusiHunt",
    image: shanmugam,
  },
  {
    name: "Mr. Shiva",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: shiva,
  },
  {
    name: "Mr. Sundramoorthy",
    role: "Corporate Services",
    company: "BusiHunt",
    image: sundramoorthy,
  },
  {
    name: "Mr. Suthakhar",
    role: "Marketing",
    company: "BusiHunt",
    image: suthakhar,
  },
  {
    name: "Mr. Thanigaivelan",
    role: "Business Owner",
    company: "BusiHunt",
    image: thanigaivelan,
  },
  {
    name: "Mr. Thiyagu",
    role: "Entrepreneur",
    company: "BusiHunt",
    image: thiyagu,
  },
  {
    name: "Mr. Vairamani",
    role: "Business Consultant",
    company: "BusiHunt",
    image: vairamani,
  },
  {
    name: "Mr. Vairamani",
    role: "Business Consultant",
    company: "BusiHunt",
    image: Sadam,
  },
];


export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1F2A5A]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#E63946]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#E63946] text-xs font-semibold tracking-[2px] uppercase shadow-sm">
            Our Team
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2A5A] leading-tight">
            Meet The Professionals
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A strong network of ambitious professionals committed to business growth,
            leadership, and meaningful collaborations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-10">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_15px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_rgba(31,42,90,0.16)] transition-all duration-500"
            >
              {/* Top Image Section */}
              <div className="relative h-[420px] sm:h-[460px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091224] via-[#091224]/20 to-transparent"></div>

                {/* Premium Glass Effect */}
                <div className="absolute top-5 left-5 backdrop-blur-xl bg-white/20 border border-white/20 px-4 py-2 rounded-full text-white text-[11px] tracking-wide uppercase font-medium">
                  BusiHunt Member
                </div>

                {/* Floating Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">
                  <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[24px] p-5 shadow-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-[28px] font-bold text-white leading-tight">
                          {member.name}
                        </h3>

                        <p className="mt-2 text-[#ffb3b8] uppercase tracking-[2px] text-xs font-semibold">
                          {member.role}
                        </p>

                        <p className="mt-3 text-gray-200 text-sm leading-relaxed max-w-[250px]">
                          {member.company}
                        </p>
                      </div>

                      {/* Arrow Button */}
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-white text-[#1F2A5A] flex items-center justify-center group-hover:bg-[#E63946] group-hover:text-white transition duration-300 shadow-lg">
                        <FiArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#1F2A5A] to-[#E63946] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
