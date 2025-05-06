import { barlow, robotoSlab } from "@/app/config/fonts";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import atomIcon from "@/assests/icon/skills icon/atom.png";
import WebIcon from "@/assests/icon/skills icon/web.png";
import LockIcon from "@/assests/icon/skills icon/padlock.png";
import apiIcon from "@/assests/icon/skills icon/api.png";

const AboutMe = () => {
  const myworksData = [
    {
      icon: atomIcon,
      title: "Front-End Development",
      disc: "Crafting modern, responsive, and interactive user interfaces with React and Next.js for seamless user experiences",
    },
    {
      icon: WebIcon,
      title: "Full-Stack Web Apps",
      disc: "Building scalable and secure web applications using the MERN stack with smooth client-server communication.",
    },
    {
      icon: LockIcon,
      title: "Authentication Systems",
      disc: "Implementing secure authentication flows using NextAuth and Firebase to ensure user data protection and privacy.",
    },
    {
      icon: apiIcon,
      title: "API Integration",
      disc: "Integrating third-party APIs and services to extend functionality and enhance user experience in web applications.",
    },
  ];

  return (
    <div className={` ${barlow.className} `}>
      {/* section div -1 ------------------------  */}
      <div>
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          About Me
        </h1>
        <p className="leading-8 text-lg">
          Hello! I’m a web developer with 2 years of experience, specializing in
          creating dynamic and user-friendly websites. My expertise spans HTML,
          CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB. I’m
          passionate and dedicated to every step of the design process, from
          initial discussion to final execution. Let’s make your project a
          success together!
        </p>
      </div>
      {/* section div -2 ------------------------  */}
      <div>
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          What I’ doing
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
