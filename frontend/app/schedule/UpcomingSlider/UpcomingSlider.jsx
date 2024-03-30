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


const UpcomingSlider = ({ data }) => {
    const [ongoing, setOngoing] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);

    useEffect(() => {
        async function fetchScheduleUpcoming() {
            try {
                const upcomingEvent = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/UpcomingSchedules`);
                console.log("upcomingEvent:", upcomingEvent.data[`tasks`], upcomingEvent.data);
                setUpcomingEvent(upcomingEvent.data)

                const ongoingevent = await axios.get('https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/OnGoingEvent');
                console.log("Ongoing Event:", ongoingevent);
                setOngoing(ongoingevent.data[`ongoingEvents`]);
            } catch (err) {
                if (err.error && err.error.message) {
                    console.error('Error Fetching Schedule Tomorrow:', err.error.message);
                } else {
                    console.error('Error Fetching Schedule Tomorrow:', err.message);
                }
            }

        }

        fetchScheduleUpcoming();
    }, []);

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <section className="bg-[#FFFFE0]" >
            <hr />
            <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 md:p-10"  >
                <div className="text-6xl text-center">
                    <h2 className="headingTag font-bold text-6xl md:text-4xl w-full text-center mb-5">Ongoing Events</h2>
                </div>
                <CarouselContent>
                    {ongoing && ongoing.map((event, index) => {
                        const truncatedDescription = truncateDescription(event.shortDescription, 100);
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <CardContent className="flex aspect-square items-center justify-center p-1">
                                    <Card className="w-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <div className="flex items-center space-x-2" style={{ margin: 'auto' }}>
                                                <Avatar>
                                                    <AvatarImage alt="" src="" />
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
                                                        <AlertDialogAction>
                                                            <Link className="p-5 bg-red-500 text-white" href={`/eventView/${event._id}`}> View More</Link>
                                                        </AlertDialogAction>

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
            <hr />
            <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 md:p-10"  >
                <div className="text-6xl text-center">
                    <h2 className="headingTag font-bold text-6xl md:text-4xl w-full text-center mb-5">Upcoming Events</h2>
                </div>
                <CarouselContent>
                    {upcomingEvent && upcomingEvent.map((event, index) => {
                        const truncatedDescription = truncateDescription(event.shortDescription, 100);
                        return (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <CardContent className="flex aspect-square items-center justify-center p-2">
                                    <Card className="w-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <div className="flex items-center space-x-1 " style={{ margin: 'auto' }}>
                                                <Avatar>
                                                    <AvatarImage alt="" src="" />
                                                    <AvatarFallback>CH</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle>{event.heading}</CardTitle>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <div className="p-1 mb-4">
                                                <p className="text-lg mt-1">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.startDate).toLocaleDateString()}</p>
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
                                                        <AlertDialogAction>
                                                            <Link className="p-5 bg-red-500 text-white" href={`/eventView/${event._id}`}> View More</Link>
                                                        </AlertDialogAction>
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