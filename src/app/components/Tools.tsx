
import React from "react";
import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";

const tools = [
  {
    name: "HTML",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
    competency: "Advanced",   
  },
  {
    name: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    competency: "Advanced",
  },
  {
    name: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    competency: "Intermediate",
  },
  {
    name: "Tailwind Css",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    competency: "Advanced",
  },
  {
    name: "PHP",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    competency: "Low Intermediate",
  },
  {
    name: "Laravel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    competency: "Intermediate",
  },
];
const firstRow = tools.slice(0, tools.length / 2);
const secondRow = tools.slice(tools.length / 2);
const ReviewCard = ({
  name,
  icon,
  competency,
}: {
  name: string;
  icon: string;
  competency: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="" width="32" height="32" alt="Logo" src={icon} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{competency}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};
const Tools = () => {
  return (
    <div className="bg-black-100 py-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-white font-semibold text-3xl mb-5 px-12 lg:px-0 ">Tools that i <br /> used  and Developed</h1>

        <div className="relative flex h-[200px]  flex-col bg-transparent items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black-100/80"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black-100/80"></div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
