"use client";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import DrPKV from "../public/images/pkv/drpkvSir.jpeg";
import TranslatePage from "./schedule/TranslatePage";
import Image from "next/image";
import { RiFocus2Line } from "rocketicons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

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
              MEMBER OF PARLIAMENT <br />
              JHARKHAND RAJYA SABHA
            </p>
            <div className="mt-4 p-2 border-t border-gray-200">
              {/* first */}
              <p className="text-sm font-semibold text-center mt-3">
                BJP Jharkhand State General Secretary (Second Term)
              </p>
              <p className="text-sm font-semibold text-center ">
                Additionally Headquarter In-charge
              </p>
              <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
              <p className="text-xs text-gray-600 text-center">
                2023 - present
              </p>
              <br/>
              <hr />
              <AlertDialog>
                <AlertDialogTrigger style={{ color: "#FF9933", width: "100%", textAlign: "center", fontWeight: "bold" }}>
                  Political Career Highlights</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle style={{ color:"#f47731",}}>Political Career Timeline of Dr. Pradip Varma, BJP Jharkhand</AlertDialogTitle>
                    <AlertDialogDescription>
                      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "10px" }}>
                        {/* Second */}

                        <div style={{ borderRight: "1px solid lightgrey" }}>
                        <p className="text-md text-black text-center font-bold mt-3">2020 - 2023</p>
                          <p className="text-sm font-semibold text-center ">
                            BJP Jharkhand State General Secretary (First Term)
                          </p>
                          <p className="text-sm font-semibold text-center ">
                            Additionally Headquarter In-charge
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>

                        <div style={{ borderRight: "1px solid lightgrey" }}>
                          {/* Third */}
                          <p className="text-md text-black text-center font-bold mt-3">2016 - 2020</p>
                          <p className="text-sm font-semibold text-center">
                            State Vice President
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>
                        {/* Forth */}
                        <div >
                        <p className="text-md text-black text-center font-bold mt-3">2015</p>
                          <p className="text-sm font-semibold text-center">
                            Convener, Membership Drive
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>
                        <div style={{ borderRight: "1px solid lightgrey" }}>
                          {/* Fifth */}
                          <p className="text-md text-black text-center font-bold mt-3">2013</p>
                          <p className="text-sm font-semibold text-center">
                            State secretary
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>
                        <div style={{ borderRight: "1px solid lightgrey" }}>
                          {/* Sixth */}
                          <p className="text-md text-black text-center font-bold mt-3">2011</p>
                          <p className="text-sm font-semibold text-center">
                            Convener, State Training
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>
                        <div >
                          {/* Seventh */}
                          <p className="text-md text-black text-center font-bold mt-3">2011</p>
                          <p className="text-sm font-semibold text-center">
                            Member, State Working Committee
                          </p>
                          <p className="text-xs text-gray-600 text-center">BJP Jharkhand</p>
                          
                        </div>
                        <div style={{ borderRight: "1px solid lightgrey" }}>
                          {/* Eighth */}
                          <p className="text-md text-black text-center font-bold mt-3">1997</p>
                          <p className="text-sm font-semibold text-center">
                            Convener, Primary Membership Drive
                          </p>
                          <p className="text-xs text-gray-600 text-center">
                            Khijri Mandal, Ranchi Gramin
                          </p>
                          
                        </div>
                        <div style={{ borderRight: "1px solid lightgrey" }}>
                          {/* Ninth */}
                          <p className="text-md text-black text-center font-bold mt-3">1994</p>
                          <p className="text-sm font-semibold text-center">
                            Active Member
                          </p>
                          <p className="text-xs text-gray-600 text-center">
                            Khijri Mandal, Ranchi Gramin
                          </p>
                         
                        </div>
                        <div>
                          {/* Tenth */}
                          <p className="text-md text-black text-center font-bold mt-3">1992</p>
                          <p className="text-sm font-semibold text-center">
                            Primary Member
                          </p>
                          <p className="text-xs text-gray-600 text-center">
                            Khijri Mandal, Ranchi Gramin
                          </p>
                          
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction style={{background: "#f47731"}}>Close</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
             <hr/>
            </div>
          </div>
          <div className=" my-4 lg:my-0 mx-0 lg:ml-4 p-4 lg:w-3/4 shadow rounded-lg">
            <div className="bg-gradient-to-r from-orange-500 to-rose-100 text-white rounded-md p-1 flex items-center -mt-3">
              <h2 className=" text-2xl font-medium ">A Political Luminary, Dr. Pradip Varma's Political Voyage</h2>
            </div>
          <div className="text-lg text-slate-600 text-justify mt-3">
                    Dr. Pradip Varma is an Indian politician and academician and
                    a member of parliament of RAJYA SABHA, JHARKHAND from
                    Bharatiya Janata Party. He is serving as the State General
                    Secretary BJP Jharkhand unit from 2020 onwards. Erstwhile he
                    served as State Vice President BJP Jharkhand in 2016 and
                    state minister BJP Jharkhand in 2013. Earlier he served as
                    BJP membership-in-charge, Khijri division of Ranchi. He was
                    born on 24th February 1972 in Kolkata capital city of West
                    Bengal into a Hindu Vaishya family but he is ancestral
                    native of tehsil Barwadih in Latehar district of Jharkhand.
                    From childhood he was interested in playing chess at the age
                    of 12 and was a state level chess player. He also played
                    cricket for the team Mohan Bagan at the age of 15.
                  </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <br/>
              <hr/>
              {/* <AccordionItem value="item-1">
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
                  <div className="text-lg text-slate-600 text-justify">
                    Dr. Pradip Varma is an Indian politician and academician and
                    a member of parliament of RAJYA SABHA, JHARKHAND from
                    Bharatiya Janata Party. He is serving as the State General
                    Secretary BJP Jharkhand unit from 2020 onwards. Erstwhile he
                    served as State Vice President BJP Jharkhand in 2016 and
                    state minister BJP Jharkhand in 2013. Earlier he served as
                    BJP membership-in-charge, Khijri division of Ranchi. He was
                    born on 24th February 1972 in Kolkata capital city of West
                    Bengal into a Hindu Vaishya family but he is ancestral
                    native of tehsil Barwadih in Latehar district of Jharkhand.
                    From childhood he was interested in playing chess at the age
                    of 12 and was a state level chess player. He also played
                    cricket for the team Mohan Bagan at the age of 15.
                  </div>
                </AccordionContent>
              </AccordionItem> */}
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
                  <div className="text-lg text-slate-600 text-justify">
                    The first major source of turning point in his career came
                    when he first met Shri Lal Krishna Advani in the Mohrabadi
                    Maidan, Ranchi in the campaign for Ram Mandir Yatra. This
                    meeting start to be foundation stone of his political career
                    in Bhartiya Janta Party.Dr. Pradip Varma was the BJP&apos;s
                    election in-charge for India&apos;s tribal state of
                    Jharkhand, during the 2019 Lok Sabha elections. The BJP and
                    its Coalition partner NDA won 12 out of 14 seats. As a
                    result, he rose to state prominence and was appointed as the
                    Party&apos;s State General Secretary in 2019. He has played
                    an organising and membership-promotional role in the
                    elections of many states since 2019. In his initial two
                    years, the BJP achieved success in state legislative
                    assembly in Jharkhand where it won the Dhanbad, Nirsa,
                    Baghmara and Sindri but lost ground in Jharia and tundi in
                    2019. Pradip Varma is also a 2nd year trained Swayamsevak
                    from (RSS) Rashtriya Swayamsevak Sangh and also served as a
                    Joint secretary in Seva Bharti (Prantiya toli ) at zonal
                    level.
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
                  <div className="text-lg text-slate-600 text-justify">
                    <dl className=" text-gray-900 divide-y divide-gray-200">
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Secondary
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          Science <br />
                          <span>West Bengal Board of Secondary Education</span>
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Higher Secondary
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          Commerce <br />
                          <span>
                            West Bengal Council of Higher Secondary Education
                          </span>
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Graduation
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          B.Com <br />
                          <span>Calcutta University</span>
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Post Graduation
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          MBA <br />
                          <span>Vinayaka Missions University</span>
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Post Graduation
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          MA (Hindi) <br />
                          <span>Vinayaka Missions University</span>
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1  font-semibold md:text-md ">
                          Doctorate
                        </dt>
                        <dd className="text-sm text-gray-500 ">
                          Hindi <br />
                          <span>Sai Nath University</span>
                        </dd>
                      </div>
                    </dl>
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
                    <h2>PROFESSIONAL AFFILIATIONS</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600 text-justify">
                    <dl className="text-gray-900 divide-y divide-gray-200">
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Mahadevi Birla Insititute of Nursing & Clinical Technology
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Founder Member <br />
                          Period: 2003 - Present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Sarala Birla Center for Skill Development
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Founder Member <br />
                          Period: 2009 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Sarala Birla Public School
                        </dt>
                        <dd className="text-sm text-gray-500">
                        Position: Founder Member <br />
                          Period: 2009 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Sarala Birla University
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Founder Vice-Chancellor <br />
                          Period: 2017 - 2021
                        </dd>
                      </div>
                      
                    </dl>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
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
                  <div className="text-lg text-slate-600 text-justify">
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
              <AccordionItem value="item-6">
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
                    <h2>SOCIAL AFFILIATIONS</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg text-slate-600 text-justify">
                    <dl className="text-gray-900 divide-y divide-gray-200">
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Pandit Deendayal Upadhyay Bachat ewam Saakh Swavlambi
                          Sahkari Samiti Limited
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: President <br />
                          Period: 2012-2023
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          All Jharkhand Chess Association
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: President <br />
                          Period: 2013 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Jharkhand Wushu Association
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: President <br />
                          Period: 2023 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Public Policy For Indian People
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: President <br />
                          Period: 2021 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Chotanagpur Sarna Samiti
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Founder & Patron <br />
                          Period: 2022 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Akhil Bhartiya Baishya Sammelan, Jharkhand
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Patron <br />
                          Period: 2020 - present
                        </dd>
                      </div>
                      <div className="flex flex-col py-2">
                        <dt className="mb-1 font-semibold md:text-md">
                          Hindi Salahkar Samiti, Bharatiya Dak Vibhaag, Sanchar
                          Mantralaya, Government of India
                        </dt>
                        <dd className="text-sm text-gray-500">
                          Position: Member <br />
                          Period: 2022 - present
                        </dd>
                      </div>
                    </dl>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="my-4   shadow rounded-3xl">
          <h2 className="text-4xl bg-[#F3F0EB] md:text-6xl text-center mb-4 p-4 rounded-t-2xl text-orange-500">
            <span className={GreatVibes.className}>Through the years</span>
          </h2>
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Born On 24th Feb 1972, Calcutta
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on February 24th, 1972
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg"
                  src="/images/journey/1.jpg"
                />
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                In Loving Memory Of My Parents - Late Seth Ram Avatar Prasad and
                Bhagwanti Devi
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p class="text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg "
                  src="/images/journey/2.jpg"
                />
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                With Prime Minister Sri Narendra Modi In His First Tenure.
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg "
                  src="/images/journey/3.jpg"
                />
              </div>
            </li>
            <li class=" mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                With Rss Sangh Sanchalak Sri Mohan Bhagwat Ji.
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg "
                  src="/images/journey/4.jpg"
                />
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Congragulating Prime Minister Sri. Narendra Modi On His Second
                Tenure.
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg "
                  src="/images/journey/5.jpg"
                />
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Conducted State&apos;s First Ever Tribal Youth Parliament.
                <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300 ms-3">
                  Latest
                </span>
              </h3>
              {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                voluptates corrupti dolorum. Alias mollitia consectetur
                temporibus cumque numquam in excepturi!
              </p> */}
              <div className="flex items-center justify-center mr-6">
                <img
                  alt=""
                  className="max-h-[400px] shadow-lg "
                  src="/images/journey/6.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}

export default Home;
