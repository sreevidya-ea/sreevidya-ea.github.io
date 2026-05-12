"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import Navbar from "./Navbar";

export default function ForestLayout({
  children,
}: {
  children: ReactNode;
}) {
  // deterministic rain particles
  const rain = useMemo(
    () =>
      Array.from({ length: 90 }).map((_, i) => ({
        id: i,
        x: (i * 37.7) % 2500,
        duration: 1.8 + ((i * 0.37) % 1.6),
        delay: (i * 0.23) % 4,
        opacity: 0.03 + ((i * 0.07) % 0.05),
      })),
    []
  );

  // deterministic fireflies
  const fireflies = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        top: (i * 17.3) % 100,
        left: (i * 23.7) % 100,
        size: 2 + ((i * 1.3) % 5),
        duration: 5 + ((i * 0.73) % 6),
        delay: (i * 0.61) % 5,
        driftX: 10 + ((i * 3) % 25),
        driftY: 12 + ((i * 2) % 30),
      })),
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08110D] text-[#F4F0E8]">
      {/* Forest Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/forest-bg.png')",
        }}
      />

      {/* Deep forest overlay */}
      <div className="absolute inset-0 bg-[#08110D]/70" />

      {/* Warm canopy glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(199,181,138,0.18),transparent_35%)]
        "
      />

      {/* Green atmospheric bloom */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(65,90,74,0.35),transparent_45%)]
        "
      />

      {/* Ambient mist layer */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          blur-3xl
          bg-gradient-to-r
          from-[#DCC9A3]/10
          via-transparent
          to-[#5D7A63]/10
        "
      />

      {/* Secondary mist */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          blur-[120px]
          bg-gradient-to-l
          from-[#AAB7A2]/10
          via-transparent
          to-[#C7B58A]/10
        "
      />

      {/* Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {rain.map((drop) => (
          <motion.div
            key={drop.id}
            initial={{
              y: -300,
              x: drop.x,
            }}
            animate={{
              y: 2400,
            }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              ease: "linear",
              delay: drop.delay,
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
            style={{
              opacity: drop.opacity,
            }}
          />
        ))}
      </div>

      {/* Fireflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fireflies.map((firefly) => (
          <motion.div
            key={firefly.id}
            animate={{
              y: [0, -firefly.driftY, 0],
              x: [0, firefly.driftX, 0],
              opacity: [0.15, 1, 0.15],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: firefly.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: firefly.delay,
            }}
            className="
              absolute
              rounded-full
              bg-[#D8C38F]
              blur-[1px]
              shadow-[0_0_18px_rgba(216,195,143,0.9)]
            "
            style={{
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              top: `${firefly.top}%`,
              left: `${firefly.left}%`,
            }}
          />
        ))}
      </div>

      {/* Soft floating pollen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {fireflies.slice(0, 18).map((pollen) => (
          <motion.div
            key={`pollen-${pollen.id}`}
            animate={{
              y: [0, -80],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 8 + pollen.id * 0.3,
              repeat: Infinity,
              ease: "easeOut",
              delay: pollen.delay,
            }}
            className="
              absolute
              rounded-full
              bg-[#F4E7B2]
              blur-sm
            "
            style={{
              width: "2px",
              height: "2px",
              left: `${pollen.left}%`,
              top: `${pollen.top + 10}%`,
            }}
          />
        ))}
      </div>

      {/* Bottom darkness */}
      <div
        className="
          absolute bottom-0 left-0
          w-full h-72
          opacity-50
          bg-gradient-to-t
          from-[#020403]
          to-transparent
        "
      />

      {/* Cinematic vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.78))]
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