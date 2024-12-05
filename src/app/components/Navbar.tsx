import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineEmail } from "react-icons/md";
import { LuFiles } from "react-icons/lu";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<any | null>(null);

  const Links = [
    {
      name: "Home",
      link: "#hero",
      icon: MdOutlineDashboard,
    },
    {
      name: "About",
      link: "#about",
      icon: FaRegUser,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: LuFiles,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: MdOutlineEmail,
    },
  ];

  return (
    <div className="fixed lg:top-[35%] lg:justify-normal flex justify-center  w-full lg:w-auto top-4 items-center lg:left-6 z-50" data-aos="fade-right" data-aos-duration="1000">
      <nav>
        <ul className="flex flex-row lg:flex-col gap-5">
          {Links.map((link, index) => (
            <li
              key={index}
              onClick={() => setActiveLink(link.name)}
              className={`h-16 shadow shadow-neutral-600 hover:ring-2 w-16 rounded-full justify-center hover:w-32 flex items-center transition-all duration-300 cursor-pointer hover:ring-stone-700 ${
                activeLink === link.name
                  ? "bg-stone-700 ring-2 ring-neutral-600 text-white"
                  : "bg-black-200 text-white"
              }`}
            >
              <a
                href={link.link}
                className="w-full flex justify-center items-center hover:w-32 rounded-full h-full"
              >
                <link.icon className="w-[20px] h-[20px]" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
