import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import one from '../assets/heroone.jpg'
import two from '../assets/herotwo.jpg'
import three from '../assets/herothree.jpg'
import { Link } from "react-router-dom";

const slides = [
  {
    image: one,
    badge: "Unlock Opportunities",
    title: "Innovate.",
    highlight: "Connect. Grow.",
    desc:
      "Discover partnerships, events, and opportunities that help your business grow faster.",
  },

  {
    image: two,
    badge: "Build Strong Connections",
    title: "Connect With",
    highlight: "Business Leaders",
    desc:
      "Join ambitious entrepreneurs, founders, and professionals building powerful business relationships.",
  },

  {
    image: three,
    badge: "Grow Your Network",
    title: "Collaborate With",
    highlight: "Industry Experts",
    desc:
      "Expand your professional circle through premium networking events, collaborations, and meaningful business meetups.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#081120]">

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
            alt="Business Networking"
            className="w-full h-full object-cover object-[65%_center] sm:object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#081120]/72" />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

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
      <div className="relative z-10 flex min-h-[92svh] items-center justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl text-center text-white">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl"
          >

            <span className="w-2 h-2 rounded-full bg-[#E63946]" />

            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-semibold text-white/80">
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
              mt-6
              mx-auto
              max-w-5xl
              text-[46px]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[88px]
              font-black
              leading-[0.98]
              tracking-tight
              text-white
            "
          >
            {slides[index].title}

            <span className="block mt-2 text-[#E63946]">
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
              mt-6
              max-w-xs
              sm:max-w-xl
              md:max-w-2xl
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              text-slate-300
            "
          >
            {slides[index].desc}
          </motion.p>

          {/* SOCIAL PROOF */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="
    mt-4
    text-xs
    sm:text-sm
    md:text-base
    font-medium
    text-white/85
  "
>
  Pondicherry's Fastest Growing Business Network • 100+ Members • Referral-Driven Growth
</motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >

            {/* PRIMARY BUTTON */}
            {/* PRIMARY BUTTON */}
<Link
  to="/how-to-join"
  className="
    group
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-[#E63946]
    px-8
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
  "
>
  Join Now

  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

{/* SECONDARY BUTTON */}
<Link
  to="/about"
  className="
    inline-flex
    items-center
    justify-center
    rounded-2xl
    border
    border-white/15
    bg-white/5
    px-8
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
  "
>
  About Us
</Link>
          </motion.div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all duration-300
              ${
                i === index
                  ? "w-10 h-3 rounded-full bg-[#E63946]"
                  : "w-3 h-3 rounded-full bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}