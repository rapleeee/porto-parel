"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import sertikom1 from '../assets/sertikom-1.jpeg';
import sertikom2 from '../assets/sertikom-2.jpeg';
function Certificate() {
    const certificates = [
      {
        title: "HTML & CSS Native",
            image: sertikom1,
        desc: 'Membuat sebuah Landing Page menggunakan HTML dan CSS murni',
      },
      {
        title: "PHP CRUD",
          image: sertikom2,
        desc:'Membuat sebuah Web Development hotel menggunakan PHP dan database MySql',
      },
    ];
  return (
    <div className="bg-black-100">
      <div className="max-w-screen-lg mx-auto lg:py-20 p-20 lg:p-0">
        <h1 className="text-white text-3xl font-semibold mb-10">
          Certificate that i've achieved
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-black-200 outline-2 rounded-lg overflow-hidden outline-neutral-700"
            >
              <Image src={certificate.image} alt={certificate.title} />
              <div className="p-8">
                <h2 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h2>
                <p className="text-neutral-400 mt-3">{certificate.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Certificate;