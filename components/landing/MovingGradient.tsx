"use client";

import { motion } from "framer-motion";

/**
 * Animated gradient background for the hero. Horizontal (left to right) sweep,
 * white and primary (#072446) rippling across the page.
 */
export function MovingGradient() {
  return (
    <motion.div
      className="absolute inset-0"
      aria-hidden
      style={{
        background:
          "linear-gradient(90deg, #ffffff 0%, #072446 18%, #ffffff 36%, #072446 54%, #ffffff 72%, #072446 90%, #ffffff 100%)",
        backgroundSize: "300% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
