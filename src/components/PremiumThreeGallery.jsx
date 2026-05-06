import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import one from '../assets/WomensDay.jpeg'
import two from '../assets/DIWALICELEBRATIONS.jpeg'
import three from '../assets/NEWYEAR.jpeg'



const images = [
  {
    id: 1,
    title: "Women's Day Celebration",
    image: one ,
  },
  {
    id: 2,
    title: "Diwali Celebration",
    image: two,
  },
  {
    id: 3,
    title: "New Year Celebration",
    image: three,
  },
];

export default function PremiumThreeGallery() {
  const [active, setActive] = useState(images[0]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 px-4 md:px-10 lg:px-20 py-16">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      {/* Heading */}
      <div className="relative z-10 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-slate-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">
          Gallery Highlights
        </h2>
        <p className="text-slate-500 mt-4 text-base md:text-lg max-w-xl">
          A glimpse of our key moments
        </p>
      </div>

      {/* Layout */}
      <div className="relative z-10 grid lg:grid-cols-3 gap-6 items-start">

        {/* Left Thumbnails */}
        <div className="flex lg:flex-col gap-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              onClick={() => setActive(img)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border backdrop-blur-xl bg-white/40 shadow-lg transition-all duration-300 ${
                active.id === img.id
                  ? "border-purple-500 shadow-2xl scale-[1.02]"
                  : "border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-24 h-24 md:w-full md:h-32 object-cover group-hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Main Image */}
        <div className="lg:col-span-2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba\(0,0,0,0.15\)]"
            >
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-[320px] md:h-[600px] object-cover rounded-[28px]"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent rounded-2xl" />

              {/* Title */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl md:text-5xl font-bold tracking-wide text-white drop-shadow-2xl">
                  {active.title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
