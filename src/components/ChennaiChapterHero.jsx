import beach from "../assets/cbeach.jpg";
import { Link } from "react-router-dom";

export default function ChapterHero() {
  return (
    <section className="relative overflow-hidden bg-[#081120]">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#E63946]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* MAIN GRID */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-4
          pt-28
          pb-16
          sm:px-6
          lg:grid-cols-2
          lg:gap-16
          lg:px-8
          lg:py-28
        "
      >

        {/* IMAGE FIRST IN MOBILE */}
        <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[540px]">

          {/* IMAGE CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            "
          >

            {/* IMAGE */}
            <img
              src={beach}
              alt="Chennai Business Community"
              className="
                h-[240px]
                sm:h-[360px]
                lg:h-[500px]
                w-full
                object-cover
                object-center
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/30 to-transparent" />

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                sm:bottom-6
                sm:left-6
                sm:right-6
              "
            >

              <div
                className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-black/40
                  p-4
                  backdrop-blur-xl
                  sm:p-6
                "
              >

                {/* LABEL */}
                <p
                  className="
                    text-[9px]
                    sm:text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white/60
                  "
                >
                  Premium Community
                </p>

                {/* TITLE */}
                <h3
                  className="
                    mt-3
                    text-3xl
                    sm:text-4xl
                    font-black
                    leading-[1]
                    tracking-tight
                    text-white
                  "
                >
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

        {/* CONTENT */}
        <div className="order-2 lg:order-1 max-w-2xl">

          {/* BADGE */}
          <div
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              backdrop-blur-xl
              sm:px-5
            "
          >

            <span
              className="
                text-[9px]
                sm:text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/70
              "
            >
              Chennai Chapter
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-6
              text-[40px]
              sm:text-6xl
              xl:text-7xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white
            "
          >
            Build Strong

            <span className="block text-[#E63946]">
              Business
            </span>

            Connections
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-xl
              text-[15px]
              leading-8
              text-slate-300
              sm:text-lg
            "
          >
            Join the BusiHunt Chennai Chapter and connect with entrepreneurs, founders, and professionals in one of India’s most dynamic business hubs.
          </p>

          {/* BUTTONS */}
<div className="mt-8 flex flex-col gap-4 sm:flex-row">

  {/* PRIMARY BUTTON */}
  <Link
    to="/contact"
    className="
      rounded-2xl
      bg-[#E63946]
      px-7
      py-4
      text-center
      text-sm
      font-bold
      uppercase
      tracking-[0.15em]
      text-white
      shadow-[0_10px_30px_rgba(230,57,70,0.35)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#d62f3f]
    "
  >
    Join Chapter
  </Link>

  {/* SECONDARY BUTTON */}
  {/* SECONDARY BUTTON */}
<a
  href="#members"
  className="
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-7
    py-4
    text-center
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
  Explore Members
</a>
</div>   

          {/* STATS */}
          <div
            className="
              mt-10
              grid
              grid-cols-3
              gap-4
              border-t
              border-white/10
              pt-7
              sm:flex
              sm:flex-wrap
              sm:gap-10
            "
          >

            {/* STAT */}
<div>
  <h3 className="text-xl sm:text-3xl font-black text-white">
    Expanding
  </h3>

  <p className="mt-1 text-xs sm:text-sm text-slate-400">
    Network
  </p>
</div>

{/* STAT */}
<div>
  <h3 className="text-xl sm:text-3xl font-black text-white">
    Ongoing
  </h3>

  <p className="mt-1 text-xs sm:text-sm text-slate-400">
    Events
  </p>
</div>

            {/* STAT 
            <div>

              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Valuable
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Partnerships
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}