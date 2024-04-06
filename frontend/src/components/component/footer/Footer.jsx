"use client";

import { Barlow_Condensed } from "next/font/google";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import twitter from "../../../../public/images/icons/twitter.svg";
import instagram from "../../../../public/images/icons/instagram.svg";
import youtube from "../../../../public/images/icons/youtube.svg";
import facebook from "../../../../public/images/icons/facebook.svg";
import Link from "next/link";
import  WhatsApp  from "../../../../public/images/icons/whatsapp.svg";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#F3F0EB]">
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-4 text-black ">
        <section className="p-3 md:p-10 flex flex-col gap-10  ">
          <div>
            <div className={barlow.className}>
              <h2 className="  text-3xl py-1 text-[#F47621] border-b-2 mb-2">
                QUICK LINKS
              </h2>
            </div>
            <ul className="text-md flex flex-row flex-wrap p-0 gap-3 ">
              <Link href={`/schedule`}>
                <li> Home</li>
              </Link>
              <Link href={`/gallery`}>
                <li> Photo Gallery</li>
              </Link>
              <li> Blog</li>
              <li> Articles</li>
              <Link href={`/contact`}>
                <li> Contact Us</li>
              </Link>
              <Link href={`/aboutUs`}>
                <li> About</li>
              </Link>
            </ul>
          </div>
          <div>
            <div className={barlow.className}>
              <h2 className="  text-3xl py-1 text-[#F47621]  border-b-2 mb-2">
                SOCIALS
              </h2>
            </div>
            <div className="flex justify-between items-center gap-1  mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://www.facebook.com/pkvarmaranchi"
                      target="_blank"
                    >
                      <Image
                        src={facebook}
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="facebook"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://twitter.com/pkvarmaranchi" target="_blank">
                      <Image
                        src={twitter}
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="twitter"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://www.youtube.com" target="_blank">
                      <Image
                        src={youtube}
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="youtube"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Youtube</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://www.instagram.com/pkvarmaranchi"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="instagram"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                     href="https://wa.me/2348100000000"
                     className="whatsapp_float"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                      <Image
                        src={WhatsApp }
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="instagram"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>
        <section className="p-3 md:p-10">
          <div className={barlow.className}>
            <h2 className="text-3xl py-1 text-[#F47621]  border-b-2 mb-2">
              DONATE NOW
            </h2>
          </div>
          <div className=" text-lg flex flex-col gap-3 ">
            <a
              target="blank"
              href="https://pmcares.gov.in/en/web/contribution/donate_india"
            >
              <button
                type="button"
                className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center  mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                PM CARES
              </button>
            </a>
            <a
              target="blank"
              href="https://www.narendramodi.in/donation/G5EC2L-F"
            >
              <button
                type="button"
                className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center  mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                PARTY FUND
              </button>
            </a>
            <a
              target="blank"
              href="https://www.bjp.org/membership/en/home/donation"
            >
              <button
                type="button"
                className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center  mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                BJP
              </button>
            </a>
          </div>
        </section>
        <section className="p-3 md:p-10">
          <div className={barlow.className}>
            <h2 className="text-3xl py-1 text-[#F47621]  border-b-2 mb-2">
              CONTACT
            </h2>
          </div>
          <div className=" text-lg">
            <div className="h-fit flex gap-3 flex-col">
              <p>
                <span className="font-bold">Office: </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, quam?
                </span>
              </p>
              <p>
                <span className="font-bold">Email: </span>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </p>
              <p>
                <span className="font-bold">Tel.-</span>
                <a href="tel:1234567890">1234567890</a>
              </p>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
