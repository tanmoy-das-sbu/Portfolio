'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import axios from 'axios';
import { formatDate } from "@/utils/dateFormat"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Loading from "@/components/component/loader/loading"
import { useToast } from "@/components/ui/use-toast"
import Forbidden from "@/components/component/Forbidden/page"
import Logout from "@/components/component/Logout/page"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation'

const Adminpanel = () => {
    const [todaySchedule, setTodaySchedule] = useState([]);
    const [date, setDate] = useState(new Date());
    const [load, setLoad] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allEvents, setAllEvents] = useState([]);
    const { toast } = useToast();
    const [token, setToken] = useState('');
    const [forbidden, setForbidden] = useState(false);
    const nav = useRouter();

    useEffect(() => {
        fetchAllEvents();
    }, [date]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setForbidden(false);
        } else {
            setToken(token);
            setForbidden(true);
        }
    }, []);

    useEffect(() => {
        async function fetchScheduleToday() {
            try {
                const today = date;
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const day = today.getDate().toString().padStart(2, '0');

                const todayFormatted = `${year}-${month}-${day}`;
                const todayResponse = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/date/${todayFormatted}`);
                if (todayResponse) {
                    setLoad(true);
                } else {
                    setLoad(false);
                }

                const todayTasks = todayResponse.data;
                setTodaySchedule([...todayTasks]);

            } catch (error) {
                toast({
                    variant: "error",
                    title: error,
                });
            }
        }
        fetchScheduleToday();
    }, [date]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/deleteById/${eventId}`);
            const updatedSchedule = todaySchedule.filter(event => event._id !== eventId);
            setTodaySchedule(updatedSchedule);
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        }
    };

    const fetchAllEvents = async () => {
        try {
            const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/GetAll`);
            setAllEvents(response.data.data);
        } catch (error) {
            if (error.response.status === 403) {
                setForbidden(false);
                localStorage.clear();
                toast({
                    variant: "error",
                    title: error.message,
                    action: <ToastAction altText="Login again" onClick={() => nav.push('/login')}>Login again</ToastAction>,
                });
            } else {
                toast({
                    variant: "error",
                    title: error.message,
                });
            }
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEvents = allEvents.filter(event => event.heading.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!load) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    if (!forbidden) {
        return (
            <div>
                <Forbidden />
            </div>
        );
    }

    return (
        <div className="flex mt-[170px] flex-col">
            <div className="w-full flex items-center justify-end pr-[2em]">
                <Logout />
            </div>
            <header
                className=" border-b bg-gray-100/40 ">
                <div className="flex items-center justify-center gap-2">
                    <CalendarIcon className="h-6 w-6 py-8" />
                    <h1 className="font-semibold text-lg md:text-2xl text-blue-500">Events</h1> <span>|</span> <span><h1 className="font-semibold text-lg md:text-2xl cursor-pointer" onClick={() => nav.push('/adminpanel/gallery/galleryList')}>Gallery</h1></span>
                </div>
            </header>
            <main className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">

                <div className="container flex flex-col justify-between lg:flex-row lg:h-[60px] items-center gap-4 px-6 dark:bg-gray-800/40 w-full">
                    <Link className="lg:hidden" href="#">
                        <CalendarIcon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full lg:w-auto">
                        <form>
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    className="bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                    placeholder="Search events..."
                                    type="search"
                                    onChange={handleSearchInputChange}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-between items-center w-full lg:w-2/4">
                        <div className="container m-auto date-pic-div flex flex-row justify-center mt-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-fit justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={handleDateChange}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href="/addevent">
                                        <Button className="ml-4 bg-violet-500 text-white">
                                            Add Event
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add Event</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                {searchQuery && (
                    <div className="rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">SrNo.</TableHead>
                                    <TableHead className="w-[200px]">Event</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead className="hidden md:table-cell">Start/End</TableHead>
                                    <TableHead className="hidden md:table-cell">Event Type</TableHead>
                                    <TableHead className="hidden md:table-cell">Location</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredEvents.map((event, index) => (
                                    <TableRow key={event.id}>
                                        <TableCell className="font-semibold">{index + 1}</TableCell>
                                        <TableCell className="font-semibold">{event.heading}</TableCell>
                                        <TableCell className="hidden md:table-cell">{formatDate(event.startDate)}</TableCell>
                                        <TableCell className="hidden md:table-cell">{event.startTime} - {event.endTime}</TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant="info">{event.eventType}</Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{event.location}</TableCell>
                                        <TableCell>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Link href={`/addevent/${event._id}`}>
                                                            <Button className="mr-2 bg-sky-400 text-white" size="sm">
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Edit</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Button className="mr-2 bg-red-500 text-white" size="sm">
                                                            <Popover>
                                                                <PopoverTrigger>Delete</PopoverTrigger>
                                                                <PopoverContent>
                                                                    <p>Are You sure, you want to delete? </p>
                                                                    <br />
                                                                    <div className="flex justify-end">
                                                                        <Button className="mr-2 bg-red-500 text-white" size="sm" onClick={() => handleDelete(event._id)}>
                                                                            Yes
                                                                        </Button>
                                                                    </div>
                                                                </PopoverContent>
                                                            </Popover>
                                                        </Button>

                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Delete</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}

                {searchQuery && (
                    <div>
                        <hr />
                    </div>
                )}

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">SrNo.</TableHead>
                                <TableHead className="w-[200px]">Event</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="hidden md:table-cell">Start/End</TableHead>
                                <TableHead className="hidden md:table-cell">Event Type</TableHead>
                                <TableHead className="hidden md:table-cell">Location</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {todaySchedule.map((event, index) => (
                                <TableRow key={event.id}>
                                    <TableCell className="font-semibold">{index + 1}</TableCell>
                                    <TableCell className="font-semibold">{event.heading}</TableCell>
                                    <TableCell className="hidden md:table-cell">{formatDate(event.startDate)}</TableCell>
                                    <TableCell className="hidden md:table-cell">{event.startTime} - {event.endTime}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge variant="info">{event.eventType}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{event.location}</TableCell>
                                    <TableCell>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href={`/addevent/${event._id}`}>
                                                        <Button className="mr-2 bg-sky-400 text-white" size="sm">
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Edit</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Button className="mr-2 bg-red-500 text-white" size="sm">
                                                        <Popover>
                                                            <PopoverTrigger>Delete</PopoverTrigger>
                                                            <PopoverContent>
                                                                <p>Are You sure, you want to delete? </p>
                                                                <br />
                                                                <div className="flex justify-end">
                                                                    <Button className="mr-2 bg-red-500 text-white" size="sm" onClick={() => handleDelete(event._id)}>
                                                                        Yes
                                                                    </Button>
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </Button>

                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Delete</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>

        </div>
    )
}

export default Adminpanel


function CalendarIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>)
    );
}


function SearchIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>)
    );
}


function CalendarDaysIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>)
    );
}