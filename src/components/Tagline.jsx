import { motion } from "framer-motion";
import { FiArrowUpRight, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function TaglineSection() {
  return (
    <section className="bg-[#1F2A5A] overflow-hidden">

      <div className="w-full">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            bg-gradient-to-r
            from-[#1F2A5A]
            to-[#243A84]
            py-10
            sm:py-12
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-8
            "
          >

            {/* LEFT ICON */}
            <div
              className="
                flex-shrink-0
                w-22
                h-22
                bg-[#E63946]
                rounded-md
                flex
                items-center
                justify-center
                shadow-[0_10px_25px_rgba(0,0,0,0.2)]
              "
            >
              <FiShare2 className="text-white text-5xl" />
            </div>

            {/* CENTER CONTENT */}
            <div className="flex-1 text-center md:text-left">

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-white
                  tracking-tight
                  leading-tight
                "
              >
                Your Network Is{" "}

                <span className="text-[#FF4D5A]">
                  Your Networth
                </span>
              </h2>

              <p
                className="
                  mt-3
                  text-base
                  sm:text-lg
                  text-white/80
                "
              >
                Connect • Collaborate • Grow
              </p>
            </div>

            {/* RIGHT CTA */}
            <div className="flex-shrink-0">

              <Link to="/how-to-join">

                <button
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-7
                    py-4
                    text-[#1F2A5A]
                    font-semibold
                    text-base
                    transition-all
                    duration-300
                    hover:bg-gray-100
                  "
                >
                  Join Now

                  <FiArrowUpRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>

              </Link>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}