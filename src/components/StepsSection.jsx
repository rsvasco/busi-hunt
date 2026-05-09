import { motion } from "framer-motion";
import {
  FiUserPlus,
  FiFileText,
  FiCreditCard,
  FiCheckCircle,
  FiUsers,
  FiStar,
} from "react-icons/fi";

// ===== ICON WRAPPER (MATCHING YOUR DESIGN) =====
const IconWrapper = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-[#E63946]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E63946]/20">
    {children}
  </div>
);

// ===== STEPS DATA =====
export const stepsData = [
  {
    icon: FiUserPlus,
    step: "01",
    title: "Create Your Profile",
    desc: "Sign up and complete your professional profile with your business information and goals.",
  },
  {
    icon: FiFileText,
    step: "02",
    title: "Choose a Chapter",
    desc: "Browse available chapters in your city or opt for our online virtual chapter.",
  },
  {
    icon: FiCreditCard,
    step: "03",
    title: "Complete Registration",
    desc: "Submit your membership application and pay the one-time registration fee.",
  },
  {
    icon: FiCheckCircle,
    step: "04",
    title: "Get Verified",
    desc: "Our team reviews and verifies your application within 48 hours.",
  },
  {
    icon: FiUsers,
    step: "05",
    title: "Attend Orientation",
    desc: "Join a welcome session to meet fellow members and learn about BusiHunt programs.",
  },
  {
    icon: FiStar,
    step: "06",
    title: "Start Networking",
    desc: "Access all events, resources, and connections available to BusiHunt members.",
  },
];

export default function StepsSection({ steps = stepsData }) {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Badge */}
  <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#E63946]/10 border border-[#E63946]/20 mb-6">
    <span className="text-[#E63946] text-xs md:text-sm font-semibold tracking-[0.35em] uppercase">
      How to Join
    </span>
  </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A5A] mb-3">
            Become Part of the Fastest Business Network
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Six simple steps to becoming a BusiHunt member.
          </p>
        </div>

        {/* ===== STEPS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E63946]/10 blur-3xl rounded-full"></div>
              </div>

              {/* Step Number */}
              <span className="absolute top-4 right-4 text-3xl font-bold text-gray-100 group-hover:text-gray-200 transition">
                {step.step}
              </span>

              {/* Icon */}
              <IconWrapper>
                <step.icon size={20} className="text-[#E63946] transition group-hover:scale-110" />
              </IconWrapper>

              {/* Title */}
              <h3 className="font-semibold text-[#1F2A5A] text-lg mb-2 group-hover:text-[#E63946] transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition">
                {step.desc}
              </p>

              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
