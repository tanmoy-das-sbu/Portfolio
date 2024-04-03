"use client";

import Link from "next/link";
import pkv from "../public/images/pkv/pkv.png";

function Home() {
  //https://portfolio-xavu.vercel.app/schedule
  return (
    <main className="mt-[250px]">
      <div className="container  my-8 p-4 bg-white shadow rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <img
              alt=""
              className="w-48 h-48 rounded-full mx-auto shadow-lg"
              height="200"
              src="../public/images/pkv/pkv.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="mt-4 mb-2 text-xl font-semibold text-center">
              Dr. Pradip Varma
            </h2>
            <p className="text-sm text-center text-gray-600">Varma in 2023</p>
            <p className="text-sm font-semibold text-center">
              MEMBER OF PARLIAMENT RAJYA SABHA (JHARKHAND)
            </p>
            <div className="mt-4 p-2 border-t border-gray-200">
              <p className="text-sm font-semibold">
                BJP Jharkhand State General Secretary
              </p>
              <p className="text-sm font-semibold">
                Additionally headquarters -in-charge BJP Jharkhand
              </p>
              <p className="text-xs text-gray-600">Incumbent</p>
              <p className="text-xs text-gray-600">
                13 December 2020 - present
              </p>
              <p className="text-sm font-semibold">
                BJP Jharkhand State Vice President
              </p>
              <p className="text-xs text-gray-600">Incumbent</p>
              <p className="text-xs text-gray-600">Assumed office</p>
              <p className="text-xs text-gray-600">
                2 July 2016 – 11 December 2020
              </p>
            </div>
          </div>
          <div className="lg:w-3/4 lg:pl-8">
            <p className="text-justify">
              Dr. Pradip Varma (24 February 1972) is an Indian politician and
              academician and a member of the MEMBER OF PARLIAMENT RAJYA SABHA
              JHARKHAND from Bharatiya Janata Party. Varma serving as the State
              General Secretary BJP Jharkhand unit from 2020 onwards. Erstwhile
              he served as State Vice President BJP Jharkhand in 2016 and state
              minister BJP Jharkhand in 2013.Earlier he served as BJP
              membership-in-charge, Khijri division of Ranchi.
            </p>
            <p className="text-justify mt-4">
              Varma was the BJP&apos;s election in-charge for India&apos;s
              tribal state of Jharkhand, during the 2019 Lok Sabha elections.
              The BJP and its Coalition partner NDA won 12 out of 14 seats. As a
              result, Varma rose to state prominence and was appointed as the
              Party&apos;s State General Secretary in 2019. He has played an
              organising and membership-promotional role in the elections of
              many states since 2019. In his initial two years, the BJP achieved
              success in state legislative assembly in Jharkhand where it won
              the Dhanbad , Nirsa , Baghmara and Sindri but lost ground in
              Jharia and tundi in 2019.Pradip Varma is also a 2nd year trained
              Swayamsevak from (RSS) Rashtriya Swayamsevak Sangh and also served
              as a Joint secretary in Seva Bharti (Prantiya toli ) at zonal
              level.
            </p>
            <p className="text-justify mt-4">
              Varma was born on 24th February 1972 in Kolkata capital city of
              West Bengal into a Hindu Vaishya family but he is ancestral native
              of tehsil Barwadih in Latehar district of Jharkhand. Varma started
              his primary education at Subhas Vidya Mandir Muraripukur Kolkata.
              Later on for further studies he shifted to Sarvodaya School
              Muchipara in kolkata. From childhood he was interested in playing
              chess at the age of 12 and was a state level chess player.Varma
              also played cricket for the team Mohan Bagan at the age of 15.
            </p>
            <p className="text-justify mt-4">
              He has done his intermediate in commerce stream in 1988 and
              undergraduate degree in commerce, B.Com from Seth Anand Ram
              Jaipuriya college of Calcutta University in 1991.He passed his
              executive MBA from Vinayaka Mission, and master’s degree of M.A
              (Hindi) from the same. Later he has done his completed his
              doctorate Phd. in Hindi language and literature. . His scholarly
              work has been on the topic of Ramcharitmanas : “Parivar aur Samaj
              prabadhan ke sutra” .He has also written blog on the several
              biographies on freedom fighters like Birsa Munda , Pt. Deen Dayal
              Upadhyaay and topics of national importance like Hul Andolan,
              Vande matram etc. Apart from Hindi language, Varma is a polyglot
              person having full proficiency of English, Awadhi, Bangla
              ,Bhojpuri and 4 tribal languages of Jharkhand namely ,Nagpuri
              ,Mundari, Santhali ,and Kurmali.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
