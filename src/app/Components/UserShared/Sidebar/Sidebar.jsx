"use client";
import React, { useState } from "react";
import Image from "next/image";
import { barlow, robotoSlab } from "@/app/config/fonts";
import dp from "@/assests/image/Dp.jpg";
import bangladeshiFlag from "@/assests/image/bangladesh.png";
import locationImage from "@/assests/image/map.png";
import jobIcon from "@/assests/image/suitcase.png";
import icon1 from "@/assests/icon/tech icon/react.png";
import icon2 from "@/assests/icon/tech icon/Next.js.png";
import icon3 from "@/assests/icon/tech icon/js.png";
import gitHub_Logo from "@/assests/icon/social icon/github.png";
import linkedin_Logo from "@/assests/icon/social icon/linkedin (1).png";
import whatsApp_Logo from "@/assests/icon/social icon/whatsapp (1).png";
import cvLogo from "@/assests/icon/social icon/curriculum-vitae.png";
import email_Logo from "@/assests/icon/social icon/mail.png";
import phoneCallLogo from "@/assests/icon/social icon/phone.png";
import Link from "next/link";

const socialLinksData = [
  {
    icon: gitHub_Logo,
    title: "GitHub",
    linkto: "https://github.com/tamzid620",
  },
  {
    icon: linkedin_Logo,
    title: "Linkedin",
    linkto: "https://www.linkedin.com/in/tamzid-ull-monir-96b163260/",
  },
  {
    icon: whatsApp_Logo,
    title: "WhatsApp",
    linkto: "https://wa.me/+8801852951963",
  },
  {
    icon: cvLogo,
    title: "Resume",
    linkto:
      "https://drive.google.com/file/d/15WzBm2IrIXlfGpqn_w9tPtLkL2YivlRw/view?usp=sharing",
  },
  {
    icon: phoneCallLogo,
    title: "Phone",
    linkto: "tel:8801852951963",
  },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white text-black lg:w-[550px] md:w-[400px] sm: w-full sm: px-2 h-screen pt-10">
      {/* image section    */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-[#18094b] via-[#c9c8cd]  to-[#18094b] w-[250px]  p-2  rounded-full shadow-2xl shadow-black">
          <Image
            src={dp}
            alt="display picture"
            className="rounded-full w-[250px] bg-gray-300"
          />
        </div>
      </div>
      {/* content section ******************************************* */}
      <div
        className={` ${barlow.className} mt-10 flex justify-center text-center text-gray-600`}
      >
        <div>
          {/* sub section -1  */}
          <div>
            <h1
              className={` ${robotoSlab.className} text-center text-2xl font-bold text-black`}
            >
              Tamzid Ull Monir
            </h1>
            <p className="flex justify-center items-center mt-3 md:gap-5 sm: gap-2 font-semibold">
              <span className="flex items-center lg:text-md md:text-sm sm: text-md">
                <Image
                  src={locationImage}
                  alt="icon"
                  className=" w-[20px] me-2"
                />{" "}
                Chattogram,Bangladesh
              </span>
              <span className="flex items-center lg:text-md md:text-sm sm: text-sm">
                <Image src={jobIcon} alt="icon" className=" w-[20px] me-2 " />
                Frontend Developer
              </span>
            </p>
            <p className="my-4 text-lg flex justify-center items-center font-semibold text-center">
              A Passionate Frontend Developer From Bangladesh
              <Image
                src={bangladeshiFlag}
                alt="bangladeshi flag"
                className=" w-[30px] ms-2 lg:block md:hidden sm: hidden"
              />
            </p>
          </div>
          {/* sub section -2  */}
          <div>
            <h1
              className={` ${robotoSlab.className} text-center text-xl font-bold text-black`}
            >
              Specialized in:
            </h1>
            <div className="flex gap-3 justify-center items-center mt-2">
              <button className="flex-1 sm:flex-none text-center flex items-center text-black text-sm px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">
                <Image
                  src={icon1}
                  alt="icon"
                  className=" w-[25px] md:me-2 sm: me-0"
                />
                React.Js
              </button>
              <button className="flex-1 sm:flex-none text-center flex items-center text-black text-sm px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">
                <Image
                  src={icon2}
                  alt="icon"
                  className=" w-[25px] md:me-2 sm: me-0"
                />
                Next.Js
              </button>
              <button className="flex-1 sm:flex-none text-center flex items-center text-black text-sm px-2 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">
                <Image
                  src={icon3}
                  alt="icon"
                  className=" w-[25px] md:me-2 sm: me-0"
                />
                JavaScript
              </button>
            </div>
            <p className="mt-10 font-semibold">
              Specializing in Dynamic, User-friendly Websites with Expertise in
              HTML, CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB.
            </p>
          </div>
          {/* sub section -3  */}
          <div className=" flex justify-center items-center gap-2 mt-7">
            {socialLinksData.map(({ icon, title, linkto }, index) => (
              <div
                key={index}
                className="relative inline-block flex-1 sm:flex-none text-center p-0.5 rounded-full border-2 
                          border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                            hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px]
                            hover:translate-y-[2px] transition-all font-bold uppercase"
              >
                <Link
                  href={linkto}
                  target="_blank"
                  className="flex justify-center items-center"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Image src={icon} alt="icon" className="w-10" />
                </Link>
                {hovered === index && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-xs font-semibold px-2 py-1 rounded shadow-lg z-10">
                    {title}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* HIRE ME BUTTON  */}
          <div className="flex justify-center mt-8">
            <Link href="https://wa.me/+8801852951963" target="_blank">
              <button className=" flex-1 sm:flex-none text-center flex items-center text-black text-lg px-20 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase">
                Don’t Think , HIre ME !
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
