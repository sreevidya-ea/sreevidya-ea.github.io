import Link from "next/link";
import Image from "next/image";
import ForestLayout from "./components/ForestLayout";

const leftNodes = [
  {
    title: "About Me",
    href: "/about",
    icon: "✦",
  },
  {
    title: "Education",
    href: "/education",
    icon: "❈",
  },
  {
    title: "Experience",
    href: "/experience",
    icon: "❋",
  },
];

const rightNodes = [
  {
    title: "Research",
    href: "/research",
    icon: "✺",
  },
  {
    title: "Milestones",
    href: "/milestones",
    icon: "❁",
  },
  {
    title: "Personal",
    href: "/personal",
    icon: "✾",
  },
];

const allNodes = [...leftNodes, ...rightNodes];

function Node({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        w-32
        h-32
        sm:w-36
        sm:h-36
        xl:w-44
        xl:h-44
        rounded-full
        border
        border-[#D8C38F]/25
        bg-[#102018]/30
        backdrop-blur-md
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-700
        hover:scale-105
        hover:border-[#D8C38F]
        hover:shadow-[0_0_40px_rgba(216,195,143,0.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-[radial-gradient(circle,rgba(216,195,143,0.12),transparent_70%)]
        "
      />

      <span className="relative z-10 text-2xl text-[#D8C38F] mb-3">
        {icon}
      </span>

      <span
        className="
          relative
          z-10
          text-center
          uppercase
          tracking-[0.22em]
          text-[10px]
          sm:text-xs
          text-[#F4F0E8]
          px-2
        "
      >
        {title}
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <ForestLayout>
      <div
        className="
          relative
          z-10
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-4
          sm:px-6
          xl:px-12
          pt-28
          pb-10
        "
      >
        {/* DESKTOP LAYOUT */}
        <div
          className="
            hidden
            xl:grid
            grid-cols-[220px_minmax(400px,700px)_220px]
            items-center
            gap-14
            w-full
            max-w-[1400px]
          "
        >
          {/* LEFT */}
          <div className="flex flex-col gap-8 items-center">
            {leftNodes.map((node) => (
              <Node key={node.title} {...node} />
            ))}
          </div>

          {/* CENTER */}
          <div className="text-center">
            {/* Portrait */}
            <div
              className="
                relative
                mx-auto
                w-72
                h-72
                rounded-full
                overflow-hidden
                border
                border-[#D8C38F]/40
                shadow-[0_0_80px_rgba(0,0,0,0.65)]
                mb-10
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  pointer-events-none
                  bg-[radial-gradient(circle,transparent_58%,rgba(216,195,143,0.22))]
                "
              />

              <Image
                src="/images/sreevidya-profile.jpg"
                alt="Dr Sreevidya E.A."
                fill
                priority
                className="object-cover scale-105"
              />
            </div>

            {/* Name */}
            <h1
              className="
                text-7xl
                2xl:text-8xl
                font-serif
                tracking-wide
                text-[#F5F1E8]
                mb-5
              "
            >
              Dr Sreevidya E.A.
            </h1>

            {/* Subtitle */}
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-[#D8C38F]
                mb-8
              "
            >
              Researcher • Educator • Science Communicator
            </p>

            {/* Description */}
            <p
              className="
                text-lg
                leading-9
                text-[#E2DDD2]
                max-w-2xl
                mx-auto
              "
            >
              Exploring ecology, education, interconnected systems,
              and reflective inquiry through research,
              teaching, and environmental storytelling.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 items-center">
            {rightNodes.map((node) => (
              <Node key={node.title} {...node} />
            ))}
          </div>
        </div>

        {/* MOBILE/TABLET LAYOUT */}
        <div
          className="
            xl:hidden
            w-full
            max-w-3xl
            flex
            flex-col
            items-center
          "
        >
          {/* Portrait */}
          <div
            className="
              relative
              w-52
              h-52
              sm:w-64
              sm:h-64
              rounded-full
              overflow-hidden
              border
              border-[#D8C38F]/40
              shadow-[0_0_80px_rgba(0,0,0,0.65)]
              mb-8
            "
          >
            <div
              className="
                absolute
                inset-0
                z-10
                pointer-events-none
                bg-[radial-gradient(circle,transparent_58%,rgba(216,195,143,0.22))]
              "
            />

            <Image
              src="/images/sreevidya-profile.jpg"
              alt="Dr Sreevidya E.A."
              fill
              priority
              className="object-cover scale-105"
            />
          </div>

          {/* Name */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              font-serif
              text-center
              tracking-wide
              text-[#F5F1E8]
              mb-4
            "
          >
            Dr Sreevidya E.A.
          </h1>

          {/* Subtitle */}
          <p
            className="
              uppercase
              tracking-[0.28em]
              text-[11px]
              sm:text-xs
              text-[#D8C38F]
              text-center
              mb-6
            "
          >
            Researcher • Educator • Science Communicator
          </p>

          {/* Description */}
          <p
            className="
              text-base
              sm:text-lg
              leading-8
              text-[#E2DDD2]
              text-center
              mb-10
              max-w-xl
            "
          >
            Exploring ecology, education, interconnected systems,
            and reflective inquiry through research,
            teaching, and environmental storytelling.
          </p>

          {/* Nodes Grid */}
          <div
            className="
              grid
              grid-cols-2
              gap-6
              w-full
              place-items-center
            "
          >
            {allNodes.map((node) => (
              <Node key={node.title} {...node} />
            ))}
          </div>
        </div>
      </div>
    </ForestLayout>
  );
}