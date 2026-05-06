import React from "react";

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.05fr_1fr] md:px-8 lg:gap-12">
        {/* Left Image */}
        <div className="group relative overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(31,42,90,0.10)]">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
            alt="BusiHunt Member"
            className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px] md:h-[415px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A5A]/20 via-transparent to-transparent" />
        </div>

        {/* Right Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[#E63946]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E63946]">
            Testimonial
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-black leading-[1.1] text-[#1F2A5A] md:text-[52px]">
            What Our Members Say
          </h2>

          {/* Card */}
          <div className="mt-7 rounded-[22px] border border-slate-200 bg-[#f8f8f8] p-5 shadow-[0_10px_35px_rgba(31,42,90,0.05)] md:p-6">
            {/* Stars */}
            <div className="mt-1 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FBBF24"
                  className="h-4.5 w-4.5"
                >
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-1.01l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-[15px] italic leading-8 text-slate-500 md:text-[17px]">
              “As a entrepreneur, I found Busihunt to be a game-changer for my textile business. The networking events introduced me to invaluable contacts, while the mentorship program provided insights that significantly improved my operational strategies.”
            </blockquote>

            {/* User */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F2A5A] shadow-[0_8px_20px_rgba(31,42,90,0.25)]">
                <span className="text-lg font-semibold text-white">
                    R
                </span>
            </div>

              <div>
                <p className="text-[15px] font-bold text-[#1F2A5A]">
                  Rajesh Kumar
                </p>

                <p className="text-[13px] text-slate-500">
                  Entrepreneur
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="/how-to-join"
              className="inline-flex items-center rounded-xl bg-[#E63946] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(230,57,70,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d92f3d]"
            >
              Join BusiHunt Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
