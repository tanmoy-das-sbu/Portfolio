"use client";

import "./page.css";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import axios from 'axios';
import Image from "next/image";
import Modal from "./popup";
import Loading from "@/components/component/loader/loading";
import { useToast } from "@/components/ui/use-toast"
import InternalServerError from "@/components/InternalServerError/page";

const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [data, setData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [internalError, setInternalError] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        const getAllImage = async () => {
            try {
                const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/GetAll`);
                if (response) {
                    setLoad(true);
                }
                else {
                    setLoad(false);
                }
                const filteredResponse = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setData(filteredResponse);
            } catch (error) {
                toast({
                    variant: "error",
                    title: error.message,
                });
                setInternalError(true);
            }
        };

        getAllImage();
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!load) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    if(internalError){
        return (
            <div>
                <InternalServerError/>
            </div>
        )
    }

    return (
        <div className='mt-[150px] pt-12 pb-4 container swipper-div'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    'borderRadius': '25px',
                    'background': '#1F2937'
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mb-2 cursor-pointer h-[60vh]"
            >
                {data.map((image, index) => (
                    <SwiperSlide key={index} onClick={() => openModal(image)}>
                        <Image src={image.imageUrl} alt={image.altText} width={1280} height={720} className="first-swipper-img object-contain h-[60vh]" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-2 h-[250px] w-full swipper-second-div"
                style={{
                    'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    'borderRadius': '25px',
                }}
            >
                {data.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image.imageUrl} alt={image.altText} width={1280} height={720} className="second-swipper-img" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {modalOpen && <Modal image={selectedImage} onClose={closeModal} />}
        </div>
    )
}

export default Gallery;