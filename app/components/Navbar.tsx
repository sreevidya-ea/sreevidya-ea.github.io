"use client";

import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
    icon: "⌂",
  },
  {
    name: "About",
    href: "/about",
    icon: "✦",
  },
  {
    name: "Education",
    href: "/education",
    icon: "❈",
  },
  {
    name: "Experience",
    href: "/experience",
    icon: "❋",
  },
  {
    name: "Research",
    href: "/research",
    icon: "✺",
  },
  {
    name: "Milestones",
    href: "/milestones",
    icon: "❁",
  },
];

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-4
        sm:px-6
        py-5
      "
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            text-[#F5F1E8]
            font-serif
            text-xl
            sm:text-2xl
            tracking-wide
            hover:text-[#D8C38F]
            transition-colors
            duration-300
          "
        >
          Dr Sreevidya E.A.
        </Link>

        {/* Desktop Nav */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            px-4
            py-3
            rounded-full
            border
            border-[#D8C38F]/10
            bg-[#08110D]/25
            backdrop-blur-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                group
                relative
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                text-[#EAE4D8]
                hover:text-[#D8C38F]
                hover:bg-[#D8C38F]/10
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <span className="text-lg">
                {link.icon}
              </span>

              {/* Hover Label */}
              <div
                className="
                  absolute
                  top-[125%]
                  opacity-0
                  translate-y-1
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  pointer-events-none
                "
              >
                <div
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-[#D8C38F]/10
                    bg-[#08110D]/80
                    backdrop-blur-xl
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#EAE4D8]
                    whitespace-nowrap
                  "
                >
                  {link.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Indicator */}
        <div
          className="
            md:hidden
            px-4
            py-2
            rounded-full
            border
            border-[#D8C38F]/10
            bg-[#08110D]/25
            backdrop-blur-xl
            text-[#D8C38F]
            text-sm
          "
        >
          ✦
        </div>
      </div>
    </nav>
  );
}