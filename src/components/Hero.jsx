import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
    badge: "Build Strong Connections",
    title: "Connect With",
    highlight: "Industry Leaders",
    desc:
      "Expand your professional circle through premium networking events, collaborations, and meaningful business meetups.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    badge: "Grow Your Network",
    title: "Collaborate With",
    highlight: "Business Minds",
    desc:
      "Join ambitious entrepreneurs, founders, and professionals building powerful business relationships.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    badge: "Unlock Opportunities",
    title: "Innovate.",
    highlight: "Connect. Grow.",
    desc:
      "Discover partnerships, events, and opportunities that help your business grow faster.",
  },
];

const stats = [
  { value: "500+", label: "Members" },
  { value: "40+", label: "Events" },
  { value: "120+", label: "Partners" },
  { value: "15+", label: "Chapters" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#081120]">
      
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="Business Community"
            className="
              h-full
              w-full
              object-cover
              object-center
              md:object-center
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#081120]/75" />

      {/* GLOW EFFECTS */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E63946]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        
        <div className="mx-auto w-full max-w-7xl text-center text-white">
          
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#E63946]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/80
                sm:text-[11px]
              "
            >
              {slides[index].badge}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mx-auto
              mt-6
              max-w-6xl
              text-[42px]
              font-black
              leading-[0.92]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[110px]
            "
          >
            {slides[index].title}

            <span className="mt-2 block text-[#E63946]">
              {slides[index].highlight}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            key={slides[index].desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="
              mx-auto
              mt-5
              max-w-xs
              text-sm
              leading-7
              text-slate-300
              sm:max-w-xl
              sm:text-base
              md:max-w-2xl
              md:text-lg
            "
          >
            {slides[index].desc}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            {/* PRIMARY BUTTON */}
            <a
              href="/how-to-join"
              className="
                group
                inline-flex
                w-full
                max-w-[240px]
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-[#E63946]
                px-7
                py-4
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                shadow-[0_12px_35px_rgba(230,57,70,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#d62f3f]
                sm:w-auto
              "
            >
              Join Now

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="/about"
              className="
                inline-flex
                w-full
                max-w-[240px]
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-white/5
                px-7
                py-4
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
                sm:w-auto
              "
            >
              Learn More
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="
              mx-auto
              mt-10
              grid
              max-w-5xl
              grid-cols-2
              gap-3
              sm:mt-14
              sm:grid-cols-4
              sm:gap-5
            "
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.09]
                  sm:p-6
                "
              >
                <h3
                  className="
                    text-3xl
                    font-black
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    text-slate-400
                    sm:text-sm
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          flex
          -translate-x-1/2
          gap-3
        "
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all
              duration-300
              ${
                i === index
                  ? "h-3 w-10 rounded-full bg-[#E63946]"
                  : "h-3 w-3 rounded-full bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}