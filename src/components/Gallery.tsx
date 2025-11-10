import { motion } from "framer-motion";

const GalleryCarousel = () => {
  const row1 = [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const row2 = [
    "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3773838/pexels-photo-3773838.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const row3 = [
    "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184313/pexels-photo-3184313.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183185/pexels-photo-3183185.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const duplicate = (arr) => [...arr, ...arr];

  return (
    <section className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Infinite{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Carousel
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            All rows scroll in sync from right → left for a clean, modern visual flow.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {[row1, row2, row3].map((row, idx) => (
            <motion.div
              key={idx}
              className="flex gap-8"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 95 + idx * 5, // subtle variation for depth
                ease: "linear",
              }}
            >
              {duplicate(row).map((src, i) => (
                <div
                  key={`${idx}-${i}`}
                  className="flex-shrink-0 w-[320px] h-[190px] overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/40 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge fade overlays */}
      <div className="pointer-events-none absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-950 to-transparent" />
    </section>
  );
};

export default GalleryCarousel;
