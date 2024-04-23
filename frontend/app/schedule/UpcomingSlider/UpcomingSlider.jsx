'use client'
import { Sacramento } from 'next/font/google';
import { useEffect, useState } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import CarouselComponent from "./CarouselComponent"

const sac = Sacramento({
    subsets: ['latin'],
    variable: '--font-sacramento',
    weight: ['400']
})

const UpcomingSlider = () => {
    const [ongoing, setOngoing] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);
    const { toast } = useToast();

    useEffect(() => {
        async function fetchScheduleUpcoming() {
            try {
                const upcomingEvent = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/schedule/UpcomingSchedules`);
                const upComing = upcomingEvent.data;
                if (upComing) {
                    const visibleArr = upComing.filter((item) => item.visibility === true);
                    const upcomingEventArr = visibleArr.filter((item) => item.scheduleVisibility === false);
                    setUpcomingEvent([...upcomingEventArr]);
                }
                const ongoingevent = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/schedule/OnGoingEvent`);
                setOngoing(ongoingevent.data[`ongoingEvents`]);
            } catch (err) {
                if (err.error && err.error.message) {
                    toast({
                        variant: "error",
                        title: err.error.message,
                    });
                } else {
                    toast({
                        variant: "error",
                        title: err.message,
                    });
                }
            }
        }

        fetchScheduleUpcoming();
    }, []);

    return (
        <section className="bg-[#FFFFFF]" >
            <hr />
            <CarouselComponent value={ongoing} event={"Ongoing Events"} />
            <hr />
            <CarouselComponent value={upcomingEvent} event={"Upcoming Events"} />
        </section>
    );
}

export default UpcomingSlider;