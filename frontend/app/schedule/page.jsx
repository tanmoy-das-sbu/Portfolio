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
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import NoScheduleForToday from '../../src/components/noScheduleForToday';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from '../../src/assets/images/img_1.jpg';
import slide_image_4 from '../../src/assets/images/img_4.jpg';
import UpcomingSlider from './UpcomingSlider/UpcomingSlider';
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
    const handleContextMenu = (event) => {
        event.preventDefault();
    };
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
                console.log(todayFormatted, `todayFormatted`)
                // const todayResponse = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/date/${todayFormatted}`);
                const todayResponse = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/date/${todayFormatted}`);
                setFlag(true)
                console.log('Today Response:', todayResponse, todayFormatted);
                if (todayResponse.status == 204 || todayResponse.data.length == 0) {
                    setFlag(false)
                }
                const todayTasks = todayResponse.data;
                setTodaySchedule([...todayTasks]);
                // while(todayTasks.length < 10){
                //     let tempArr = todaySchedule.concat(todaySchedule)
                //     console.log("here10times",todaySchedule,tempArr);
                //     break;
                // }
            } catch (error) {
                setFlag(false)
            }
        }
        fetchScheduleToday();
    }, [date]);


    return (
        <>
            <div className='container m-auto date-pic-div flex flex-row justify-center mt-2'>
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
            <div >
                <div>
                    {!flag ? (
                        <NoScheduleForToday />
                    ) : (<div>
                        <div className=" container  m-auto pt-4 md:pt-8">
                            {flaghead ? <h2 className="headingTag font-bold text-6xl md:text-4xl w-full text-center mb-5">Todays Schedule</h2> : <h2 className="font-bold text-5xl md:text-4xl w-full text-center mb-5">{date?.toDateString()} Schedule</h2>}
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
                                        depth: 80,
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
                                    {todaySchedule?.map((item, index) => (
                                        <SwiperSlide className='' key={index}>


                                            <div className='w-full flex items-center justify-center'>
                                            <div className="max-w-sm rounded-xl overflow-hidden text-center w-full" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                                                <img className="w-full" src="https://tse1.mm.bing.net/th?id=OIP.stuO9HtrREb2xPI9Tlu0LgHaHr&pid=Api&rs=1&c=1&qlt=95&w=119&h=124" alt="Sunset in the mountains" />
                                                <div className="bg-slate-200 px-6 py-4">
                                                    <div className="font-bold text-2xl mb-2">{item.heading}</div>
                                                    <h4 className='font-bold text-lg mb-2'>Timing: {item.startTime} - {item.endTime}</h4>
                                                    <p className="text-gray-700 text-base text-lg">
                                                        {item.shortDescription}</p>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger className='text-sm tracking-tighter'>Know More</AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>

                                                                <AlertDialogDescription>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum quae harum illum! Quae natus minima, inventore, ab voluptatum ea praesentium sit fugit mollitia voluptates corporis expedita facilis nobis facere!
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Close</AlertDialogCancel>

                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </div>
                                            </div>
                                            </div>


                                        </SwiperSlide>
                                    ))}
                                    <div className="slider-controler">
                                        <div className="swiper-button-prev slider-arrow">
                                        <img className='w-fit' src="/images/left.svg"></img>
                                        </div>
                                        <div className="swiper-button-next slider-arrow">
                                        <img className='w-fit' src="/images/right.svg"></img>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <UpcomingSlider />
        </>
    );
}

export default SecondSection;


{/* <Image src={slide_image_4} alt="slide_image" />
                                            <div className='dateheading'>
                                                   <div style={{height:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                                    <h3 className='font-bold text-2xl md:text-4xl w-full text-center mb-5'>{item.heading}</h3>
                                                    <h3>Timing: {item.startTime} - {item.endTime}</h3>
                                                    </div>
                                                    <div className='discriptioin'>
                                                    <h5>{item.shortDescription}</h5>
                                                    </div>

                                                </div> */}

{/* <h4 className='dateheading'>Date:{item.startTime}{index}</h4> */ }