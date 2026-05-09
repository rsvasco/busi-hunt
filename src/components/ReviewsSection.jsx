import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Entrepreneur",
    review:
      "BusiHunt completely transformed my professional network. The mentorship and referrals helped me secure clients and grow faster than expected.",
    initial: "R",
    rating: 5,
  },
  {
    name: "Anitha Reddy",
    role: "Founder & CEO, ITNOW",
    review:
      "Joining BusiHunt opened new opportunities for my startup. The networking sessions and community support are truly valuable.",
    initial: "A",
    rating: 5,
  },
  {
    name: "Lakshmi Priya",
    role: "Organic Farming Venture",
    review:
      "The BusiHunt community helped me scale my business confidently and connect with the right people at the right time.",
    initial: "L",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-52 w-52 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-[#E63946]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E63946]">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1F2A5A] sm:text-4xl">
          What Our Members Say
        </h2>

        {/* Stars */}
        <div className="mt-7 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < testimonial.rating ? "#E63946" : "#D1D5DB"}
              className="h-4 w-4"
            >
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-1.01l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
            </svg>
          ))}
        </div>

        {/* Review */}
        <div className="relative mt-7 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <blockquote className="max-w-2xl text-lg italic leading-relaxed text-black sm:text-xl">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              {/* Profile */}
              <div className="mt-7 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F2A5A] shadow-[0_10px_30px_rgba(31,42,90,0.25)]">
                  <span className="text-xl font-semibold text-white">
                    {testimonial.initial}
                  </span>
                </div>

                <h4 className="mt-4 text-xl font-bold text-[#1F2A5A]">
                  {testimonial.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#1F2A5A] transition-all duration-300 hover:border-[#E63946] hover:text-[#E63946]"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={
                  current === index
                    ? "h-2 w-6 rounded-full bg-[#E63946] transition-all duration-300"
                    : "h-2 w-2 rounded-full bg-slate-300 transition-all duration-300"
                }
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#1F2A5A] transition-all duration-300 hover:border-[#E63946] hover:text-[#E63946]"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
