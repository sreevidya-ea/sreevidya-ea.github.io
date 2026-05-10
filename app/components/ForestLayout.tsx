/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function ForestLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08110D] text-[#F4F0E8]">
      {/* Forest Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          opacity-30
        "
        style={{
          backgroundImage: "url('/images/forest-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08110D]/70" />

      {/* Golden Atmospheric Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(199,181,138,0.18),transparent_35%)]
        "
      />

      {/* Forest Green Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(65,90,74,0.35),transparent_45%)]
        "
      />

      {/* Mist Layer 1 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          blur-3xl
          bg-gradient-to-r
          from-[#DCC9A3]/10
          via-transparent
          to-[#5D7A63]/10
        "
      />

      {/* Mist Layer 2 */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          blur-[120px]
          bg-gradient-to-l
          from-[#AAB7A2]/10
          via-transparent
          to-[#C7B58A]/10
        "
      />

      {/* Rain */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -300,
              x: Math.random() * 2500,
            }}
            animate={{
              y: 2500,
            }}
            transition={{
              duration: 1.4 + Math.random() * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
            className="
              absolute
              w-px
              h-32
              bg-gradient-to-b
              from-transparent
              via-[#EAE4D8]
              to-transparent
            "
          />
        ))}
      </div>

      {/* Golden Fireflies */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            className="
              absolute
              rounded-full
              bg-[#D8C38F]
              blur-sm
              shadow-[0_0_18px_rgba(216,195,143,0.9)]
            "
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Bottom Forest Silhouette */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-72
          opacity-40
          bg-gradient-to-t
          from-[#020403]
          to-transparent
        "
      />

      {/* Cinematic Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.75))]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </main>
  );
}