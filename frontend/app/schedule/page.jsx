"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link"
import "./page.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import NoScheduleForToday from '../../src/components/component/noScheduleComponent/noScheduleForToday';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



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
        <div className="mt-[300px]">
            <div className='container  date-pic-div flex flex-row justify-center p-4'>
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
                        <div >
                            {flaghead ? <h2 className="headingTag font-bold text-2xl lg:text-5xl md:text-4xl sm:text-2xl w-full text-center mb-5">Today&apos;s Events</h2> : <h2 className="font-bold text-5xl md:text-4xl w-full text-center mb-5">{date?.toDateString()} Schedule</h2>}
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
                                        depth: 70,
                                        modifier: 2.5,
                                    }}
                                    // pagination={{ el: '.swiper-pagination', clickable: true, }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                        clickable: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                    className="swiper_container">
                                    {todaySchedule?.map((item, index) => (
                                        <SwiperSlide className='' key={index}>
                                            <div className='w-full flex items-center justify-center pt-8px '>
                                                <div className="max-w-sm rounded-xl overflow-hidden text-center w-full h-30rem" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", backgroundColor: "#f7f7f7" }}>
                                                    <img className="w-80 h-auto rounded-lg m-auto center" src="https://tse1.mm.bing.net/th?id=OIP.stuO9HtrREb2xPI9Tlu0LgHaHr&pid=Api&rs=1&c=1&qlt=95&w=119&h=124" alt="Sunset in the mountains" />
                                                    <div className="bg-slate-200 px-6 py-4">
                                                        {isCurrentDateWithinSchedule(item.startDate, item.endDate, item.startTime, item.endTime) ? <div style={{ display: "flex", gap: '10px', justifyContent: 'center' }}><span className="relative flex h-3 w-3">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                        </span><div style={{ marginTop: '-5px' }}>Live</div></div> : <div></div>}
                                                        <div className="font-bold text-2xl mb-2">{item.heading}</div>
                                                        <h4 className='font-bold text-lg mb-2'>Timing: {item.startTime} - {item.endTime}</h4>
                                                        <p className="text-gray-700  text-lg">
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
                                                                    <AlertDialogAction>
                                                                        <Link className="p-5 
                                                                        text-white" href={`/eventView/${item._id}`}> View More</Link>
                                                                    </AlertDialogAction>
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
                                        <Image src={leftArrow} className="h-10 w-10 shadow-2xl rounded-full" alt="arrow"/>
                                        </div>
                                        <div className="swiper-button-next slider-arrow">
                                        <Image src={rightArrow} className="h-10 w-10 shadow-2xl rounded-full" alt="arrow"/>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </Swiper>
                                {/* <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 "  >
                <div className=" text-center">
                    <h2 className="headingTag font-bold sm:text-2xl md:text-4xl xs:text-xl w-full text-center text-2xl mb-5">Ongoing Events</h2>
                </div>
                <CarouselContent>
                    {ongoing && ongoing.map((event, index) => {
                        const truncatedDescription = truncateDescription(event.shortDescription, 100);
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex aspect-square items-center justify-center p-2">
                                <>
                                    <div className="overflow-hidden rounded bg-white text-slate-500 w-80 shadow-md shadow-slate-200">
                                        <figure>
                                            <img
                                                src="https://cdn.cbeditz.com/cbeditz/large/bjp-background-with-logo-hd-images-download-6mepyki1vw.jpg"
                                                alt="card image"
                                                className="aspect-video w-full h-40"
                                            />
                                        </figure>
                                        <div className="p-6">
                                            <div className="flex items-center space-x-1 " style={{ margin: 'auto' }}>
                                                <Avatar>
                                                    <AvatarImage alt="" src="" />
                                                    <AvatarFallback>CH</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle>{event.heading}</CardTitle>
                                                </div>
                                            </div>
                                            <div className="p-1 mb-4">
                                                <p className="text-lg mt-1">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
                                                <p className="text-sm">
                                                    Start Time: {event.startTime}
                                                </p>
                                                <p className="text-sm">
                                                    End Time: {event.endTime}
                                                </p>
                                            </div>
                                            <p className="text-sm">
                                                {truncatedDescription}
                                            </p>
                                        </div>
                                        <div className="flex justify-end p-6 pt-0">
                                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-orange-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#d76527] focus:bg-[#f47731] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                                <AlertDialog>
                                                    <AlertDialogTrigger>Know More</AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>

                                                            <AlertDialogDescription>
                                                                <img onContextMenu={handleContextMenu} className="noselect" src="images/Team/k12Educators/Chandan_cv.jpg" alt="" />
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter className="flex flex-col items-center justify-center">
                                                            <div>
                                                                <h1 className="text-2xl font-semibold leading-none tracking-tight" >{event.heading}</h1>
                                                                <div className="p-2 mb-4">
                                                                    <p className="text-sm">
                                                                        Start Time: {event.startTime}
                                                                    </p>
                                                                    <p className="text-sm">
                                                                        End Time: {event.endTime}
                                                                    </p>
                                                                    <p className="text-sm">
                                                                        {event.shortDescription}

                                                                    </p>
                                                                </div>

                                                            </div>
                                                            <AlertDialogCancel>Close</AlertDialogCancel>
                                                            <AlertDialogAction>
                                                                <Link className="p-5  text-white" href={`/eventView/${event._id}`}> View More</Link>
                                                            </AlertDialogAction>

                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            </CarouselItem>)
                    })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <UpcomingSlider />
        </div>
    );
}

export default SecondSection;