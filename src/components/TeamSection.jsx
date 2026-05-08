import { motion } from "framer-motion";
import { FiLinkedin, FiPhone, FiMail } from "react-icons/fi";
import one from '../assets/Murugan1.jpeg'
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
  },
  {
    name: "Mr. Sakkarai",
    role: "Furnitures",
    company: "Furnitures Lifestyle",
    image: two,
    phone: "+91 9500900595",
    email: "sakkarai@busihunt.com",
    linkedin: "#",
  },
  {
    name: "Mr. Satish Kumar",
    role: "Water Purifier",
    company: "Green Ocean Aquatech",
    image: three,
    phone: "+91 9500900595",
    email: "satish@busihunt.com",
    linkedin: "#",
  },
  {
    name: "Mr. Devaraj",
    role: "Mobile Sales & Service",
    company: "Sivam Mobiles",
    image: one,
    phone: "+91 9500900595",
    email: "devaraj@busihunt.com",
    linkedin: "#",
  },
];

export default function TeamSection() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamData.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group [perspective:1200px]"
            >

              {/* CARD */}
              <div className="relative h-[360px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-md bg-white">
                  <div className="relative h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-[#E63946] font-medium">{member.role}</p>
                      <p className="text-xs text-gray-300">{member.company}</p>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl bg-[#1F2A5A] text-white flex flex-col justify-center items-center gap-4 px-6 text-center [transform:rotateY(180deg)] backface-hidden">

                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#E63946]">{member.role}</p>

                  {/* ACTIONS */}
                  <div className="flex gap-4 mt-4">
                    <a href={`tel:${member.phone}`} className="p-3 rounded-full bg-white/10 hover:bg-[#E63946] transition">
                      <FiPhone />
                    </a>
                    <a href={`mailto:${member.email}`} className="p-3 rounded-full bg-white/10 hover:bg-[#E63946] transition">
                      <FiMail />
                    </a>
                    <a href={member.linkedin} className="p-3 rounded-full bg-white/10 hover:bg-[#E63946] transition">
                      <FiLinkedin />
                    </a>
                  </div>

                  {/* CTA */}
                  <button className="mt-6 px-5 py-2 rounded-full bg-[#E63946] text-sm font-medium hover:scale-105 transition">
                    View Profile
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
