import { barlow, robotoSlab } from '@/app/config/fonts';
import React from 'react';
import Image from "next/image";
import cart1Image1 from "@/assests/image/Osama-Mart-Banner.png";
import cart1Image2 from "@/assests/image/Azraelle-Banner.png";
import cart1Image3 from "@/assests/image/Concare-Banner.png";
import cart1Image4 from "@/assests/image/SkyScape-Banner.png";
import cart1Image5 from "@/assests/image/ironyfit.png";
import Link from "next/link";

const projectData = [
  {
    img: cart1Image1,
    name: "Osama Mart",
    genre: "E-commerce",
    visitLink: "https://osama-mart.vercel.app/",
    usedTech1: "Next.js, Firebase, Express.js,",
    usedTech2: "Matetial UI etc.",
    usedTech3: "",
    clientGitLink: "https://github.com/tamzid620/Osama-Mart",
    serverGitLink: "https://github.com/tamzid620/Osama-Mart-Server",
  },
  {
    img: cart1Image2,
    name: "Azraelle Language Club",
    genre: "Online Course selling",
    visitLink: "https://azraelle-language-club.netlify.app/",
    usedTech1: "React.js, Stripe , Express.js",
    usedTech2: "react motion, slider,gallery ,query etc",
    usedTech3: "",
    clientGitLink: "https://github.com/tamzid620/azraelle-language-camp_client",
    serverGitLink: "https://github.com/tamzid620/azraelle-language-camp-server",
  },
  {
    img: cart1Image3,
    name: "Concrare (HomePage)",
    genre: "Real estate",
    visitLink: "https://concrare.vercel.app/",
    usedTech1: "Next.js",
    usedTech2: "Swiper.js, slider etc",
    usedTech3: "",
    clientGitLink: "https://github.com/tamzid620/Concrare",
    serverGitLink: "https://github.com/tamzid620/Concrare",
  },
  {
    img: cart1Image4,
    name: "SkyScape (HomePage)",
    genre: "Ticket, Hotel Booking ",
    visitLink: "https://skyscape-eta.vercel.app/",
    usedTech1: "React.js",
    usedTech2: "Swiper.js, slider etc",
    usedTech3: "",
    clientGitLink: "https://github.com/tamzid620/reservation",
    serverGitLink: "https://github.com/tamzid620/reservation",
  }
];

const MyProjects = () => {



    return (
        <div className= {` ${barlow.className} md:mt-12 sm:mt-0 `}>
           <div className="pt-10 mb-10">
                   <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
                    My Projects
                   </h1>
                   <div>
                    
                   </div>
                 </div>
        </div>
    );
};

export default MyProjects;