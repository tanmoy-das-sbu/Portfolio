"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import "./page.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import NoSchedule from './noschedule';
import NoScheduleForToday from './noScheduleForToday';

const SecondSection = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);
    const [tomorrowSchedule, setTomorrowSchedule] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        async function fetchScheduleToday() {
            try {
                const today = date;
                const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth returns 0-based index
const day = today.getDate().toString().padStart(2, '0');

                const todayFormatted = `${year}-${month}-${day}`;
                console.log(todayFormatted,`todayFormatted`)
                const todayResponse = await axios.get(`http://localhost:8000/schedule/date/${todayFormatted}`);
                console.log('Today Response:', todayResponse.data.tasks,todayFormatted);

                const todayTasks = todayResponse.data.tasks;
                setTodaySchedule(todayTasks);

                
               

            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        }

    async function fetchScheduleUpcoming()
    {
        try{
            const upcomingEvent = await axios.get(`http://localhost:8000/Schedule/UpcomingSchedules`);
            console.log("upcomingEvent:", upcomingEvent.data[`tasks`]);
            setUpcomingEvent(upcomingEvent.data[0].tasks)
               
                console.log(upcomingEvent.data)
        }catch(err){
          console.error('Error Fetching Schedule Tomorrow:',err.error.message)
        }
    }
        fetchScheduleToday();
        fetchScheduleUpcoming();
    }, [date]);


    return (
        <section style={{
            height: "max-content"
        }}>
            <div className='date-pic-div flex flex-row justify-end mt-2'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] justify-start text-left font-normal",
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
            <div className=" mt-12 md:mt-[50px] lg:mt-[0]">
                <div>
                    {todaySchedule.length === 0 ? (
                        <NoScheduleForToday />
                    ) : (
                        <div>
                            <div className=" container flex flex-row  m-auto pt-4 md:pt-16">
                                <h2 className="font-bold text-5xl md:text-7xl w-full text-center mb-5">Today's Schedule</h2>

                            </div>
                            <div className="container m-auto ">
                                <div className=" slider-container">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        centeredSlides={true}
                                        loop={true}
                                        rewind={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                            },
                                            480: {
                                                slidesPerView: 1,
                                            },
                                            600: {
                                                slidesPerView: 1,
                                            },
                                            750: {
                                                slidesPerView: 1,
                                            },
                                            900: {
                                                slidesPerView: 3,
                                            },
                                            1100: {
                                                slidesPerView: 3,
                                            },
                                            1330: {
                                                slidesPerView: 3,
                                            }
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        {todaySchedule.map((event, index) => (
                                            <SwiperSlide key={index} className='flex flex-col'>
                                                <div className='event-card rounded-xl w-full h-[400px] bg-white'>
                                                    <h3 className="text-base font-medium">{event.heading}</h3>
                                                    <p className="text-sm">{event.startTime} - {event.endTime}</p>
                                                    <p className="text-sm">{event.shortDescription}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {tomorrowSchedule.length === 0 ? (
                        <NoSchedule />
                    ) : (
                        <div>
                            <div className=" container flex flex-row  m-auto pt-4 md:pt-16">
                                <h2 className="font-bold text-5xl md:text-7xl w-full text-center mb-5">Tomorrow's Schedule</h2>
                            </div>
                            <div className="container m-auto ">
                                <div className=" slider-container">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        centeredSlides={true}
                                        loop={true}
                                        rewind={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                            },
                                            480: {
                                                slidesPerView: 1,
                                            },
                                            600: {
                                                slidesPerView: 1,
                                            },
                                            750: {
                                                slidesPerView: 1,
                                            },
                                            900: {
                                                slidesPerView: 3,
                                            },
                                            1100: {
                                                slidesPerView: 3,
                                            },
                                            1330: {
                                                slidesPerView: 3,
                                            }
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        {tomorrowSchedule.map((event, index) => (
                                            <SwiperSlide key={index} className='flex flex-col'>
                                                <div className='event-card rounded-xl w-full h-[400px] bg-white'>
                                                    <h3 className="text-base font-medium">{event.heading}</h3>
                                                    <p className="text-sm">{event.startTime} - {event.endTime}</p>
                                                    <p className="text-sm">{event.shortDescription}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>);
}

export default SecondSection;