"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import "./page.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import NoScheduleForToday from '../../src/components/noScheduleForToday';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from '../../src/assets/images/img_1.jpg';
import slide_image_4 from '../../src/assets/images/img_4.jpg';
import UpcomingSlider from './UpcomingSlider/UpcomingSlider';

const SecondSection = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);
    const [tomorrowSchedule, setTomorrowSchedule] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);
    const [flag, setFlag] = useState(false);
    const [flaghead, setFlaghead] = useState(false)
    const [date, setDate] = useState(new Date())
    const setback = {
        border: `1px solid red`,
        backgroundImage: "url(" + { slide_image_1 } + ")"
    }
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
                const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth returns 0-based index
                const day = today.getDate().toString().padStart(2, '0');

                const todayFormatted = `${year}-${month}-${day}`;
                const todayResponse = await axios.get(`http://localhost:8000/schedule/date/${todayFormatted}`);
                setFlag(true)
                const todayTasks = todayResponse.data.tasks;
                setTodaySchedule(todayTasks);
                while(todayTasks.length < 10){
                    let tempArr = todaySchedule.concat(todaySchedule)
                    console.log("here10times",todaySchedule,tempArr);
                    break;
                }
            } catch (error) {
                setFlag(false)
            }
        }

        async function fetchScheduleUpcoming() {
            try {
                const upcomingEvent = await axios.get(`http://localhost:8000/Schedule/UpcomingSchedules`);
                setUpcomingEvent(upcomingEvent.data[0].tasks)
            } catch (err) {
                console.error('Error Fetching Schedule Tomorrow:', err.error.message)
            }
        }
        fetchScheduleToday();
        fetchScheduleUpcoming();
    }, [date]);

    
    return (
        <>
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
            <div >
                <div>
                    {!flag ? (
                        <NoScheduleForToday />
                    ) : (<div>
                        <div className=" container  m-auto pt-4 md:pt-8">
                            {flaghead ? <h2 className="headingTag font-bold text-5xl md:text-4xl w-full text-center mb-5">Today's Schedule</h2> : <h2 className="font-bold text-5xl md:text-4xl w-full text-center mb-5">{date?.toDateString()} Schedule</h2>}
                            <div className="container">
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={'auto'}
                                    autoplay={{
                                        delay: 10000,
                                        disableOnInteraction: false
                                    }}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2.5,
                                    }}
                                    pagination={{ el: '.swiper-pagination', clickable: true }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                        clickable: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                    className="swiper_container"
                                >
                                    {todaySchedule.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div>
                                                <Image src={slide_image_4} alt="slide_image" />
                                                <h4 className='dateheading'>Date:{item.startTime}{index}</h4>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    <div className="slider-controler">
                                        <div className="swiper-button-prev slider-arrow">
                                            <ion-icon name="arrow-back-outline"></ion-icon>
                                        </div>
                                        <div className="swiper-button-next slider-arrow">
                                            <ion-icon name="arrow-forward-outline"></ion-icon>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <UpcomingSlider data={upcomingEvent}/>
        </>
    );
}

export default SecondSection;