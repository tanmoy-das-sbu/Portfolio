"use client";
import React, { useEffect, useState, useRef } from "react";
import { Great_Vibes } from "next/font/google";
import { RiFocus2Line } from "rocketicons/ri";
import Loading from "@/components/component/loader/loading"; // Import the Loading component

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(year, month - 1, day);
};

const Attheparliament = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-git-main-tanmoys-projects.vercel.app/attheparliament/GetAll"
        );
        const result = await response.json();
        const sortedData = result.data.sort((a, b) => parseDate(a.shortDescription) - parseDate(b.shortDescription));
        setData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-[180px]">
      <div className="my-4 shadow rounded-3xl">
        <h2 className="text-4xl md:text-6xl text-center mb-4 p-4 rounded-t-2xl text-orange-500">
          <span className={GreatVibes.className}>Highlights from the Rajya Sabha</span>
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {data.map((item, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-600">
                <RiFocus2Line className="icon-orange" />
              </span>
              <div className="flex flex-wrap md:gap-5 gap-2 mb-5">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              {item.videoTag && <span class="bg-[#FFEDD5] text-[#F47621] md:text-md text-sm font-medium me-2 md:px-4 px-2 md:py-1 py-0.5 rounded-md ">{item.videoTag}</span>}
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {parseDate(item.shortDescription).toLocaleDateString()}
              </time>
              <div className="flex items-center justify-center mr-6">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  width="750"
                  height="500"
                  controls
                  onPlay={() => handlePlay(index)}
                >
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

