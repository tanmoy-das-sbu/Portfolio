"use client";
import React, { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import { RiFocus2Line } from "rocketicons/ri";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const Attheparliament = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-git-main-tanmoys-projects.vercel.app/attheparliament/GetAll"
        );
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-[180px]">
      <div className="my-4 shadow rounded-3xl">
        <h2 className="text-4xl md:text-6xl text-center mb-4 p-4 rounded-t-2xl text-orange-500">
          <span className={GreatVibes.className}>At the Parliament</span>
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {data.map((item, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.shortDescription}
              </time>
              <div className="flex items-center justify-center mr-6">
                <video  width="750" height="500" controls>
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Attheparliament;
