"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link"
import "./page.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NoScheduleForToday from "../../src/components/component/noScheduleComponent/noScheduleForToday";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UpcomingSlider from "./UpcomingSlider/UpcomingSlider";
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
} from "@/components/ui/alert-dialog";
import Loading from '@/components/component/loader/loading';
import leftArrow from "../../public/images/sliderArrows/left.svg";
import rightArrow from "../../public/images/sliderArrows/right.svg";

const SecondSection = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);

    const [flag, setFlag] = useState(false);
    const [load, setLoad] = useState(false);
    const [flaghead, setFlaghead] = useState(false)
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        async function fetchScheduleToday() {
            try {
                const today = date;
                if (date.getMonth() + 1 == new Date().getMonth() + 1 && date.getFullYear() == new Date().getFullYear() && date.getDate() == new Date().getDate()) {
                    setFlaghead(true)
                } else {
                    setFlaghead(false)
                }
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
                const day = today.getDate().toString().padStart(2, '0');

                const todayFormatted = `${year}-${month}-${day}`;
                //console.log(todayFormatted, `todayFormatted`)
                // const todayResponse = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/date/${todayFormatted}`);
                const todayResponse = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/date/${todayFormatted}`);
                if (todayResponse) {
                    setLoad(true);
                }
                else {
                    setLoad(false);
                }
                setFlag(true)
                //console.log('Today Response:', todayResponse, todayFormatted);
                if (todayResponse.status == 204 || todayResponse.data.length == 0) {
                    setFlag(false)
                }
                const todayTasks = todayResponse.data;
                setTodaySchedule([...todayTasks]);
        
            } catch (error) {
                setFlag(false)
            }
        }
        fetchScheduleToday();
    }, [date]);

    function isCurrentDateWithinSchedule(startDate, endDate, startTime, endTime) {
        // Convert start date/time and end date/time to JavaScript Date objects
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        // Get the current date/time
        let currentDate = new Date();
        let startTimeParts = startTime.split(':');
        let endTimeParts = endTime.split(':');
        let startHours = parseInt(startTimeParts[0], 10);
        let startMinutes = parseInt(startTimeParts[1], 10);
        let endHours = parseInt(endTimeParts[0], 10);
        let endMinutes = parseInt(endTimeParts[1], 10);
        let currentHours = currentDate.getHours();
        let currentMinutes = currentDate.getMinutes();

        // console.log(currentDate,startDateObj,endDateObj.getHours(),'mmm',currentDate>= startDateObj && currentDate <= endDateObj)
        if (currentDate >= startDateObj && currentDate <= endDateObj || currentDate.getDate() == endDateObj.getDate()) {
            // If the current date is within the range, check if the current time is within the range of start time and end time

            if (startTime.includes("PM") && endTime.includes('PM')) {

                startHours = startHours + 12;

                endHours = endHours + 12;

                //console.log(startHours, endHours, currentMinutes, startMinutes)
                if (
                    (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                    (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes))
                ) {
                    return true; // Current date and time are within the schedule
                }


            } else if (endTime.includes("PM") && startTime.includes('AM')) {
                endHours = endHours + 12;
                console.log(startHours, endHours, currentMinutes, startMinutes)
                if (
                    (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                    (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes))
                ) {
                    return true; // Current date and time are within the schedule
                }
            } else if (endTime.includes("AM") && startTime.includes('PM')) {

                startHours = startHours + 12;

                console.log(startHours, endHours, currentMinutes, startMinutes, (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                    (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes)))
                if (
                    (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                    (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes))
                ) {
                    return true; // Current date and time are within the schedule
                }
            } else {

                // console.log(startHours, endHours, currentMinutes, startMinutes, (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                //     (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes)))
                if (
                    (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
                    (currentHours < endHours || (currentHours === endHours && currentMinutes <= endMinutes))
                ) {
                    return true; 
                }
            }
        }

        return false; // Current date and time are not within the schedule

    }

    if (!load) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

  return (
    <div className="mt-[250px]">
      <div className="container  date-pic-div flex flex-row justify-center pt-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-fit justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <div>
          {!flag ? (
            <NoScheduleForToday />
          ) : (
            <div>
              <div className=" container  m-auto pt-4 md:pt-12">
                {flaghead ? (
                  <h2 className="headingTag font-bold sm:text-2xl md:text-4xl xs:text-xl w-full text-center text-2xl mb-5">
                    Today&apos;s Events
                  </h2>
                ) : (
                  <h2 className="headingTag font-bold sm:text-2xl md:text-4xl xs:text-xl w-full text-center text-2xl mb-5">
                    {date?.toDateString()} Schedule
                  </h2>
                )}

                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 80,
                    modifier: 2.5,
                  }}
                  pagination={{  clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  modules={[
                    EffectCoverflow,
                    Pagination,
                    Navigation,
                    Autoplay,
                  ]}
                >
                  {todaySchedule?.map((item, index) => (
                    <SwiperSlide className="" key={index} >
                        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                          <figure className="flex-1">
                            <img
                              src={item.imageUrl}
                              alt="card image"
                              className="heroImg"
                            />
                          </figure>
                          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                            <header className="flex gap-4 mb-4">
                              <a
                                href="#"
                                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                              >
                                <img
                                  src="https://i.pravatar.cc/48?img=24"
                                  alt="user name"
                                  title="user name"
                                  width="48"
                                  height="48"
                                  className="max-w-full rounded-full"
                                />
                              </a>
                              <div>
                                <h3 className="text-xl font-medium text-slate-700">
                                {item.heading}
                                </h3>
                                <p className="text-sm text-slate-400">Timing: {item.startTime} - {item.endTime}</p>
                              </div>
                              {isCurrentDateWithinSchedule(
                                item.startDate,
                                item.endDate,
                                item.startTime,
                                item.endTime
                              ) ? (
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                  </span>
                                  <div style={{ marginTop: "-5px" }}>Live</div>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </header>
                            <p>
                              <b>{item.shortDescription}</b><br/>
                              After a walk through history, there is nothing left to do but admire
                              the hypnotizing landscapes that exist in every direction. From vast
                              deserts to rainbow mountains, and everything in between.
                            </p>
                            <AlertDialog>
                                <AlertDialogTrigger className="text-sm tracking-tighter">
                                  Know More
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogDescription>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Voluptatum earum quae
                                      harum illum! Quae natus minima, inventore,
                                      ab voluptatum ea praesentium sit fugit
                                      mollitia voluptates corporis expedita
                                      facilis nobis facere!
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Close</AlertDialogCancel>
                                    <AlertDialogAction>
                                      <Link
                                        className="p-5  text-white"
                                        href={`/eventView/${item._id}`}
                                      >
                                        {" "}
                                        View More
                                      </Link>
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                          </div>
                        </div>
                      
                    </SwiperSlide>
                  ))}
                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      {/* <img className="w-fit" src="/left.svg"></img> */}
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      {/* <img className="w-fit" src="/images/right.svg"></img> */}
                    </div>

                  </div>
                </Swiper>

              </div>
            </div>
          )}
        </div>
      </div>

      <UpcomingSlider />
    </div>
    );
}

export default SecondSection;