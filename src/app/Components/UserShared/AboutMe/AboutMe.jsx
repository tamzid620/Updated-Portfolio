import { barlow, robotoSlab } from "@/app/config/fonts";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ---------------------------------------------------------------
import atomIcon from "@/assests/icon/skills icon/atom.png";
import WebIcon from "@/assests/icon/skills icon/web.png";
import LockIcon from "@/assests/icon/skills icon/padlock.png";
import apiIcon from "@/assests/icon/skills icon/api.png";
// ---------------------------------------------------------------
import html from "@/assests/icon/tech icon/html.png";
import css from "@/assests/icon/tech icon/css.png";
import scss from "@/assests/icon/tech icon/Sass.png";
import JavaScript from "@/assests/icon/tech icon/js.png";
import TypeScript from "@/assests/icon/tech icon/Typescript.png";
import nextJs from "@/assests/icon/tech icon/Next.js.png";
import react from "@/assests/icon/tech icon/react.png";
import node from "@/assests/icon/tech icon/node.png";
import tailwind from "@/assests/icon/tech icon/tailwind.png";
import bootstrap from "@/assests/icon/tech icon/bootstrap.png";
import stripe from "@/assests/icon/tech icon/stripe.png";
import mongodb from "@/assests/icon/tech icon/mb.png";
import expressjs from "@/assests/icon/tech icon/express.png";
import nextAuth from "@/assests/icon/tech icon/NextAuth.png";
import firebase from "@/assests/icon/tech icon/firebase.png";
import redux from "@/assests/icon/tech icon/redux.png";
import gitHub from "@/assests/icon/tech icon/github.png";
import materialUi from "@/assests/icon/tech icon/material ui .png";

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
  const skillData = [
    {
      logo: html,
      title: "Html",
    },
    {
      logo: css,
      title: "CSS",
    },
    {
      logo: scss,
      title: "SCSS",
    },
    {
      logo: bootstrap,
      title: "Bootstrap",
    },
    {
      logo: tailwind,
      title: "Tailwind",
    },
    {
      logo: materialUi,
      title: "MaterialUi",
    },
    {
      logo: JavaScript,
      title: "JavaScript",
    },
    {
      logo: TypeScript,
      title: "TypeScript",
    },
    {
      logo: nextJs,
      title: "NextJs",
    },
    {
      logo: react,
      title: "ReactJs",
    },
    {
      logo: redux,
      title: "Redux",
    },
    {
      logo: node,
      title: "NodeJs",
    },
    {
      logo: expressjs,
      title: "ExpressJs",
    },
    {
      logo: mongodb,
      title: "MongoDB",
    },
    {
      logo: stripe,
      title: "Stripe",
    },
    {
      logo: nextAuth,
      title: "NextAuth",
    },
    {
      logo: firebase,
      title: "Firebase",
    },
    {
      logo: gitHub,
      title: "GitHub",
    },
  ];

  return (
    <div className={` ${barlow.className}  `}>
      {/* section div -1 ------------------------  */}
      <div className="mb-10">
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          About Me
        </h1>
        <p className="leading-8 text-gray-500 font-semibold text-lg">
          Hello! I’m a web developer with 2 years of experience, specializing in
          creating dynamic and user-friendly websites. My expertise spans HTML,
          CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB. I’m
          passionate and dedicated to every step of the design process, from
          initial discussion to final execution. Let’s make your project a
          success together!
        </p>
      </div>
      {/* section div -2 ------------------------  */}
      <div className="mb-10">
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          What I’ doing
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {myworksData.map(({ icon, title, disc }, index) => (
            <div className="flex gap-3 flex-1 sm:flex-none items-center text-black text-sm px-6 py-10  rounded-sm border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase">
              <div>
                <Image src={icon} alt="skills icon" className="w-24" />
              </div>
              <div>
                <h1 className={` ${robotoSlab.className} text-lg font-bold `}>{title}</h1>
                <p className="text-gray-500 font-semibold mt-2">{disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* section div -3 ------------------------  */}
      <div className="">
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          My Skills
        </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm: grid-cols-1 gap-5">
        {skillData.map(({ logo, title }) => (
            <div
              key={title}
              className="flex-1 sm:flex-none text-center flex items-center justify-center text-black text-lg px-4 py-2 rounded-sm border-2  border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
            >
              <div>
                <div>
                <Image className="w-24" src={logo} alt="" />
                 <br />
                </div>
                <h1 className="flex justify-center">{title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
