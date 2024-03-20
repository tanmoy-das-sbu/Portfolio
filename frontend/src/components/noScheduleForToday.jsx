"use client"
import React from 'react';
import Image from 'next/image'
import noContentImage from '../../src/assets/noschedulefortoday.jpg';
import './nav.css';

const NoScheduleForToday = () =>{
    return (
        <div className="container m-auto mb-2">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
                src={noContentImage}
                alt="Picture of the author"
                className='no-schedule'
            />
        </div>
    </div>
    )
}

export default NoScheduleForToday;