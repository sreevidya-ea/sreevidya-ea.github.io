 
"use client";

import ForestLayout from "../components/ForestLayout";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const research = [
  {
    title:
      "Sacred Grove Ecologies",
    subtitle:
      "Field Documentation · Biodiversity · Ecological Memory",
    description:
      "Long-form ecological observation and sacred grove documentation across fragmented forest systems, focusing on biodiversity preservation and environmental memory.",
    image: "/images/research-1.png",
    note:
      "Intersections of memory, landscape, ritual, and ecology.",
  },

  {
    title:
      "Reflective Environmental Inquiry",
    subtitle:
      "Environmental Philosophy · Systems Thinking",
    description:
      "Exploring reflective ecological practice through interdisciplinary systems thinking, environmental communication, and embodied field observation.",
    image: "/images/research-2.png",
    note:
      "Observation as both scientific and reflective practice.",
  },

  {
    title:
      "Narratives of Landscape",
    subtitle:
      "Storytelling · Ecological Communication",
    description:
      "Researching how ecological narratives shape memory, environmental consciousness, and relationships between people and landscape.",
    image: "/images/research-3.png",
    note:
      "Stories as ecological preservation.",
  },
];

function ResearchFragment({
  item,
  index,
}: {
  item: (typeof research)[0];
  index: number;
}) {
  const ref =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [60, -60]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-2, 2]
  );

  return (
    <motion.section
      ref={ref}
      style={{
        y,
        rotate,
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className={`
        relative
        w-[92vw]
        max-w-[860px]
        rounded-[3rem]
        overflow-hidden
        border
        border-[#D8C38F]/10
        bg-[#08110D]/50
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        p-8
        md:p-10
        ${
          index % 2 === 0
            ? "ml-auto"
            : "mr-auto"
        }
      `}
    >
      {/* Paper Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[url('/images/paper-texture.png')]
          bg-cover
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#D8C38F14,transparent_70%)]
        "
      />

      {/* Layout */}
      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-[1.1fr_0.9fr]
          gap-8
          items-start
        "
      >
        {/* LEFT */}
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-3
              mb-6
            "
          >
            <div
              className="
                w-10
                h-px
                bg-[#D8C38F]/40
              "
            />

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[#D8C38F]
                text-[10px]
              "
            >
              Research Fragment
            </p>
          </div>

          <h2
            className="
              text-3xl
              md:text-5xl
              leading-[1]
              font-serif
              text-[#F5F1E8]
              mb-6
            "
          >
            {item.title}
          </h2>

          <p
            className="
              text-[#D8C38F]
              text-sm
              tracking-[0.08em]
              mb-7
            "
          >
            {item.subtitle}
          </p>

          <p
            className="
              text-[#C5CDC4]
              text-sm
              md:text-base
              leading-8
              max-w-xl
            "
          >
            {item.description}
          </p>

          {/* Floating Note */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-10
              max-w-[280px]
              rounded-[1.5rem]
              border
              border-[#D8C38F]/10
              bg-[#0A1510]/70
              px-5
              py-5
              backdrop-blur-xl
            "
          >
            <p
              className="
                text-[#EAE4D8]
                text-sm
                italic
                leading-7
              "
            >
              “{item.note}”
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Main Image */}
          <div
            className="
              relative
              rounded-[2rem]
              overflow-hidden
              border
              border-[#D8C38F]/10
              aspect-[0.78]
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

            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Botanical Overlay */}
          <div
            className="
              absolute
              -bottom-6
              -left-6
              w-[120px]
              h-[150px]
              rounded-[1.5rem]
              overflow-hidden
              border
              border-[#D8C38F]/10
              bg-[#0B1611]/80
              backdrop-blur-xl
              rotate-[-6deg]
              hidden
              md:block
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-[url('/images/herbarium.png')]
                bg-cover
                opacity-70
              "
            />
          </div>

          {/* Ambient Glow */}
          <div
            className="
              absolute
              inset-0
              scale-125
              rounded-full
              bg-[#D8C38F]/10
              blur-3xl
              -z-10
            "
          />
        </div>
      </div>
    </motion.section>
  );
}

export default function ResearchPage() {
  return (
    <ForestLayout backgroundImage="/images/sacred-grove-bg.png">
      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-transparent
          text-[#F5F1E8]
        "
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glow */}
          <div
            className="
              absolute
              top-[-10%]
              left-[-10%]
              w-[700px]
              h-[700px]
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
              w-[700px]
              h-[700px]
              rounded-full
              bg-[#395A63]/10
              blur-3xl
            "
          />

          {/* Noise */}
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

        {/* HERO */}
        <section
          className="
            relative
            z-10
            pt-28
            pb-24
            px-8
          "
        >
          <div className="max-w-4xl">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D8C38F]
                text-xs
                mb-7
              "
            >
              Research
            </p>

            <h1
              className="
                text-5xl
                xl:text-7xl
                leading-[0.96]
                font-serif
                mb-8
              "
            >
              Botanical archives,
              ecological memory,
              and reflective inquiry.
            </h1>

            <div
              className="
                w-24
                h-px
                bg-[#D8C38F]/40
                mb-8
              "
            />

            <p
              className="
                text-[#C5CDC4]
                text-lg
                leading-9
                max-w-2xl
              "
            >
              A collection of ecological observations,
              interdisciplinary systems, environmental
              storytelling, and field-based reflective
              research practices.
            </p>
          </div>
        </section>

        {/* FRAGMENTS */}
        <section
          className="
            relative
            z-10
            px-6
            md:px-10
            pb-32
            space-y-16
          "
        >
          {research.map((item, index) => (
            <ResearchFragment
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </section>
      </main>
    </ForestLayout>
  );
}
