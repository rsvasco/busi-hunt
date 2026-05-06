import { useState, useEffect } from "react";
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

export default function Galleryone() {
  const [active, setActive] = useState(images[0]);

  // Auto cinematic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = images.findIndex((img) => img.id === prev.id);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-20 px-4 md:px-10 lg:px-20">
      {/* Premium Background Effects */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/10 rounded-full blur-3xl" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-purple-700 font-medium mb-4">
          Premium Moments
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-purple-800 to-pink-600 bg-clip-text text-transparent">
          Celebrating Connections & Success
        </h2>

        <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
          Explore memorable celebrations, networking moments, and business gatherings from our vibrant community.
        </p>
      </div>

      {/* Cinematic Gallery */}
      <div className="relative z-10 flex items-center justify-center min-h-[750px] perspective-[2000px]">
        {images.map((img, index) => {
          const isActive = active.id === img.id;

          return (
            <motion.div
              key={img.id}
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                y: isActive ? 0 : 20,
                opacity: isActive ? 1 : 0.75,
                scale: isActive ? 1 : 0.88,
                rotate: isActive
                  ? 0
                  : index === 0
                  ? -8
                  : index === 2
                  ? 8
                  : 0,
                x: isActive
                  ? 0
                  : index === 0
                  ? -180
                  : index === 2
                  ? 180
                  : 0,
                zIndex: isActive ? 30 : 10,
                filter: isActive ? "blur(0px)" : "blur(1px)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute cursor-pointer rounded-[32px] overflow-hidden backdrop-blur-2xl border border-white/30 bg-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.18)] ${
                isActive
                  ? "w-[92%] md:w-[75%] lg:w-[60%]"
                  : "w-[55%] md:w-[38%] lg:w-[28%]"
              }`}
              whileHover={{
                scale: isActive ? 1.02 : 0.94,
                rotateY: isActive ? 0 : index === 0 ? -6 : 6,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[32px] group">
                <img
                  src={img.image}
                  alt={img.title}
                  className={`w-full object-cover transition duration-1000 group-hover:scale-105 ${
                    isActive
                      ? "h-[500px] md:h-[650px]"
                      : "h-[280px] md:h-[380px]"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Luxury Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-60" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`font-bold text-white leading-tight drop-shadow-2xl ${
                      isActive
                        ? "text-3xl md:text-5xl"
                        : "text-lg md:text-2xl"
                    }`}
                  >
                    {img.title}
                  </motion.h3>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 text-white/80 max-w-lg text-sm md:text-base"
                    >
                      Capturing meaningful memories, celebrations, and inspiring moments from our professional business community.
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slider Indicators */}
      <div className="relative z-20 flex items-center justify-center gap-3 mt-10">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setActive(img)}
            className={`transition-all duration-500 rounded-full ${
              active.id === img.id
                ? "w-12 h-3 bg-gradient-to-r from-purple-600 to-pink-500"
                : "w-3 h-3 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
