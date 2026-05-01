// src/components/HeroImageStack.jsx
import { motion } from "framer-motion";

/**
 * Floating stacked-card hero animation.
 * Three cards: lavender (back-left), photo (front), pink (back-right).
 * All three drift continuously with offset durations for organic motion.
 *
 * Props:
 *   src    — image source for the front card
 *   alt    — alt text
 *   className — optional wrapper classes (margin, etc.)
 */
export default function HeroImageStack({ src, alt = "Profile", className = "" }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[640px] aspect-[5/4] ${className}`}
    >
      {/* Back-left card — lavender */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-[#E8E4F3] shadow-[0_10px_30px_-12px_rgba(120,100,180,0.25)]"
        initial={{ x: -52, y: -38, rotate: -3 }}
        animate={{
          x: [-52, -64, -46, -52],
          y: [-38, -30, -48, -38],
          rotate: [-3, -4.5, -1.8, -3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Back-right card — pink */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-[#FBE7EC] shadow-[0_10px_30px_-12px_rgba(200,130,150,0.25)]"
        initial={{ x: 52, y: 38, rotate: 3 }}
        animate={{
          x: [52, 64, 46, 52],
          y: [38, 48, 30, 38],
          rotate: [3, 1.8, 4.5, 3],
        }}
        transition={{
          duration: 9.5, // offset from back-left for organic feel
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Front card — photo */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)]"
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [0, -10, 4, 0],
          rotate: [0, 0.4, -0.4, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
