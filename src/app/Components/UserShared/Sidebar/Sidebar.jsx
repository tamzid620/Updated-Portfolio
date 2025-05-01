import React from "react";
import Image from "next/image";
import { barlow, robotoSlab } from "@/app/config/fonts";
import dp from "@/assests/image/Dp.jpg";
import bangladeshiFlag from "@/assests/image/bangladesh.png";
import locationImage from "@/assests/image/location.png";
import jobIcon from "@/assests/image/suitcase.png";
import icon1 from "@/assests/icon/react.png" ;
import icon2 from "@/assests/icon/Next.js.png" ;
import icon3 from "@/assests/icon/js.png" ;

const Sidebar = () => {
  return (
    <div className="bg-white text-black lg:w-[550px] md:w-[350px] sm: w-[350px] h-screen pt-20">
      {/* image section    */}
      <div className="flex justify-center">
        <div className="bg-gray-500 w-[250px]  p-2  rounded-full shadow-2xl shadow-black">
          <Image
            src={dp}
            alt="display picture"
            className="rounded-full w-[250px] bg-gray-300"
          />
        </div>
      </div>
      {/* content section  */}
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
            <p className="flex justify-center items-center mt-3 gap-5 ">
              <span className="flex items-center">
                <Image
                  src={locationImage}
                  alt="icon"
                  className=" w-[20px] me-2"
                />{" "}
                Chattogram,Bangladesh
              </span>
              <span className="flex items-center">
                <Image src={jobIcon} alt="icon" className=" w-[20px] me-2" />
                FrontEnd Developer
              </span>
            </p>
            <p className="my-4 text-lg flex items-center font-semibold">
              A passionate frontend developer from Bangladesh{" "}
              <Image
                src={bangladeshiFlag}
                alt="bangladeshi flag"
                className=" w-[30px] ms-2"
              />
            </p>
          </div>
          {/* sub section -2  */}
          <div>
          <h1 className= {` ${robotoSlab.className} text-center text-xl font-bold text-black`}>Specialized in:</h1>
          <div className="flex gap-3 justify-center items-center mt-2">
            <button className="font-bold text-lg flex justify-center items-center border-3 px-2 py-1 shadow-black shadow-sm hover:shadow-md">
            <Image src={icon1} alt="icon" className=" w-[30px] me-2" />
            React.Js
            </button>
            <button className="font-bold text-lg flex justify-center items-center border-3 px-2 py-1 shadow-black shadow-sm hover:shadow-md">
            <Image src={icon2} alt="icon" className=" w-[30px] me-2" />
            Next.Js
            </button>
            <button className="font-bold text-lg flex justify-center items-center border-3 px-2 py-1 shadow-black shadow-sm hover:shadow-md">
            <Image src={icon3} alt="icon" className=" w-[30px] me-2" />
            JavaScript
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
