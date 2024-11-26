"use client";

import React from "react";
import travelWeb from "../assets/travelWeb.png";
import foodieWeb from "../assets/foodieWeb.png";
import financeWeb from "../assets/financeWeb.png";
import netflixWeb from "../assets/netflixWeb.png";
import laporinAja from "../assets/laporinAja.png";
import html from "../assets/html-logo.webp";
import js from "../assets/javascript-logo.webp";
import tailwind from "../assets/tailwindcss-logo.png";
import css from "../assets/css-logo.svg";
import bootstrap from "../assets/bootstrap-logo.png";
import Image from "next/image";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Alv Journey",
      image: travelWeb,
      desc: "Ini adalah hasil website buatan saya yang bertema Website Travel. Saya membuat website ini menggunakan framework Bootstrap dan Swiper.Js.",
      icon: [html, css, bootstrap],
      link: "https://farrelalvidi.github.io/Travel-Website/",
    },
    {
      title: "Foodie Website",
      image: foodieWeb,
      desc: "Ini adalah hasil website foodie yang saya buat untuk kegiatan Sertikom. Saya membuat website ini menggunakan HTML dan CSS.",
      icon: [html, css],
      link: "https://farrelalvidi.github.io/Sertikom-2023-Restoran/",
    },
    {
      title: "Finance Website",
      image: financeWeb,
      desc: "Dalam pembelajaran saya di HTML dan juga CSS di pertengahan semester, saya membuat Projek website pertama yang bernama Finance Web",
      icon: [html, css],
      link: "https://farrelalvidi.github.io/Finance-Web/",
    },
    {
      title: "Netflix Remake",
      image: netflixWeb,
      desc: "Ini adalah hasil website foodie yang saya buat untuk kegiatan Sertikom. Saya membuat website ini menggunakan HTML dan CSS.",
      icon: [html, tailwind],
      link: "https://nadinegallery.netlify.app/",
    },
    {
      title: "LaporinAja",
      image: laporinAja,
      desc: "Ini adalah hasil website foodie yang saya buat untuk kegiatan Sertikom. Saya membuat website ini menggunakan HTML dan CSS.",
      icon: [html, css , js, tailwind],
      link: "https://farrelalvidi.github.io/LaporinAja/",
    },
  ];

  return (
    <div className="bg-black-300" id="projects">
      <div className="p-14 md:p-8 max-w-screen-xl mx-auto py-16">
        <h1 className="text-white font-semibold text-3xl lg:px-0 mb-12">
          Projects that i've been working
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full bg-black-200 rounded-lg flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                {/* Title and Description */}
                <h1 className="text-white font-bold text-xl">
                  {project.title}
                </h1>
                <p className="text-neutral-400 mt-3">{project.desc}</p>

                {/* Render Icons */}
                <div className="mt-4 flex items-center space-x-2">
                  {project?.icon?.map((icon, index) => (
                    <Image
                      key={index} // Use index as a key since it's a small, fixed array
                      src={icon}
                      alt={`${project.title} icon ${index + 1}`}
                      width={40}
                      height={40}
                      className="p-2 rounded aspect-square bg-black-100"
                    />
                  ))}
                </div>
                <button className="bg-white text-black-200 p-2 rounded font-semibold px-4 mt-16 hover:bg-black-200 duration-300 transition-all hover:ring-neutral-500 hover:ring-2 hover:text-white">
                  <a href={project.link} target="_blank">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-white p-2 px-6 rounded mt-10 text-center text-md font-semibold">
            <a href="">See More</a>
          </button>
        </div>
      </div>
    </div>
  );
};  

export default ProjectGallery;
