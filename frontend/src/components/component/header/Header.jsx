"use client";

import Image from "next/image";
import Logo from "../../../../public/images/pkv/DrPKV.png";
import Navbar from "../Navbar/Navbar";
import { Barlow } from "next/font/google";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaWhatsapp, FaWikipediaW, FaYoutube } from "react-icons/fa";
import XIcon from '@mui/icons-material/X';

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const name = "DR. PRADIP VARMA";
  const router = useRouter();

  const socials = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/pkvarmaranchi",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/pkvarmaranchi",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@pkvbjp",
      label: "YouTube",
    },
    {
      icon: XIcon,
      href: "https://twitter.com/pkvarmaranchi",
      label: "Twitter",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+919450282852",
      label: "WhatsApp",
    },
    {
      icon: FaWikipediaW,
      href: "https://en.wikipedia.org/wiki/Pradip_Kumar_Varma",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="bg-[#F3F0EB] w-full h-[120px] fixed top-0 z-30">
      <div className="container h-full flex flex-row justify-between sm:pl-8 sm:pr-8">
        <div className="flex flex-row items-center gap-4">
          <div
            className="flex flex-col justify-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className={barlow.className}>
              <h2 className="font-bold md:text-2xl text-xl text-[#F47621]">
                {name}
              </h2>
            </div>
            <p className="md:font-bold text-sm text-[#F47621]">
              Member, Jharkhand Rajya Sabha
            </p>
            <p className="md:font-bold text-sm text-[#F47621]">
              General Secretary, BJP , Jharkhand
            </p>
            <div className="hidden md:flex flex-col mt-2 justify-center gap-2">
              <div className="flex gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F47621] hover:text-[#d35b0d] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={23} />
                  </a>
                ))}
              </div>
            </div>
          </div>
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
