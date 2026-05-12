"use client";

import ForestLayout from "../components/ForestLayout";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const milestones = [
  {
    year: "1998",
    title: "The First Threshold",
    subtitle:
      "Entering ecological observation and field research.",
    image: "/images/milestone-1.png",
  },

  {
    year: "2012",
    title: "Research Awakening",
    subtitle:
      "Interdisciplinary environmental inquiry and reflective systems thinking.",
    image: "/images/milestone-2.png",
  },

  {
    year: "2018",
    title: "Doctoral Passage",
    subtitle:
      "Completion of doctoral research in environmental science.",
    image: "/images/milestone-3.png",
  },

  {
    year: "2025",
    title: "Ecological Reflection",
    subtitle:
      "Blending philosophy, storytelling, and ecology into reflective practice.",
    image: "/images/milestone-4.png",
  },
];

function Milestone({
  item,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [-80, 80]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        h-screen
        overflow-hidden
        snap-start
        flex
        items-center
        justify-center
      "
    >
      {/* Background Image */}
      <motion.div
        style={{
          y: bgY,
        }}
        className="
          absolute
          inset-0
          scale-110
        "
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,#03100B_80%)]
          "
        />
      </motion.div>

      {/* Fog Glow */}
      <div
        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#D8C38F]/10
          blur-3xl
        "
      />

      {/* Monument Circle */}
      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="
          absolute
          w-[540px]
          h-[540px]
          rounded-full
          border
          border-[#D8C38F]/10
        "
      />

      <motion.div
        style={{
          y: useTransform(
            scrollYProgress,
            [0, 1],
            [40, -40]
          ),
          opacity,
        }}
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-[#D8C38F]/10
        "
      />

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[20%]
          right-[20%]
          w-2
          h-2
          rounded-full
          bg-[#E7D9A8]
          shadow-[0_0_20px_rgba(231,217,168,0.8)]
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[25%]
          left-[18%]
          w-1.5
          h-1.5
          rounded-full
          bg-[#88A96E]
          shadow-[0_0_18px_rgba(136,169,110,0.7)]
        "
      />

      {/* Content */}
      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="
          relative
          z-10
          text-center
          px-6
          max-w-4xl
        "
      >
        <p
          className="
            text-[#D8C38F]
            tracking-[0.45em]
            uppercase
            text-xs
            mb-8
          "
        >
          Milestone
        </p>

        <h2
          className="
            text-[5rem]
            md:text-[8rem]
            leading-[0.9]
            font-serif
            text-[#F5F1E8]
            mb-10
          "
        >
          {item.year}
        </h2>

        <div
          className="
            w-24
            h-px
            bg-[#D8C38F]/30
            mx-auto
            mb-10
          "
        />

        <h3
          className="
            text-3xl
            md:text-5xl
            font-serif
            leading-[1]
            mb-8
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-[#C5CDC4]
            text-lg
            leading-9
            max-w-2xl
            mx-auto
          "
        >
          {item.subtitle}
        </p>
      </motion.div>
    </section>
  );
}

export default function MilestonesPage() {
  return (
    <ForestLayout backgroundImage="/images/conference-bg.png">
      <main
        className="
          relative
          h-screen
          overflow-y-scroll
          snap-y
          snap-mandatory
          bg-transparent
          text-[#F5F1E8]
        "
      >
        {/* GLOBAL BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              top-[-10%]
              left-[-10%]
              w-[800px]
              h-[800px]
              rounded-full
              bg-[#6D8A52]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-[-10%]
              right-[-10%]
              w-[800px]
              h-[800px]
              rounded-full
              bg-[#395A63]/10
              blur-3xl
            "
          />

          {/* Grain */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              bg-[url('/images/noise.png')]
              bg-repeat
            "
          />
        </div>

        {/* Intro */}
        <section
          className="
            relative
            h-screen
            snap-start
            flex
            items-center
            justify-center
            text-center
            px-6
          "
        >
          <div className="relative z-10 max-w-5xl">
            <p
              className="
                uppercase
                tracking-[0.4em]
                text-[#D8C38F]
                text-xs
                mb-8
              "
            >
              Milestones
            </p>

            <h1
              className="
                text-5xl
                md:text-8xl
                leading-[0.9]
                font-serif
                mb-10
              "
            >
              Chambers
              of memory
              and passage.
            </h1>

            <div
              className="
                w-24
                h-px
                bg-[#D8C38F]/30
                mx-auto
                mb-10
              "
            />

            <p
              className="
                text-[#C5CDC4]
                text-lg
                leading-9
                max-w-2xl
                mx-auto
              "
            >
              Wandering through ceremonial
              moments, ecological reflection,
              and transformative passages.
            </p>
          </div>
        </section>

        {/* Milestones */}
        {milestones.map((item, index) => (
          <Milestone
            key={item.year}
            item={item}
            index={index}
          />
        ))}
      </main>
    </ForestLayout>
  );
}