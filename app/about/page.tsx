import Image from "next/image";
import ForestLayout from "../components/ForestLayout";

const interests = [
  "Ecology & Conservation",
  "Environmental Education",
  "Science Communication",
  "Sacred Groves",
  "Reflective Pedagogy",
  "Interconnected Systems",
];

export default function AboutPage() {
  return (
    <ForestLayout>
      <main
        className="
          relative
          z-10
          min-h-screen
          px-6
          md:px-10
          py-24
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-16
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Label */}
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D8C38F]
                text-xs
                mb-8
              "
            >
              About Me
            </p>

            {/* Heading */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                xl:text-7xl
                leading-[1.05]
                font-serif
                text-[#F5F1E8]
                mb-10
              "
            >
              Ecology,
              education,
              and reflective
              inquiry.
            </h1>

            {/* Main Reflection */}
            <div
              className="
                rounded-[2rem]
                border
                border-[#D8C38F]/15
                bg-[#102018]/35
                backdrop-blur-xl
                p-8
                md:p-10
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                mb-10
              "
            >
              <p
                className="
                  text-[#E2DDD2]
                  text-lg
                  leading-9
                "
              >
                My work explores the relationships between
                ecology, environmental education,
                communication, and reflective inquiry —
                examining how people understand and connect
                with living systems.
              </p>
            </div>

            {/* Secondary Reflection */}
            <p
              className="
                text-[#CFC7B7]
                text-lg
                leading-9
                max-w-2xl
              "
            >
              I am especially drawn to sacred groves,
              environmental memory, conservation,
              and the subtle relationship between
              landscape, culture, and learning.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex flex-col items-center lg:items-end">
            {/* Portrait */}
            <div
              className="
                relative
                w-full
                max-w-[420px]
                aspect-[4/5]
                overflow-hidden
                rounded-[2.5rem]
                border
                border-[#D8C38F]/15
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                mb-8
              "
            >
              <Image
                src="/images/sreevidya-profile.jpg"
                alt="Sreevidya"
                fill
                className="object-cover"
              />

              {/* Soft Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle,transparent_55%,rgba(216,195,143,0.12))]
                "
              />
            </div>

            {/* Interest Card */}
            <div
              className="
                w-full
                max-w-[420px]
                rounded-[2rem]
                border
                border-[#D8C38F]/15
                bg-[#102018]/30
                backdrop-blur-xl
                p-8
              "
            >
              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-[#D8C38F]
                  text-[10px]
                  mb-7
                "
              >
                Areas of Interest
              </p>

              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <div
                    key={item}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#D8C38F]/15
                      bg-[#0E1A14]/40
                      text-[#EAE4D8]
                      text-sm
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </ForestLayout>
  );
}