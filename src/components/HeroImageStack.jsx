// src/components/HeroImageStack.jsx
import { motion } from "framer-motion";

export default function HeroImageStack({ src, alt = "Profile" }) {
  return (
    <div className="hero-stack">
      {/* Back-left card — purple glow */}
      <motion.div
        aria-hidden="true"
        className="hero-glow-card hero-card-purple"
        initial={{ x: -52, y: -38, rotate: 0 }}
       /*  animate={{
          x: [-52, -64, -46, -52],
          y: [-38, -30, -48, -38],
          rotate: [-3, -4.5, -1.8, -3],
        }} */
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Back-right card — pink glow */}
      <motion.div
        aria-hidden="true"
        className="hero-glow-card hero-card-pink"
        initial={{ x: 52, y: 38, rotate: 0 }}
        /* animate={{
          x: [52, 64, 46, 52],
          y: [38, 48, 30, 38],
          rotate: [3, 1.8, 4.5, 3],
        }} */
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Front card — photo */}
      <motion.div
        className="hero-photo-card"
        initial={{ y: 0, rotate: 0 }}
        /* animate={{
          y: [0, -10, 4, 0],
          rotate: [0, 0.4, -0.4, 0],
        }} */
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={src} alt={alt} draggable="false" />
      </motion.div>

      <motion.div
        className="hero-bloom-purple"
        initial={{ scale: 1, opacity: 0.36 }}
        /*   animate={{
          scale: [1, 1.06, 0.97, 1],
          opacity: [0.36, 0.28, 0.4, 0.36],
        }} */
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft pink background bloom */}
      <motion.div
        className="hero-bloom"
        initial={{ scale: 1, opacity: 0.36 }}
        /*   animate={{
          scale: [1, 1.06, 0.97, 1],
          opacity: [0.36, 0.28, 0.4, 0.36],
        }} */
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
}
