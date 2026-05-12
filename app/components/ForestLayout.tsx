"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import Navbar from "./Navbar";

interface ForestLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  overlayOpacity?: string;
}

export default function ForestLayout({
  children,
  backgroundImage = "/images/forest-bg.png",
  overlayOpacity = "opacity-90",
}: ForestLayoutProps) {
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
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${overlayOpacity}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Deep overlay */}
      <div className="absolute inset-0 bg-[#08110D]/70" />

      {/* Golden glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(199,181,138,0.18),transparent_35%)]
        "
      />

      {/* Forest bloom */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(65,90,74,0.35),transparent_45%)]
        "
      />

      {/* Mist */}
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

      {/* Vignette */}
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