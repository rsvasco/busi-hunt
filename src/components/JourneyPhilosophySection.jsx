import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket,
  Lightbulb,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function VisionCollaborationSection() {
  const features = [
    {
      icon: <Rocket size={16} />,
      title: "Empowerment",
      desc: "Unlock opportunities and scale confidently.",
    },
    {
      icon: <Lightbulb size={16} />,
      title: "Innovation",
      desc: "Encouraging creative collaboration and growth.",
    },
    {
      icon: <Users size={16} />,
      title: "Community",
      desc: "Meaningful relationships that create success.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF2FF] to-[#F3F5FF] py-14 md:py-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#E63946]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#243B7A]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.65fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/10 bg-white/80 px-4 py-2 shadow-md backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-[#E63946]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                Our Foundation
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-tight text-[#1E2A5A] sm:text-5xl md:text-6xl">
              Vision
              <br />

              <span className="text-[#E63946]">
                Meets
              </span>

              <br />

              Collaboration
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-600">
              BusiHunt creates premium networking experiences where ambitious
              professionals connect, collaborate, and grow together through
              innovation and meaningful relationships.
            </p>

            {/* Quote Card - NEW POSITION */}
            <motion.div
              whileHover={{ y: -3 }}
              className="mt-7 flex max-w-md items-start gap-4 rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E63946]/10 text-[#E63946]">
                <Quote size={20} />
              </div>

              <div>
                <p className="text-[15px] font-semibold leading-7 text-[#1E2A5A]">
                  Great businesses grow faster when ambitious minds connect and collaborate together.
                </p>

                <div className="mt-3 h-[3px] w-14 rounded-full bg-[#E63946]" />
              </div>
            </motion.div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { value: "100+", label: "Members" },
                { value: "20+", label: "Events" },
                { value: "2", label: "Chapters" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="rounded-[22px] border border-white/70 bg-white/90 px-6 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] backdrop-blur-md"
                >
                  <h3 className="text-2xl font-black text-[#1E2A5A]">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#243B7A] via-[#1E2A5A] to-[#2B2965] p-6 shadow-[0_20px_50px_rgba(31,42,90,0.14)]">

              {/* Glow */}
              <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-[#E63946]/20 blur-3xl" />

              {/* Arrow */}
              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#E63946] shadow-lg">
                <ArrowRight size={18} />
              </div>

              {/* Heading */}
              <h3 className="max-w-[260px] text-[34px] font-black leading-[1.1] text-white">
                Empowering Businesses Through Collaboration
              </h3>

              {/* Feature Cards */}
              <div className="mt-6 space-y-4">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E63946] shadow-md">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-[18px] font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-[14px] leading-7 text-slate-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              {/* CTA */}
<Link
  to="/how-to-join"
  className="
    group
    mt-5
    flex
    items-center
    justify-between
    rounded-[24px]
    bg-gradient-to-r
    from-[#FF4D5A]
    to-[#E63946]
    px-5
    py-5
    shadow-[0_12px_30px_rgba(230,57,70,0.28)]
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-[0_18px_40px_rgba(230,57,70,0.35)]
  "
>
  <div>
    <h4 className="text-xl font-black text-white">
      Join Our Network
    </h4>

    <p className="mt-1 text-sm text-white/90">
      Build valuable business connections.
    </p>
  </div>

  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-white
      text-[#E63946]
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:scale-110
    "
  >
    <ArrowRight size={20} />
  </div>
</Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}