"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDate } from '../../../src/utils/dateFormat';
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place';

const EventDetails = ({ params }) => {
    const [data, setData] = useState('');

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/GetById/${params.eventId}`);
                console.log(response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        getEventDetails();
    }, [params.eventId]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container pt-12 pb-4'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='font-semibold text-3xl'>{data.heading}</h1>
                <div className='flex flex-row gap-6 items-center'>
                    <span><span style={{ color: '#0A76F7' }}><PlaceIcon/></span><span>{data.location}</span></span>
                    <span>Date: {formatDate(data.startDate)}</span>
                </div>
                
            </div>
            <hr />
            <div className="image-container">
                <Image
                    src={data.imageUrl}
                    alt="Picture of the author"
                    className='no-schedule'
                    width={100}
                    height={100}
                />
            </div>
            <div className="short-desc">
                <p className='font-semibold text-xl'>{data.shortDescription}</p>
            </div>
        </div>
    )
}

export default EventDetails;