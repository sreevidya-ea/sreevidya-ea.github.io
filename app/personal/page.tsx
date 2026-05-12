"use client";

import ForestLayout from "../components/ForestLayout";

import { motion } from "framer-motion";

import {
  Feather,
  BookOpen,
  Sparkles,
  Flower2,
  PenLine,
  MoonStar,
  Music4,
  Coffee,
} from "lucide-react";

const sections = [
  {
    title: "Fragments & Thoughts",
    icon: <PenLine className="w-5 h-5" />,
    description:
      "Small essays, unfinished philosophies, emotional archaeology, and midnight reflections.",
    items: [
      "On leaving home and becoming multiple people at once",
      "Why sacred groves feel like memory",
      "A notebook of half-finished metaphors",
    ],
    image: "/images/personal-1.png",
  },

  {
    title: "Crochet & Handmade Things",
    icon: <Flower2 className="w-5 h-5" />,
    description:
      "Crochet flowers, handmade gifts, unfinished scarves, tactile comfort, and soft rituals of making.",
    items: [
      "Forest-toned crochet projects",
      "Pressed-flower bookmarks",
      "Patterns inspired by rain and leaves",
    ],
    image: "/images/personal-2.png",
  },

  {
    title: "Reading & Marginalia",
    icon: <BookOpen className="w-5 h-5" />,
    description:
      "Books annotated too heavily, folded corners, and sentences that stay longer than expected.",
    items: [
      "Magical realism & speculative fiction",
      "Poetry with weather in it",
      "Philosophy written like prayer",
    ],
    image: "/images/personal-3.png",
  },

  {
    title: "Music & Atmospheres",
    icon: <Music4 className="w-5 h-5" />,
    description:
      "Playlists for wandering, coding at 2AM, train rides, forests, rainstorms, and imagined worlds.",
    items: [
      "Ambient forest soundscapes",
      "Dream-pop & orchestral ambience",
      "Cinematic ASMR environments",
    ],
    image: "/images/personal-4.png",
  },
];

const floatingIcons = [
  Feather,
  MoonStar,
  Sparkles,
  Coffee,
];

function Chamber({
  section,
}: {
  section: (typeof sections)[0];
}) {
  return (
    <section
      className="
        relative
        h-screen
        snap-start
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${section.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Radial Vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#03100B_80%)]
        "
      />

      {/* Glow */}
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

      {/* Rings */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[520px]
          h-[520px]
          rounded-full
          border
          border-[#D8C38F]/10
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          border
          border-[#D8C38F]/10
        "
      />

      {/* Floating Fireflies */}
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top: `${20 + i * 14}%`,
            left: `${15 + i * 18}%`,
          }}
        >
          <Icon className="w-5 h-5 text-[#D8C38F]/70" />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
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
        }}
        viewport={{
          once: false,
          amount: 0.4,
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
            uppercase
            tracking-[0.45em]
            text-[#D8C38F]
            text-xs
            mb-8
          "
        >
          Personal
        </p>

        <div
          className="
            flex
            justify-center
            mb-8
            text-[#D8C38F]
          "
        >
          {section.icon}
        </div>

        <h2
          className="
            text-4xl
            md:text-7xl
            leading-[0.9]
            font-serif
            mb-10
          "
        >
          {section.title}
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

        <p
          className="
            text-[#C5CDC4]
            text-lg
            leading-9
            max-w-2xl
            mx-auto
            mb-12
          "
        >
          {section.description}
        </p>

        <div className="space-y-4 max-w-xl mx-auto">
          {section.items.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                justify-center
                gap-3
                text-[#EFE8D9]/85
              "
            >
              <span className="text-[#D8C38F]">
                ❁
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function PersonalPage() {
  return (
    <ForestLayout backgroundImage="/images/deep-woods-bg.png">
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
        {/* Global Background */}
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
              ✒ Personal
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
              Small worlds,
              softly kept.
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
              Fragments of thought, handmade things, annotated books,
              playlists for imagined journeys, and quieter textures
              existing alongside ambition and research.
            </p>
          </div>
        </section>

        {/* Chambers */}
        {sections.map((section) => (
          <Chamber
            key={section.title}
            section={section}
          />
        ))}
      </main>
    </ForestLayout>
  );
}