import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "Grow Your Network",
    description:
      "Build meaningful relationships with entrepreneurs, founders, and professionals through exclusive networking opportunities.",
    icon: Users,
    link: "/pondy-chapter",
  },
  {
    id: "02",
    title: "Grow Your Skills",
    description:
      "Unlock your potential with workshops, mentorship programs, and practical learning experiences.",
    icon: GraduationCap,
    link: "/how-to-join",
  },
  {
    id: "03",
    title: "Grow Your Business",
    description:
      "Accelerate your business growth with collaborations, exposure, and industry insights.",
    icon: Briefcase,
    link: "/team",
  },
];

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#050B18] py-14 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 bg-[#E63946]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#E63946]/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#E63946]/20 bg-[#E63946]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#ff5c68]">
            Business Community
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl">
            Your Network Is
            <span className="block bg-gradient-to-r from-[#E63946] to-[#ff8b94] bg-clip-text text-transparent">
              Your Networth
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Join one of the fastest growing business communities where ideas,
            innovation, and opportunities come together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0F172A]/95 to-[#081120]/95 p-6 transition-all duration-500 hover:border-[#E63946]/30"
              >
                {/* Hover Glow */}
                {/* Hover Glow */}
<div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
  <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/10 via-transparent to-transparent" />
</div>

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.3em] text-[#ff4d5a]">
                    {item.id}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1324] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                    <Icon className="h-5 w-5 text-[#ff4d5a]" />
                  </div>
                </div>

                {/* Line */}
                <div className="mt-7 h-[2px] w-12 bg-gradient-to-r from-[#E63946] to-transparent" />

                {/* Content */}
                <div className="mt-7">
                  <h3 className="max-w-[220px] text-[2rem] font-black leading-[1.05] tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
{/* Button */}
<div className="mt-8 relative z-10">
  <Link
    to={item.link}
    className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#E63946] hover:bg-[#E63946]"
  >
    Explore
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
  </Link>
</div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[28px] border border-transparent pointer-events-none transition-all duration-500 group-hover:border-[#E63946]/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}