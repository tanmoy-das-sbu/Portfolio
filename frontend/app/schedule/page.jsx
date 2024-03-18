

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
const data = [
    {
        "image": "/images/Elearning/top0.png"
    },
    {
        "image": "/images/Elearning/top1.png"
    },
    {
        "image": "/images/Elearning/top2.png"
    },
    {
        "image": "/images/Elearning/top0.png"
    },
    {
        "image": "/images/Elearning/top1.png"
    },
    {
        "image": "/images/Elearning/top2.png"
    }

]





const SecondSection = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);
    const [tomorrowSchedule, setTomorrowSchedule] = useState([]);


    useEffect(() => {
        async function fetchSchedule() {
            try {
                const today = new Date();
                const todayFormatted = today.toISOString().split('T')[0];

                const todayResponse = await axios.get(`http://localhost:8000/schedule/${todayFormatted}`);
                console.log('Today Response:', todayResponse.data);

                const todayTasks = todayResponse.data.tasks;
                setTodaySchedule(todayTasks);

                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);

                const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

                const tomorrowResponse = await axios.get(`http://localhost:8000/schedule/${tomorrowFormatted}`);
                console.log('Tomorrow Response:', tomorrowResponse.data);

                const tomorrowTasks = tomorrowResponse.data.tasks;
                setTomorrowSchedule(tomorrowTasks);

            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        }

        fetchSchedule();
    }, []);


    return (
        <section className=" mt-12 md:mt-[50px] lg:mt-[100px]" style={{
            height: "max-content"
        }}>
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
        </section>);
}

export default SecondSection;