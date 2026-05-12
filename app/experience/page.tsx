"use client";

import ForestLayout from "../components/ForestLayout";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2019 — Present",
    role: "Research Consultant",
    company: "Independent Ecological Practice",
    description:
      "Blending ecology, storytelling, and environmental philosophy into long-form research and reflective educational work.",
    image: "/images/exp-1.png",
  },

  {
    year: "2012 — 2018",
    role: "Senior Lecturer",
    company: "Tamil Nadu Agricultural University",
    description:
      "Focused on environmental communication, interdisciplinary ecological systems, and reflective inquiry.",
    image: "/images/exp-2.png",
  },

  {
    year: "1998 — 2004",
    role: "Environmental Research Associate",
    company: "Western Ghats Initiative",
    description:
      "Sacred grove mapping, biodiversity documentation, and ecological preservation across the Western Ghats.",
    image: "/images/exp-3.png",
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      className={`
        relative
        min-w-[420px]
        max-w-[420px]
        h-[500px]
        rounded-[2.8rem]
        overflow-hidden
        border
        border-[#D8C38F]/10
        bg-[#08110D]/55
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        flex
        items-end
        p-10
        snap-start
        ${
          index % 2 === 0
            ? "rotate-[-1deg]"
            : "rotate-[1deg]"
        }
      `}
    >
      {/* BG IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#D8C38F18,transparent_70%)]
        "
      />

      {/* AMBIENT ORB */}
      <div
        className="
          absolute
          -top-20
          right-0
          w-[240px]
          h-[240px]
          rounded-full
          bg-[#D8C38F]/10
          blur-3xl
        "
      />

      {/* WATERMARK */}
      <div
        className="
          absolute
          top-8
          right-8
          text-6xl
          font-serif
          text-[#D8C38F]/[0.05]
          pointer-events-none
        "
      >
        {item.year.slice(0, 4)}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-sm">
        <p
          className="
            text-[#D8C38F]
            text-xs
            tracking-[0.25em]
            mb-5
          "
        >
          {item.year}
        </p>

        <h2
          className="
            text-[#F5F1E8]
            text-4xl
            leading-[1.05]
            font-serif
            mb-5
          "
        >
          {item.role}
        </h2>

        <p
          className="
            text-[#EAE4D8]
            text-lg
            mb-5
          "
        >
          {item.company}
        </p>

        <p
          className="
            text-[#C5CDC4]
            text-sm
            leading-8
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <ForestLayout backgroundImage="/images/farm-bg.png">
      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-transparent
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
              w-[600px]
              h-[600px]
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
            pb-16
            px-10
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D8C38F]
                text-xs
                mb-7
              "
            >
              Experience
            </p>

            <h1
              className="
                text-5xl
                xl:text-6xl
                leading-[0.98]
                font-serif
                text-[#F5F1E8]
                mb-8
              "
            >
              Ecology,
              research,
              and reflective
              inquiry.
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
                max-w-xl
              "
            >
              A wandering archive of forests,
              ecological systems, teaching,
              and reflective environmental
              practice.
            </p>
          </div>
        </section>

        {/* CAROUSEL */}
        <section
          className="
            relative
            z-10
            overflow-hidden
            pl-10
            pb-28
          "
        >
          {/* Ambient */}
          <div
            className="
              absolute
              inset-0
              pointer-events-none
            "
          >
            <div
              className="
                absolute
                top-10
                left-20
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#6D8A52]/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-0
                right-20
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#395A63]/10
                blur-3xl
              "
            />
          </div>

          {/* Scroll Row */}
          <div
            className="
              relative
              z-10
              flex
              gap-10
              overflow-x-auto
              pb-8
              pr-20
              snap-x
              snap-mandatory
              scrollbar-none
            "
          >
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.role}
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
    </ForestLayout>
  );
}