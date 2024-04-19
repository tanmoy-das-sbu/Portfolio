'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
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
import {
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"

const CarouselComponent = (props) => {

    const [upcomingEvent, setupcomingEvent] = useState();

    useEffect(() => {
        setupcomingEvent(props.value)
    }, [props])

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.slice(0, maxLength) + " ...";
        }
    };

    return (

        <Carousel className="container relative z-20 noselect m-auto w-4/5 p-2 md:p-10"  >
            <div className="text-center">
                <h2 className="headingTag font-bold text-2xl sm:text-2xl md:text-4xl text-center mb-5">
                    {props.event}
                </h2>
            </div>
            <CarouselContent>
                {upcomingEvent && upcomingEvent.map((event, index) => {
                    const truncatedDescription = truncateDescription(event.shortDescription, 100);
                    return (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex aspect-square items-center justify-center p-2">
                            <>
                                <div className="overflow-hidden rounded bg-white text-slate-500 w-80 shadow-md shadow-slate-200">
                                    <figure>
                                        {event.imageUrl !== "" ? (
                                            <img
                                                src={event.imageUrl}
                                                alt="card image"
                                                className="aspect-video w-full h-40"
                                            />
                                        ) : (
                                            <img
                                                src="https://cdn.cbeditz.com/cbeditz/large/bjp-background-with-logo-hd-images-download-6mepyki1vw.jpg"
                                                alt="card image"
                                                className="aspect-video w-full h-40"
                                            />
                                        )}
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
                                        <div className="p-1 mb-4 h-32">
                                            <p className="text-lg mt-1">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
                                            <p className="text-sm">
                                                Start Time: {event.startTime}
                                            </p>
                                            <p className="text-sm">
                                                End Time: {event.endTime}
                                            </p>
                                            <p className="text-sm">
                                                {truncatedDescription}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end p-6 pt-0">
                                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-orange-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#d76527] focus:bg-[#f47731] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                            <AlertDialog>
                                                <AlertDialogTrigger>Know More</AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogDescription>
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
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter >
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
            <CarouselPrevious className="invisible md:visible" />
            <CarouselNext className="invisible md:visible" />
        </Carousel>
    )
}

export default CarouselComponent;