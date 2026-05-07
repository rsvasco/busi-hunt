import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    badge: "Welcome to BusiHunt",
    title: "Grow Your Business",
    highlight: "Connect. Collaborate. Succeed.",
    desc: "Africa's leading business networking organization connecting entrepreneurs and professionals to real opportunities.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
    badge: "Build Strong Network",
    title: "Expand Your Reach",
    highlight: "Meet. Engage. Grow.",
    desc: "Join powerful business communities and build meaningful professional relationships.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    badge: "Unlock Opportunities",
    title: "Achieve More Faster",
    highlight: "Learn. Partner. Succeed.",
    desc: "Collaborate with experts and unlock new growth opportunities for your business.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* SMOOTH FADE SLIDES */}
      {slides.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1F2A5A]/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          {/* Badge */}
          <div className="inline-block bg-[#E63946] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            {slides[index].badge}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            {slides[index].title}
          </h1>

          {/* Highlight */}
          <h2 className="text-[#E63946] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            {slides[index].highlight}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {slides[index].desc}
          </p>

          {/* BETTER BUTTON DESIGN */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/how-to-join"
              className="px-6 py-3 rounded-lg bg-[#E63946] hover:bg-red-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105"
            >
              Join Now
            </a>

            <a
              href="/about"
              className="px-6 py-3 rounded-lg border border-white/60 hover:border-white text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#E63946] scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
