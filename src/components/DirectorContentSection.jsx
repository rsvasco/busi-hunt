import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Entrepreneurial Leadership",
    content:
      "As Director and Chairman of BusiHunt, S. V. Anand spearheads a global networking vision designed to unite entrepreneurs, innovators, and industry leaders through impactful business forums and strategic collaborations.",
  },
  {
    title: "Strategic Vision",
    content:
      "BusiHunt is built on the belief that powerful communities create extraordinary opportunities. Through curated networking events and collaborative ecosystems, the platform empowers professionals to grow, connect, and lead with confidence.",
  },
  {
    title: "Commitment to Excellence",
    content:
      "Driven by innovation, integrity, and inclusivity, BusiHunt continues redefining modern business networking by creating meaningful spaces for learning, mentorship, partnerships, and long-term professional success.",
  },
  {
    title: "Join Us",
    content:
      "Join a thriving business ecosystem where ideas turn into opportunities and relationships become partnerships. Together, let’s shape the future of entrepreneurship and professional collaboration.",
  },
];

function ContentCard({ title, content, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8"
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E63946]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E63946]/20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#E63946] shadow-[0_0_18px_rgba(230,57,70,0.45)]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E63946]">
            BusiHunt Leadership
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-black leading-tight tracking-tight text-[#1F2A5A] sm:text-[30px]">
          {title}
        </h2>

        {/* Divider */}
        <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#E63946] via-[#ff6b75] to-transparent" />

        {/* Content */}
        <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
          {content}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1F2A5A] transition-all duration-300 group-hover:translate-x-1">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
}

export default function DirectorContentSections() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E63946]">
            Leadership Vision
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#1F2A5A] sm:text-5xl md:text-6xl">
            Building Stronger
            <span className="block text-[#E63946]">
              Business Communities
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            Empowering entrepreneurs and professionals through leadership,
            innovation, collaboration, and impactful networking opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:gap-8">
          {sections.map((section, index) => (
            <ContentCard
              key={section.title}
              title={section.title}
              content={section.content}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-[#E63946] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(230,57,70,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d62839] hover:shadow-[0_18px_40px_rgba(230,57,70,0.45)]">
            Connect With BusiHunt
          </button>
        </div>
      </div>
    </section>
  );
}


