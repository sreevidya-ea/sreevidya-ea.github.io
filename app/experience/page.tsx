/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ForestLayout from "../components/ForestLayout";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

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
  const ref =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-1.2, 1.2]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotate,
      }}
      initial={{
        opacity: 0,
        scale: 0.96,
        x:
          index % 2 === 0
            ? -40
            : 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: index * 0.12,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        relative
        w-[42vw]
        min-w-[460px]
        max-w-[560px]
        h-[460px]
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
          w-[260px]
          h-[260px]
          rounded-full
          bg-[#D8C38F]/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-md">
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
    <ForestLayout>
      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#03100B]
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

        {/* TIMELINE */}
        <section
          className="
            relative
            z-10
            px-10
            pb-32
          "
        >
          {/* CENTER LINE */}
          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              -translate-x-1/2
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#D8C38F]/15
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              flex-col
            "
          >
            {experience.map((item, index) => (
              <div
                key={item.role}
                className={`
                  relative
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }
                  ${
                    index !== 0
                      ? "-mt-24"
                      : ""
                  }
                `}
              >
                {/* CONNECTOR */}
                <div
                  className={`
                    absolute
                    top-1/2
                    -translate-y-1/2
                    h-px
                    bg-[#D8C38F]/15
                    w-[90px]
                    ${
                      index % 2 === 0
                        ? "right-[calc(50%-45px)]"
                        : "left-[calc(50%-45px)]"
                    }
                  `}
                />

                {/* NODE */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-[#E7D9A8]
                    shadow-[0_0_25px_rgba(231,217,168,0.7)]
                    z-30
                  "
                />

                <ExperienceCard
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </ForestLayout>
  );
}