import beach from '../assets/cbeach.jpg'



export default function ChapterHero() {
  return (
    <section className="relative overflow-hidden bg-[#081120]">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E63946]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Chennai Chapter
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[1] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Build Strong
            <span className="block text-[#E63946]">
              Business
            </span>
            Connections
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Join a premium networking community designed for entrepreneurs,
            founders, and professionals to connect, collaborate, and grow.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            <button className="rounded-2xl bg-[#E63946] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_30px_rgba(230,57,70,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d62f3f]">
              Join Chapter
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
              Explore Members
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
            
            <div>
              <h3 className="text-4xl font-black text-white">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Members
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                40+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Events
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                120+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Partnerships
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[540px]">
          
          {/* Main Image */}
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            
            <img
              src= {beach}
              alt="Business Networking"
              className="h-[320px] w-full object-cover sm:h-[500px]"
            />

            {/* Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081120] to-transparent p-8">
              
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
                
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Premium Community
                </p>

                <h3 className="mt-4 text-4xl font-black leading-tight text-white">
                  Connect.
                  <span className="block text-[#E63946]">
                    Collaborate.
                  </span>
                  Grow.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}