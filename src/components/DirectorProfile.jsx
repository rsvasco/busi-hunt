import dir from '../assets/anand.png';


export default function DirectorProfile() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 md:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#E63946]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#1F2A5A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE SIDE */}
          <div className="relative w-full">
            {/* Decorative Shape */}
            <div className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-[28px] border border-[#E63946]/20 bg-[#E63946]/5 backdrop-blur-xl lg:block" />

            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/50 bg-white shadow-[0_20px_60px_rgba(31,42,90,0.10)]">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#1F2A5A]/10 via-transparent to-[#E63946]/10" />

              <img
                src={dir}
                alt="Director"
                loading="lazy"
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px] lg:h-[620px]"
              />

              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#1F2A5A]/80 to-transparent" />

              {/* Floating Name Card */}
              <div className="absolute bottom-5 left-5 z-30 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                  Director & Chairman
                </p>

                <h3 className="mt-1 text-xl font-black text-white md:text-2xl">
                  S. V. Anand
                </h3>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full max-w-[620px]">
            {/* Label */}
            <span className="inline-flex rounded-full border border-[#E63946]/10 bg-[#E63946]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E63946]">
              Meet Our Leader
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-black leading-[1.1] text-[#1F2A5A] sm:text-4xl lg:text-5xl">
              Visionary Leadership
              <span className="mt-1 block text-[#E63946]">
                Driving Business Growth
              </span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-5 text-[14px] leading-7 text-slate-600 sm:text-[15px] md:leading-8">
              <p>
                With over 18 years of leadership experience across multiple
                industries, S. V. Anand has built a reputation for innovation,
                strategic thinking, and creating impactful networking
                opportunities for entrepreneurs and professionals.
              </p>

              <p>
                His mission is to create a strong business ecosystem where
                collaboration, mentorship, and professional growth help
                entrepreneurs unlock their true potential.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(31,42,90,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,42,90,0.10)]">
                <h3 className="text-3xl font-black text-[#E63946]">
                  18+
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Years Experience
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(31,42,90,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,42,90,0.10)]">
                <h3 className="text-3xl font-black text-[#1F2A5A]">
                  100+
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Business Leaders
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-[#E63946] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(230,57,70,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d92d3a]">
                Connect Now
              </button>

              <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#1F2A5A] transition-all duration-300 hover:border-[#1F2A5A] hover:bg-[#1F2A5A] hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
