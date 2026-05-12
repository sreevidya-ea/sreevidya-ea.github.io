/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ForestLayout from "../components/ForestLayout";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

const education = [
  {
    year: "2012 — 2018",
    university: "Bharathiar University",
    degree: "Doctor of Philosophy (PhD)",
    description:
      "Advanced research in environmental science, reflective inquiry, and ecological communication.",

    bg:
      "bg-[radial-gradient(circle_at_top,#6A5A46,transparent_65%)]",
    img:
      "/images/bharathiar-bg.png"
  },

  {
    year: "2008 — 2010",
    university: "Tamil Nadu Agricultural University",
    degree: "Master of Science",
    description:
      "Focused on environmental studies and interdisciplinary systems thinking.",

    bg:
      "bg-[radial-gradient(circle_at_top,#3F5E68,transparent_65%)]",
    img:
      "/images/tau-bg.png"
  },

  {
    year: "1992 — 1997",
    university: "Kerala Agricultural University",
    degree: "BSc Agriculture",
    description:
      "Foundations in agriculture, ecology, and environmental understanding.",

    bg:
      "bg-[radial-gradient(circle_at_top,#526445,transparent_65%)]",
    img:
      "/images/kau-bg.png"
  },
];

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        x: 120,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className={`
        relative
        w-[48vw]
        min-w-[620px]
        max-w-[700px]
        h-[68vh]
        rounded-[3rem]
        border
        border-[#D8C38F]/15
        overflow-hidden
        bg-[#08110D]/60
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        flex
        items-end
        p-14
        ${
          index % 2 === 0
            ? "rotate-[-1deg]"
            : "rotate-[1deg]"
        }
      `}
    >
    
    {/* Background Image */}
    <div
    className="absolute inset-0"
    style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/45" />

      {/* Unique Glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-70
          ${item.bg}
        `}
      />

      {/* Ambient Blur */}
      <div
        className="
          absolute
          -top-20
          right-0
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#D8C38F]/10
          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <p
          className="
            text-[#D8C38F]
            text-base
            tracking-[0.22em]
            mb-7
          "
        >
          {item.year}
        </p>

        <h2
          className="
            text-[#F5F1E8]
            text-5xl
            leading-[1.05]
            font-serif
            mb-7
          "
        >
          {item.university}
        </h2>

        <p
          className="
            text-[#EAE4D8]
            text-2xl
            mb-7
          "
        >
          {item.degree}
        </p>

        <p
          className="
            text-[#C5CDC4]
            text-lg
            leading-9
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EducationPage() {
  const x = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 45,
    damping: 18,
  });

  useEffect(() => {
    const maxScroll = -1850;
    const minScroll = 0;

    let timeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();

        const current = x.get();

        let next = current - e.deltaY * 1.15;

        // softer resistance near edges
        if (next > minScroll) {
        const excess = next - minScroll;
        next = minScroll + excess * 0.28;
        }

        if (next < maxScroll) {
        const excess = maxScroll - next;
        next = maxScroll - excess * 0.28;
        }

        if (next > minScroll) {
          next = minScroll + (next - minScroll) * 0.18;
        }

        if (next < maxScroll) {
          next = maxScroll + (next - maxScroll) * 0.18;
        }
        x.set(next);

        // spring back after scroll stops
        clearTimeout(timeout);

        timeout = setTimeout(() => {
        const latest = x.get();

        if (latest > minScroll) {
            x.set(minScroll);
        }

        if (latest < maxScroll) {
            x.set(maxScroll);
        }
        }, 80);
    };

    window.addEventListener("wheel", handleWheel, {
        passive: false,
    });

    return () => {
        clearTimeout(timeout);

        window.removeEventListener(
        "wheel",
        handleWheel
        );
    };
    }, [x]);

  return (
    <ForestLayout backgroundImage="/images/uni-bg.png">
      <main
        className="
          relative
          h-screen
          overflow-hidden
          bg-transparent
        "
      >
        {/* LEFT PANEL */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-0
            top-0
            w-[38vw]
            h-full
            items-center
            px-16
            z-30
          "
        >
          <motion.div
            style={{
              x: useTransform(
                smoothX,
                [0, -1850],
                [0, 50]
              ),
            }}
            className="max-w-md"
          >
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D8C38F]
                text-xs
                mb-8
              "
            >
              Education
            </p>

            <h1
              className="
                text-6xl
                xl:text-7xl
                leading-[0.98]
                font-serif
                text-[#F5F1E8]
                mb-10
              "
            >
              A journey
              of learning
              and growth.
            </h1>

            <div
              className="
                w-24
                h-px
                bg-[#D8C38F]/40
                mb-10
              "
            />

            <p
              className="
                text-[#C5CDC4]
                text-lg
                leading-9
              "
            >
              Scroll horizontally through moments
              of academic exploration, ecology,
              environmental inquiry, and growth.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-[38vw]
            right-0
            top-0
            h-full
            items-center
            overflow-hidden
          "
        >
          {/* Background Parallax */}
          <motion.div
            style={{
              x: useTransform(
                smoothX,
                [0, -1850],
                [0, 220]
              ),
            }}
            className="
              absolute
              inset-0
              opacity-25
            "
          >
            <div
              className="
                absolute
                top-20
                left-20
                w-[420px]
                h-[420px]
                rounded-full
                bg-[#6D8A52]/20
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-20
                right-20
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#395A63]/20
                blur-3xl
              "
            />
          </motion.div>

          {/* Horizontal Track */}
          <motion.div
            style={{ x: smoothX }}
            className="
              relative
              z-10
              flex
              items-center
              gap-20
              pl-8
              pr-[28vw]
            "
          >
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                style={{
                  y: useTransform(
                    smoothX,
                    [0, -1850],
                    [
                      index * -8,
                      index * 14,
                    ]
                  ),
                }}
              >
                <EducationCard
                  item={item}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE */}
        <div
          className="
            lg:hidden
            w-full
            overflow-y-auto
            pt-32
            px-6
            pb-20
            h-screen
          "
        >
          <div className="mb-14">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D8C38F]
                text-xs
                mb-6
              "
            >
              Education
            </p>

            <h1
              className="
                text-5xl
                leading-tight
                font-serif
                text-[#F5F1E8]
              "
            >
              A journey of learning and growth.
            </h1>
          </div>

          <div className="space-y-10">
            {education.map((item) => (
              <div
                key={item.degree}
                className="
                  rounded-[2rem]
                  border
                  border-[#D8C38F]/15
                  bg-[#08110D]/55
                  backdrop-blur-xl
                  p-8
                "
              >
                <p className="text-[#D8C38F] mb-4">
                  {item.year}
                </p>

                <h2
                  className="
                    text-[#F5F1E8]
                    text-4xl
                    leading-tight
                    font-serif
                    mb-5
                  "
                >
                  {item.university}
                </h2>

                <p
                  className="
                    text-[#EAE4D8]
                    text-xl
                    mb-5
                  "
                >
                  {item.degree}
                </p>

                <p
                  className="
                    text-[#C5CDC4]
                    leading-8
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </ForestLayout>
  );
}