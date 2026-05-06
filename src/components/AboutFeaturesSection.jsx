import {
  Users,
  Handshake,
  GraduationCap,
  Globe,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Networking Opportunities",
    subtitle: "Connect with Like-minded Professionals",
    description:
      "Exclusive business networking events and online communities that help members build strong professional relationships and valuable partnerships.",
  },
  {
    icon: Handshake,
    title: "Mentorship Programs",
    subtitle: "Receive Tailored Guidance",
    description:
      "Gain personalized mentorship and expert advice from experienced entrepreneurs and industry leaders to accelerate your growth.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge Sharing",
    subtitle: "Stay Ahead of Industry Trends",
    description:
      "Workshops, webinars, and discussions designed to provide cutting-edge insights, trends, and innovative business strategies.",
  },
  {
    icon: Globe,
    title: "Global Community",
    subtitle: "Leverage a World of Expertise",
    description:
      "Collaborate with professionals from different industries and regions, opening doors to new perspectives and opportunities.",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    subtitle: "Grow Your Skill Set",
    description:
      "Enhance leadership, communication, and strategic thinking skills that help professionals grow both personally and professionally.",
  },
  {
    icon: HeartHandshake,
    title: "Visibility & Branding",
    subtitle: "Increase Your Visibility",
    description:
      "Showcase your expertise, success stories, and achievements to build credibility and strengthen your professional brand.",
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E63946]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E63946]/20" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F2A5A]/5 text-[#E63946] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white">
          <Icon size={26} strokeWidth={2.2} />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-black leading-tight text-[#1F2A5A] sm:text-[28px]">
          {feature.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-4 text-base font-semibold text-slate-800">
          {feature.subtitle}
        </p>

        {/* Description */}
        <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function AboutFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E63946]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E63946]">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#1F2A5A] sm:text-5xl md:text-6xl">
            Features That Drive
            <span className="block text-[#E63946]">
              Business Growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">
            Discover the opportunities, mentorship, collaboration, and
            professional growth experiences that make BusiHunt a powerful
            business community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
