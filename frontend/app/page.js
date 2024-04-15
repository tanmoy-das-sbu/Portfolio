"use client";

import Link from "next/link";
import DrPKV from "../public/images/pkv/drpkvSir.jpeg";
import TranslatePage from "./schedule/TranslatePage";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Home() {
  //https://portfolio-xavu.vercel.app/schedule
  return (
    <main className="mt-[180px]">
      <div className="container  my-8 p-4 bg-white ">
        <div className="flex flex-col  lg:flex-row">
          <div className="lg:w-1/4 shadow rounded-lg">
            <Image
              alt=""
              className="w-48 h-48 rounded-full mx-auto shadow-lg "
              height="200"
              src={DrPKV}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="mt-4 mb-2 text-xl font-semibold text-center">
              Dr. Pradip Varma
            </h2>

            <p className="text-sm font-semibold text-center mt-3">
              MEMBER OF PARLIAMENT RAJYA SABHA (JHARKHAND)
            </p>
            <div className="mt-4 p-2 border-t border-gray-200">
              <p className="text-sm font-semibold text-center mt-3">
                BJP Jharkhand State General Secretary
              </p>
              <p className="text-sm font-semibold text-center mt-3">
                Additionally headquarters -in-charge BJP Jharkhand
              </p>
              <p className="text-xs text-gray-600 text-center">Incumbent</p>
              <p className="text-xs text-gray-600 text-center">
                13 December 2020 - present
              </p>
              <p className="text-sm font-semibold text-center mt-3">
                BJP Jharkhand State Vice President
              </p>

              <p className="text-xs text-gray-600 text-center">
                Assumed office
              </p>
              <p className="text-xs text-gray-600 text-center">
                2 July 2016 – 11 December 2020
              </p>
              <p className="text-sm font-semibold text-center mt-3">
                BJP Jharkhand State secretary
              </p>
              <p className="text-xs text-gray-600 text-center">
                Assumed office
              </p>
              <p className="text-xs text-gray-600 text-center">
                8 December 2013- 2 july 2016
              </p>
            </div>
          </div>
          <div className=" my-4 lg:my-0 mx-0 lg:mx-4 p-4 lg:w-3/4 shadow rounded-lg">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  shrink-0  stroke-orange-500  "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac05 desc-ac05"
                    >
                      <title id="title-ac05">Leading icon</title>
                      <desc id="desc-ac05">
                        Icon that describes the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    &nbsp;&nbsp;
                    <div>INTRODUCTION</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600">
                    Dr. Pradip Varma ( 24 February 1972) is an Indian politician
                    and academician and a member of parliament of
                    RAJYA SABHA, JHARKHAND from Bharatiya Janata Party. He is
                    serving as the State General Secretary BJP Jharkhand unit
                    from 2020 onwards. Erstwhile he served as State Vice
                    President BJP Jharkhand in 2016 and state minister BJP
                    Jharkhand in 2013.Earlier he served as BJP
                    membership-in-charge, Khijri division of Ranchi.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  shrink-0  stroke-orange-500  "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac07 desc-ac07"
                    >
                      <title id="title-ac07">Leading icon</title>
                      <desc id="desc-ac07">
                        Icon that describes the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                      />
                    </svg>
                    &nbsp;&nbsp;
                    <h2>POLITICAL JOURNEY</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600">
                    The first major source of turning point in his
                    career came when he first met Shri Lal Krishna Advani in the
                    Mohrabadi Maidan, Ranchi in the campaign for Ram Mandir
                    Yatra. This meeting start to be foundation stone of his
                    political career in Bhartiya Janta Party.Dr. Pradip Varma
                    was the BJP&apos;s election in-charge for India&apos;s
                    tribal state of Jharkhand, during the 2019 Lok Sabha
                    elections. The BJP and its Coalition partner NDA won 12 out
                    of 14 seats. As a result, he rose to state prominence and
                    was appointed as the Party&apos;s State General Secretary in
                    2019. He has played an organising and membership-promotional
                    role in the elections of many states since 2019. In his
                    initial two years, the BJP achieved success in state
                    legislative assembly in Jharkhand where it won the Dhanbad,
                    Nirsa, Baghmara and Sindri but lost ground in Jharia and
                    tundi in 2019. Pradip Varma is also a 2nd year trained
                    Swayamsevak from (RSS) Rashtriya Swayamsevak Sangh and also
                    served as a Joint secretary in Seva Bharti (Prantiya toli )
                    at zonal level.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  shrink-0  stroke-orange-500  "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac09 desc-ac09"
                    >
                      <title id="title-ac09">Leading icon</title>
                      <desc id="desc-ac09">
                        Icon that describes the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4h18v6H3zm18 10H3v6h18z"
                      />
                    </svg>
                    &nbsp;&nbsp;
                    <h2>ACADEMIC CAREER</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600">
                    Dr. Pradip Varma was born on 24th February 1972 in Kolkata
                    capital city of West Bengal into a Hindu Vaishya family but
                    he is ancestral native of tehsil Barwadih in Latehar
                    district of Jharkhand. He started his primary education
                    at Subhas Vidya Mandir Muraripukur Kolkata. Later on for
                    further studies he shifted to Sarvodaya School Muchipara in
                    kolkata. From childhood he was interested in playing chess
                    at the age of 12 and was a state level chess player. He
                    also played cricket for the team Mohan Bagan at the age of
                    15. He has done his intermediate in commerce stream in 1988
                    and undergraduate degree in commerce, B.Com from Seth Anand
                    Ram Jaipuriya college of Calcutta University in 1991. He
                    passed his executive MBA from Vinayaka Mission, and master’s
                    degree of M.A (Hindi) from the same. Later he has done his
                    completed his doctorate Phd. in Hindi language and
                    literature.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  shrink-0  stroke-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac11 desc-ac11"
                    >
                      <title id="title-ac11">Leading icon</title>
                      <desc id="desc-ac11">
                        Icon that describes the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                      />
                    </svg>
                    &nbsp;&nbsp;
                    <h2>ACHIEVEMENTS</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600">
                    His scholarly work has been on the topic of Ramcharitmanas:
                    “Parivar aur Samaj prabadhan ke sutra” . He has also written
                    blog on the several biographies on freedom fighters like
                    Birsa Munda, Pt. Deen Dayal Upadhyaay and topics of national
                    importance like Hul Andolan, Vande matram etc. Apart from
                    Hindi language, He is a polyglot person having full
                    proficiency of English, Awadhi, Bangla, Bhojpuri and 4
                    tribal languages of Jharkhand namely, Nagpuri, Mundari,
                    Santhali and Kurmali. He set up think tank named “Public
                    Policy For India People” which works in the domain of policy
                    making awareness and training program.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
