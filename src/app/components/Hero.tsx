import { cn } from "@/lib/utils";
import React from "react";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className=" bg-black-100" id="hero">
      <div className="container relative flex min-h-screen w-full items-center  justify-center overflow-hidden p-20">
        <TextGenerateEffect
          words="Farrel Alvidi"
          className="font-bold text-[3.2rem] lg:text-[5rem] z-40 text-white text-center"
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
};

export default Hero;
