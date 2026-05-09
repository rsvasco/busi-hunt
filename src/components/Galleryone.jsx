import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";

import {
  FiDownload,
  FiZoomIn,
  FiZoomOut,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from "react-icons/fi";

import one from "../assets/WomensDay.jpeg";
import two from "../assets/DIWALICELEBRATIONS.jpeg";
import three from "../assets/NEWYEAR.jpeg";

const images = [
  {
    id: 1,
    title: "Women's Day Celebration",
    image: one,
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

  // FULL GALLERY MODAL
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = images.findIndex(
          (img) => img.id === prev.id
        );

        const nextIndex =
          (currentIndex + 1) % images.length;

        return images[nextIndex];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // OPEN IMAGE
  const openGallery = (index) => {
    setSelectedIndex(index);
    setZoom(1);
  };

  // CLOSE
  const closeGallery = () => {
    setSelectedIndex(null);
    setZoom(1);
  };

  // NEXT IMAGE
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  // PREV IMAGE
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    setZoom(1);
  };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative overflow-hidden bg-[#f4f6fb] py-20 px-4 md:px-10 lg:px-20">
        {/* PREMIUM BG */}
        <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-[#1F2A5A]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#E63946]/10 rounded-full blur-3xl" />

        {/* HEADING */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-[#E63946] font-semibold mb-4">
            MEMORIES & EVENTS
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            <span className="text-[#1F2A5A]">
              Celebrating
            </span>{" "}
            <span className="text-[#E63946]">
              Connections & Success
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            Explore celebrations, business gatherings,
            networking events and memorable moments from
            our vibrant community.
          </p>
        </div>

        {/* CINEMATIC GALLERY */}
        <div className="relative z-10 flex items-center justify-center min-h-[750px] perspective-[2000px]">
          {images.map((img, index) => {
            const isActive = active.id === img.id;

            return (
              <motion.div
                key={img.id}
                onClick={() => {
                  setActive(img);
                  openGallery(index);
                }}
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
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: isActive ? 1.02 : 0.95,
                }}
                className={`absolute overflow-hidden rounded-[34px] cursor-pointer border border-white/40 bg-white/20 backdrop-blur-xl shadow-[0_35px_120px_rgba(31,42,90,0.18)] ${
                  isActive
                    ? "w-[92%] md:w-[75%] lg:w-[60%]"
                    : "w-[55%] md:w-[38%] lg:w-[28%]"
                }`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden group">
                  <img
                    src={img.image}
                    alt={img.title}
                    className={`w-full object-cover transition duration-1000 group-hover:scale-110 ${
                      isActive
                        ? "h-[500px] md:h-[650px]"
                        : "h-[280px] md:h-[380px]"
                    }`}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A5A]/95 via-[#1F2A5A]/20 to-transparent" />

                  {/* RED GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E63946]/20 via-transparent to-transparent" />

                  {/* FULLSCREEN ICON */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <FiMaximize2 size={18} />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                    <h3
                      className={`font-black text-white leading-tight ${
                        isActive
                          ? "text-3xl md:text-5xl"
                          : "text-lg md:text-2xl"
                      }`}
                    >
                      {img.title}
                    </h3>

                    {isActive && (
                      <p className="mt-4 text-white/80 max-w-lg text-sm md:text-base">
                        Capturing meaningful memories,
                        celebrations, and inspiring
                        moments from our professional
                        community.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INDICATORS */}
        <div className="relative z-20 flex items-center justify-center gap-3 mt-10">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => setActive(img)}
              className={`transition-all duration-500 rounded-full ${
                active.id === img.id
                  ? "w-12 h-3 bg-gradient-to-r from-[#1F2A5A] to-[#E63946]"
                  : "w-3 h-3 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* FULL PREMIUM GALLERY */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* TOP BAR */}
            <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-b from-black/70 to-transparent">
              {/* TITLE */}
              <div>
                <h3 className="text-white text-lg md:text-2xl font-bold">
                  {images[selectedIndex].title}
                </h3>

                <p className="text-white/60 text-sm">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* ZOOM IN */}
                <button
                  onClick={() =>
                    setZoom((prev) => prev + 0.2)
                  }
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#1F2A5A] transition"
                >
                  <FiZoomIn size={20} />
                </button>

                {/* ZOOM OUT */}
                <button
                  onClick={() =>
                    setZoom((prev) =>
                      prev > 1 ? prev - 0.2 : 1
                    )
                  }
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#1F2A5A] transition"
                >
                  <FiZoomOut size={20} />
                </button>

                {/* DOWNLOAD */}
                <a
                  href={images[selectedIndex].image}
                  download
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#E63946] transition"
                >
                  <FiDownload size={20} />
                </a>

                {/* CLOSE */}
                <button
                  onClick={closeGallery}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#E63946] text-white flex items-center justify-center hover:scale-105 transition"
                >
                  <FiX size={22} />
                </button>
              </div>
            </div>

            {/* PREV BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#1F2A5A] transition"
            >
              <FiChevronLeft size={28} />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#1F2A5A] transition"
            >
              <FiChevronRight size={28} />
            </button>

            {/* MAIN IMAGE */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-20">
              <motion.img
                key={images[selectedIndex].image}
                src={images[selectedIndex].image}
                alt={images[selectedIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: zoom,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* BOTTOM THUMBNAILS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 overflow-x-auto px-4 py-2 max-w-full">
              {images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => {
                    setSelectedIndex(index);
                    setZoom(1);
                  }}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    selectedIndex === index
                      ? "border-[#E63946] scale-110"
                      : "border-white/20 opacity-60"
                  }`}
                >
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}