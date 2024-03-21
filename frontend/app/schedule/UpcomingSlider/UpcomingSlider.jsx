'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Sacramento } from 'next/font/google';
import { useEffect, useState } from "react"
import axios from "axios"


const sac = Sacramento({
    subsets: ['latin'],
    variable: '--font-sacramento',
    weight: ['400']
})


const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    } else {
        return description.slice(0, maxLength) + " ...";
    }
};


const UpcomingSlider = ({data}) => {
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

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <section className="bg-[#FFF8DD]" >
            <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 md:p-10"  >
                <div className="text-6xl text-center"><div className={sac.className}>Today's Schedule</div></div>
                <CarouselContent>
                    {todaySchedule && todaySchedule.map((event, index) => {
                        const truncatedDescription = truncateDescription(event.shortDescription, 100);
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Card className="w-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <Avatar>
                                                    <AvatarImage alt="Chandan-pic" src="images/Educators/image1.png" />
                                                    <AvatarFallback>CH</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle>{event.heading}</CardTitle>

                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <div className="p-2 mb-4">
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
                                        </CardContent>
                                        <CardFooter className="flex justify-center items-center">

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

                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </CardFooter>
                                    </Card>
                                </CardContent>

                            </CarouselItem>)
                    })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 md:p-10"  >
                <div className="text-6xl text-center"><div className={sac.className}>Upcoming Schedule</div></div>
                <CarouselContent>
                    {data && data.map((event, index) => {
                        const truncatedDescription = truncateDescription(event.shortDescription, 100);
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Card className="w-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <Avatar>
                                                    <AvatarImage alt="Chandan-pic" src="images/Educators/image1.png" />
                                                    <AvatarFallback>CH</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle>{event.heading}</CardTitle>

                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <div className="p-2 mb-4">
                                                <p className="text-sm">
                                                    Start Time: {event.startTime}
                                                </p>
                                                <p className="text-sm">
                                                    End Time: {event.endTime}
                                                </p>
                                            </div>
                                            <p className="text-sm">
                                                {event.shortDescription}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex justify-center items-center">

                                            <AlertDialog>
                                                <AlertDialogTrigger>Know More</AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>

                                                        <AlertDialogDescription>
                                                            <img onContextMenu={handleContextMenu} className="noselect" src="images/Team/k12Educators/Chandan_cv.jpg" alt="" />
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Close</AlertDialogCancel>

                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </CardFooter>
                                    </Card>
                                </CardContent>

                            </CarouselItem>)
                    })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}

export default UpcomingSlider;