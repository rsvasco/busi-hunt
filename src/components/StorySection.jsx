import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ab from '../assets/ab.png'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function SectionWrapper({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PrimaryButton({ to = "/", children }) {
  return (
    <Link
      to={to}
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-black
        px-5
        py-2.5
        text-[13px]
        font-medium
        text-white
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-neutral-800
        hover:shadow-xl
      "
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

const stats = [
  {
    value: "10K+",
    label: "Members",
  },
  {
    value: "30+",
    label: "Cities",
  },
  {
    value: "15",
    label: "Countries",
  },
];

export default function StorySection() {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-12 md:grid-cols-2 lg:gap-16">

        {/* Left Image */}
        <SectionWrapper>
          <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <img
              src= {ab}
              alt="Office Team"
              className="h-[220px] w-full object-cover sm:h-[300px] md:h-[340px]"
            />
          </div>
        </SectionWrapper>

        {/* Right Content */}
        <SectionWrapper delay={0.15}>
          <div className="max-w-lg">

            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ef4444]">
              OUR STORY
            </span>

            <h2 className="mt-3 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-[34px] lg:text-[42px]">
               Born from a Vision to Connect Ambitious Business Minds
            </h2>

            <p className="mt-5 text-[14px] leading-[1.75] text-[#6b7280]">
              BusiHunt was created with a simple yet powerful vision: to empower
  entrepreneurs, professionals, and business owners through meaningful
  connections, collaboration, and shared opportunities.
            </p>

            <p className="mt-4 text-[14px] leading-[1.75] text-[#6b7280]">
              What began as a growing community in Pondicherry has evolved into
  Pondicherry's fastest growing business network, where 100+ members
  exchange referrals, share knowledge, and grow together with confidence.
            </p>

            <div className="mt-8">

              <Link
                to="/how-to-join"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#ef4444]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#dc2626]
                "
              >
                Join Our Community
              </Link>

            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}