"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDate } from '../../../src/utils/dateFormat';
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place';
import Loading from '@/components/component/loader/loading';
import { useToast } from "@/components/ui/use-toast"

const EventDetails = ({ params }) => {
    const [data, setData] = useState('');
    const { toast } = useToast();

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/GetById/${params.eventId}`);
                setData(response.data.data);
            } catch (error) {
                toast({
                    variant: "error",
                    title: error,
                });
            }
        };

        getEventDetails();
    }, [params.eventId]);

    if (!data) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    const isImageFromAllowedDomain = data.imageUrl.startsWith('https://res.cloudinary.com/neeleshks/image/upload');

    return (
        <div className='container mt-[250px] pt-12 pb-4'>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    {data.heading}
                </h1>
                <div className="flex flex-row gap-6 items-center text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>
                        <span style={{ color: '#0A76F7' }}><PlaceIcon /></span><span>{data.location}</span>
                    </span>
                    <span>|</span>
                    <span>Date: {formatDate(data.startDate)}</span>
                </div>
            </div>

            <hr />
            <br />

            <div className="image-container">
                {isImageFromAllowedDomain && (
                    <div className="image-container">
                        <Image
                            src={data.imageUrl}
                            alt="Picture of the author"
                            className='no-schedule'
                            width={1500}
                            height={500}
                            draggable='false'
                        />
                    </div>
                )}
            </div>
            <br />
            <div className="short-desc">
                <p className='font-semibold text-xl'>{data.shortDescription}</p>
            </div>
        </div>
    )
}

export default EventDetails;