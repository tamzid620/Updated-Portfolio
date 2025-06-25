import { barlow, robotoSlab } from "@/app/config/fonts";
import React from "react";
import Image from "next/image";
import cart1Image1 from "@/assests/image/Osama-Mart-Banner.png";
import cart1Image2 from "@/assests/image/Azraelle-Banner.png";
import cart1Image3 from "@/assests/image/Concare-Banner.png";
import cart1Image4 from "@/assests/image/SkyScape-Banner.png";
import cart1Image5 from "@/assests/image/school-dashboard.png";
import Link from "next/link";

const projectData = [
  {
    img: cart1Image1,
    genre: "E-commerce",
    name: "Osama Mart",
    usedTech1: "Next.js",
    usedTech2: "Firebase",
    usedTech3: "Express.js",
    usedTech4: "MongoBD",
    disc: "A full-stack e-commerce app with product browsing, secure checkout (Stripe), and an admin panel for managing orders and inventory." ,
    visitLink: "https://osama-mart.vercel.app/",
    clientGitLink: "https://github.com/tamzid620/Osama-Mart",
    serverGitLink: "https://github.com/tamzid620/Osama-Mart-Server",
  },
  {
    img: cart1Image5,
    genre: "Education",
    name: "English School",
    usedTech1: "React.js",
    usedTech2: "Material UI",
    usedTech3: "PHP",
    usedTech4: "Laravel",
    disc: "A full-stack school management system , secure checkout, and an admin panel for managing orders and inventory " ,
    visitLink: "https://dashboard-management-one.vercel.app/",
    clientGitLink: "https://github.com/tamzid620/dashboard-management",
    serverGitLink: "https://devtamzid.vercel.app/",
  },
  {
    img: cart1Image3,
    genre: "Real estate",
    name: "Concrare (HomePage)",
    usedTech1: "Next.js",
    usedTech2: "",
    usedTech3: "",
    usedTech4: "",
    disc:"A responsive Landing Homepage build with next.js featuring attractive user experience.",
    visitLink: "https://concrare.vercel.app/",
    clientGitLink: "https://github.com/tamzid620/Concrare",
    serverGitLink: "https://github.com/tamzid620/Concrare",
  },
  {
    img: cart1Image4,
    genre: "Ticket, Hotel Booking ",
    name: "SkyScape (HomePage)",
    usedTech1: "React.js",
    usedTech2: "",
    usedTech3: "",
    usedTech4: "",
    disc:"A responsive Landing Homepage build with react.js featuring attractive user experience.",
    visitLink: "https://skyscape-eta.vercel.app/",
    clientGitLink: "https://github.com/tamzid620/reservation",
    serverGitLink: "https://github.com/tamzid620/reservation",
  },
  {
    img: cart1Image2,
    genre: "Online Course selling",
    name: "Azraelle Language Club",
    usedTech1: "React.js",
    usedTech2: "Firebase, Stripe",
    usedTech3: "Express.js",
    usedTech4: "MongoBD",
    disc: "A modern language learning platform built with React.js and Express.js, featuring secure Stripe payments, animated UI, and responsive design for an engaging user experience.",
    visitLink: "https://azraelle-language-club.netlify.app/",
    clientGitLink: "https://github.com/tamzid620/azraelle-language-camp_client",
    serverGitLink: "https://github.com/tamzid620/azraelle-language-camp-server",
  },
];

const MyProjects = () => {
  return (
    <div className={` ${barlow.className} md:mt-12 sm:mt-0 `}>
      <div className="pt-10 mb-10">
        <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>
          My Projects
        </h1>
        {/* PROJECT MAP SECTION  */}
        <div>
          {projectData.map((project, index) => (
            <div key={index} className="flex-1 sm:flex-none  flex items-center  px-4 py-2 rounded-sm border-2  border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mb-8 ps-4 bg-zinc-200 ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center ">
              {/* content div  */}
              <div className="pt-5">
                <span className="bg-black text-white font-bold px-2 py-1 ">{project?.genre}</span>
                <h1 className="my-3 font-bold text-xl">{project?.name}</h1>
                <p className="text-gray-700 mb-3">{project?.disc}</p>
                <p className="flex gap-2 flex-wrap">
  {[project.usedTech1, project.usedTech2, project.usedTech3, project.usedTech4]
    .filter(Boolean) // filters out undefined or empty strings
    .map((tech, idx) => (
      <span key={idx} className="border-2 px-2 py-1 bg-white rounded-sm font-bold text-sm">
        {tech}
      </span>
  ))}
</p>
{/* button section >>>>>>>>>>>>>>>>>>>>>>> */}
  <div className="flex gap-3 my-5">
    <Link href={project?.visitLink} target="_blank">
    <button className="flex-1 sm:flex-none text-center flex items-center bg-blue-500 text-white md:text-sm sm: text-xs px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">Visit</button>
    </Link>
    <Link href={project?.clientGitLink} target="_blank">
    <button className="flex-1 sm:flex-none text-center flex items-center bg-green-700 text-white md:text-sm sm: text-xs px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">Client GitLink</button>
    </Link>
    <Link href={project?.serverGitLink} target="_blank">
    <button className="flex-1 sm:flex-none text-center flex items-center bg-red-500 text-white md:text-sm sm: text-xs px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">ServerGitLink</button>
    </Link>
  </div>
              </div>
              {/* image div  */}
              <div className="md:flex sm: block justify-end">
                <Image src={project?.img} alt={project?.name} className="w-96 h-64 p-8 bg-gray-900"/>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
