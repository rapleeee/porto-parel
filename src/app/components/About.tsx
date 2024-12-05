import React, { useEffect } from "react";
import { VelocityScroll } from "./ui/scroll-velocity";
import farrel from "../assets/farrelTransparent.png";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypingAnimation } from "./ui/text-typing";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { FaGithub, FaInstagram, FaRegEnvelope, FaTiktok } from "react-icons/fa";

function About() {

  const medias = [
    {
      name: "Github",
      link: "https://github.com/FarrelAlvidi",
      icon: FaGithub,
    },
    {
      name: "Email",
      link: "mailto: botanica.j3@gmail.com",
      icon: FaRegEnvelope,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/alvidi.farrel/",
      icon: FaInstagram,
    },

    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@tosuue",
      icon: FaTiktok,
    },
  ];

  useEffect(() => {
    Aos.init();
  });

  const intro = `Hello I'm Muhammad Farrel Alvidi, a high school student majoring in Software Engineering in SMK Pesat ITXPRO with a strong passion for software development, especially in frontend development. 
  I enjoy creating visually appealing and functional user interfaces while continuously expanding my skills in backend development to become a more well-rounded developer.
  `;
  const intro2 = `I believe in the importance of learning and growing to deliver the best technological solutions.`;
  return (
    <div className="bg-black-100 " id="about">
      <VelocityScroll
        text="Alv's Portfolio"
        default_velocity={5}
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-black-200 bg-black-100 md:text-7xl md:leading-[5rem]"
      />
      <div className="max-w-screen-xl mx-auto p-12">
        <div className=" flex flex-col-reverse items-center text-center md:text-left md:justify-between mt-20 mb-16 md:mb-0 md:flex-row h-[80vh] lg:p-4">
          <div
            className="md:w-1/2 mt-16 md:mt-0"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* <WordFadeIn
            words="Muhammad Farrel Alvidi"
            delay={1.2}
            className="text-white text-3xl font-semibold mb-8"
          />
          <TypingAnimation
            duration={10}
            text={intro}
            className="text-white/80 md:text-lg tracking-wide text-justify" 
          />
          */}

            <AnimatedShinyText className="inline-flex items-center border border-white/10 rounded-full justify-center px-4 py-1 cursor-pointer text-neutral-500 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Vocational High School Student</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
            <TextGenerateEffect
              words={intro2}
              duration={0.3}
              className="text-4xl md:text-5xl font-bold
            "
            />
            <button className="mt-10 font-semibold hover:bg-black-100 hover:ring-black-200 hover:ring-2 hover:text-white/80 px-8 py-2 bg-white text-black-200 rounded-sm rounded-tr-lg rounded-bl-lg transition duration-200 ease-linear">
              <a href="#more">Show more</a>
            </button>
          </div>
          <div className="">
            <Image
              src={farrel}
              className="bg-gradient-to-t from-black-200 rounded-[3rem] w-[20rem] h-[20rem] lg:h-[28rem] lg:w-[28rem]"
              alt=""
              data-aos="zoom-in-up"
              data-aos-duration="1400"
            />
          </div>
        </div>

        <div className="w-full bg-black-200 p-8 rounded-xl" id="more" data-aos="fade-up" data-aos-duration="1400">
          <h3 className="font-semibold text-white text-xl mb-2">Welcome!</h3>
          <TypingAnimation
            text={intro}
            duration={5}
            className="text-lg text-white/90 md:w-3/4"
          />

          <div className="mt-12">
            <ul className="flex flex-row space-x-3">
              {medias.map((media) => (
                <li
                  key={media.name}
                  className="text-[1.6rem] text-white hover:-translate-y-2 hover:bg-black-100 rounded-full p-3 duration-300"
                >
                  <a href={media.link} target="_blank">
                    <media.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
