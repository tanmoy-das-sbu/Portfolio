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
import WhatsApp from "../../../../public/images/icons/whatsapp.svg";
import Link from "next/link";

import TranslatePage from "../../../../app/schedule/TranslatePage";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#F3F0EB]">
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-4 text-black ">
        <section className="pb-3 pt-3  flex flex-col gap-10  ">
          <div>
            <div className={barlow.className}>
              <h2 className="  text-3xl py-1 text-[#F47621] border-b-2 mb-2">
                Multi Language Translate
              </h2>
            </div>
          <div>
        <TranslatePage/>
        </div>
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
                     href="https://wa.me/+919450282852"
                     
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                      <Image
                        src={WhatsApp}
                        className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full bg-white shadow-lg p-0 lg:p-2"
                        draggable="false" alt="instagram"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Whatsapp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>
        <section className="pb-3 pt-3 ">
          <div className={barlow.className} >
            <h2 className="text-3xl py-1 text-[#F47621] border-b-2 mb-2 lg:ml-14">
              DONATE NOW
            </h2>
          </div>
          <div className=" text-lg flex flex-col gap-3 lg:pr-14 lg:pl-14 ">
            <a
              target="blank"
              href="https://pmcares.gov.in/en/web/contribution/donate_india"
            >
              <button
                type="button"
                className="w-full text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-500  font-medium rounded-3xl text-sm px-5 py-2.5 text-center  mb-2"
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
        <section className="pb-3 pt-3 ">
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
                  BJP Office, Harmu Housing Colony, Argora, Ranchi, Jharkhand, PIN - 834002
                </span>
              </p>
              <p>
                <span className="font-bold">Email: </span>
                <a href="mailto:example@gmail.com"> pkvbjp@gmail.com</a>
              </p>
              <p>
                <span className="font-bold">Tel.-</span>
                <a href="tel:+919450282852"> +919450282852</a>
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