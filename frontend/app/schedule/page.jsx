"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import "./page.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Nav from './nav';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from '../../src/assets/images/img_1.jpg';
import slide_image_2 from '../../src/assets/images/img_2.jpg';
import slide_image_3 from '../../src/assets/images/img_3.jpg';
import slide_image_4 from '../../src/assets/images/img_4.jpg';
import slide_image_5 from '../../src/assets/images/img_5.jpg';
import slide_image_6 from '../../src/assets/images/img_6.jpg';
import slide_image_7 from '../../src/assets/images/img_7.jpg';

const SecondSection = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);
    const [tomorrowSchedule, setTomorrowSchedule] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);

    useEffect(() => {
        async function fetchSchedule() {
            try {
                const today = new Date();
                const todayFormatted = today.toISOString().split('T')[0];

                const todayResponse = await axios.get(`http://localhost:8000/schedule/date/${todayFormatted}`);
                console.log('Today Response:', todayResponse.data.tasks);

                const todayTasks = todayResponse.data.tasks;
                setTodaySchedule(todayTasks);

                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);

                const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

                const tomorrowResponse = await axios.get(`http://localhost:8000/schedule/date/${tomorrowFormatted}`);
                console.log('Tomorrow Response:', tomorrowResponse.data);

                const tomorrowTasks = tomorrowResponse.data.tasks;
                setTomorrowSchedule(tomorrowTasks);

                const upcomingEvent = await axios.get(`http://localhost:8000/Schedule/UpcomingSchedules`);
                console.log("upcomingEvent:", upcomingEvent.data);
                setUpcomingEvent(upcomingEvent.data)

            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        }

        fetchSchedule();
    }, []);


    return (
        <>
            <Nav></Nav>

            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
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
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <div>
                            <Image src={slide_image_4} alt="slide_image" />
                            <h4 className='dateheading'>Date:{"24/03/2024"}</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_2} alt="slide_image" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_6} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={slide_image_7} alt="slide_image" />
                    </SwiperSlide>

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
        </>
        );
}

export default SecondSection;