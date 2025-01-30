"use client";

import Image from "next/image";
import Logo from "../../../../public/images/pkv/DrPKV.png";
import Navbar from "../Navbar/Navbar";
import { Barlow } from "next/font/google";
import { useRouter } from "next/navigation";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const name = "DR. PRADIP VARMA";
  const router = useRouter();
  return (
    <div className="bg-[#F3F0EB] w-full h-[120px] fixed top-0 z-30">
      <div className="container h-full flex flex-row justify-between sm:pl-8 sm:pr-8">
        <div
          className="flex flex-col justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className={barlow.className}>
            <h2 className="font-bold md:text-3xl text-xl text-[#F47621]">
              {name}
            </h2>
          </div>
          <p className="md:font-bold text-sm text-[#F47621]">
            Member, Jharkhand Rajya Sabha
          </p>
          <p className="md:font-bold text-sm text-[#F47621]">
            General Secretary, BJP
          </p>
          <p className="md:font-bold text-sm text-[#F47621]">Jharkhand</p>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="bg-white rounded-full overflow-hidden p-1 aspect-square">
            <Image
              alt=""
              className="w-20 h-20 md:w-28 md:h-28"
              height="200"
              src={Logo}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
