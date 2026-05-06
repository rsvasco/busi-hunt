import { useState } from "react";
import { FiLinkedin, FiPhone, FiMail, FiX } from "react-icons/fi";
import one from '../assets/MURUGAN.png'
import two from '../assets/SAKARAI.png'
import three from '../assets/SATHISHKUMAR.png'

// ===== SAMPLE DATA =====
const teamData = [
  {
    name: "Mr. Murugan",
    role: "Corporate Loans",
    company: "RR Associates",
    image: one,
    phone: "+91 9500900595",
    email: "murugan@busihunt.com",
    linkedin: "#",
    bio: "Helping businesses secure funding and scale faster with strategic financial solutions.",
  },
  {
    name: "Mr. Sakkarai",
    role: "Furnitures",
    company: "Furnitures Lifestyle",
    image: two,
    phone: "+91 9500900595",
    email: "sakkarai@busihunt.com",
    linkedin: "#",
    bio: "Designing modern furniture solutions tailored for lifestyle and comfort.",
  },
  {
    name: "Mr. Satish Kumar",
    role: "Water Purifier",
    company: "Green Ocean Aquatech",
    image: three,
    phone: "+91 9500900595",
    email: "satish@busihunt.com",
    linkedin: "#",
    bio: "Providing trusted water purification systems for healthier living.",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-[#f9fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A5A] mb-3">
            Meet Our Vibrant Team
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            A powerful network of professionals driving growth together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(31,42,90,0.12)] transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(member)}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover group-hover:scale-[1.03] transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

                {/* BADGE */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-[#1F2A5A] shadow-sm">
                  BusiHunt Member
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-[22px] font-bold text-[#1F2A5A] leading-tight mb-1">
                  {member.name}
                </h3>

                <p className="text-[#E63946] font-semibold text-sm uppercase tracking-wide mb-2">
                  {member.role}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {member.company}
                </p>

                {/* ACTIONS */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${member.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1F2A5A] hover:bg-[#1F2A5A] hover:text-white transition"
                    >
                      <FiPhone size={16} />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1F2A5A] hover:bg-[#1F2A5A] hover:text-white transition"
                    >
                      <FiMail size={16} />
                    </a>

                    <a
                      href={member.linkedin}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1F2A5A] hover:bg-[#1F2A5A] hover:text-white transition"
                    >
                      <FiLinkedin size={16} />
                    </a>
                  </div>

                  <button className="px-4 py-2 rounded-full bg-[#1F2A5A] text-white text-sm font-medium hover:bg-[#E63946] transition">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-xl w-full rounded-[30px] overflow-hidden relative shadow-2xl">

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#1F2A5A] shadow-md"
              >
                <FiX size={18} />
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#1F2A5A] mb-1">
                  {selected.name}
                </h3>

                <p className="text-[#E63946] font-semibold uppercase tracking-wide text-sm mb-2">
                  {selected.role}
                </p>

                <p className="text-gray-500 mb-5">
                  {selected.company}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {selected.bio}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={`tel:${selected.phone}`}
                    className="px-5 py-3 rounded-full bg-[#1F2A5A] text-white text-sm font-medium hover:bg-[#E63946] transition"
                  >
                    Call Now
                  </a>

                  <a
                    href={`mailto:${selected.email}`}
                    className="px-5 py-3 rounded-full border border-gray-200 text-[#1F2A5A] text-sm font-medium hover:bg-gray-100 transition"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
