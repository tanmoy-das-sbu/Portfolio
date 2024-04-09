"use client";
import Image from "next/image";
import Logo from "../../../../public/images/pkv/pkv.svg";
import Navbar from "../Navbar/Navbar";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const name = "DR. PRADIP VARMA";
  return (
    <div className="bg-[#F3F0EB] w-full h-[150px] fixed top-0 z-30">
      <div className="container h-full flex flex-row justify-between sm:pl-8 sm:pr-8">
        <div className="flex flex-col justify-center gap-3 ">
          <div className={barlow.className}>
            <h2 className="font-bold md:text-3xl text-xl text-[#F47621]">
              {name}
            </h2>
          </div>

          <p className=" md:font-bold md:text-lg text-sm text-[#F47621]">
            Member-Elect, Rajya Sabha
          </p>
          <p className=" md:font-bold md:text-lg text-sm text-[#F47621]">
            General Secretary, BJP
          </p>
          <p className=" md:font-bold md:text-lg text-sm text-[#F47621]">
            Jharkhand
          </p>
        </div>
        <div className=" h-full flex items-center justify-center">
          <div className=" bg-white rounded-full p-1 aspect-square ">
            <Image
              src={Logo}
              alt="slide_image"
              className="w-20 h-20 md:w-32 md:h-32"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
