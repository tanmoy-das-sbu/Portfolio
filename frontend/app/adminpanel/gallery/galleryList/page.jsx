"use client"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { formatDate } from "@/utils/dateFormat"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Loading from "@/components/component/loader/loading"
import Image from 'next/image';
import { useToast } from "@/components/ui/use-toast"
import RefreshIcon from '@mui/icons-material/Refresh';

const ITEMS_PER_PAGE = 10;

const GalleryList = () => {
    const [galleryData, setGalleryData] = useState([]);
    const [actualData, setActualData] = useState([]);
    const [date, setDate] = useState("");
    const [load, setLoad] = useState(false);
    const { toast } = useToast()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/getAll`);
                if (response) {
                    const filteredResponse = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                    setGalleryData(filteredResponse);
                    setActualData(response.data.data);
                    setTotalPages(Math.ceil(filteredResponse.length / ITEMS_PER_PAGE));
                    setLoad(true);
                } else {
                    setLoad(false);
                }
            } catch (error) {
                toast({
                    variant: "error",
                    title: error,
                });
            }
        }

        getData();
    }, []);

    const handleDateChange = async (newDate) => {
        try {
            setDate(newDate);
            const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/getAll`);
            if (response && response.data.data) {
                const allGallery = response.data.data;

                const filteredData = allGallery.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getDate() === newDate.getDate() &&
                        eventDate.getMonth() === newDate.getMonth() &&
                        eventDate.getFullYear() === newDate.getFullYear();
                });

                setGalleryData(filteredData);
            }
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        }
    };


    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/deleteById/${eventId}`);
            const updatedGallery = galleryData.filter(event => event._id !== eventId);
            setGalleryData(updatedGallery);
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        }
    };

    const handleSearchInputChange = (event) => {
        const query = event.target.value.toLowerCase();

        if (query === "") {
            setGalleryData(actualData);
        } else {
            const filteredData = actualData.filter(event => event.title.toLowerCase().includes(query));
            setGalleryData(filteredData);
        }
    };

    const handleRefresh = async () => {
        try {
            const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/getAll`);
            if (response && response.data.data) {
                setGalleryData(response.data.data);
                setTotalPages(Math.ceil(response.data.data.length / ITEMS_PER_PAGE));
                setDate("");
                toast({
                    variant: "success",
                    title: "Gallery data refreshed successfully.",
                });
            }
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        }
    };

    if (!load) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentGalleryData = galleryData.slice(startIndex, endIndex);

    return (
        <div className="flex mt-[250px] flex-col">
            <header
                className=" border-b bg-gray-100/40 ">
                <div className="flex items-center justify-center gap-2">
                    <CalendarIcon className="h-6 w-6 py-8" />
                    <h1 className="font-semibold text-lg md:text-2xl">Gallery List</h1>
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
                                    placeholder="Search..."
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
                                    <Link href="/adminpanel/gallery/galleryManage">
                                        <Button className="ml-4 bg-violet-500 text-white">
                                            Add Photo
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add Photo</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <RefreshIcon className="cursor-pointer" onClick={handleRefresh} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Refresh</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">SrNo.</TableHead>
                                <TableHead className="w-[200px]">Title</TableHead>
                                <TableHead className="hidden md:table-cell">ALt Text</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="hidden md:table-cell">Short Description</TableHead>
                                <TableHead className="hidden md:table-cell">Socail Tags</TableHead>
                                <TableHead className="hidden md:table-cell w-[200px]">Image</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentGalleryData.map((event, index) => (
                                <TableRow key={event.id}>
                                    <TableCell className="font-semibold">{startIndex + index + 1}</TableCell>
                                    <TableCell className="font-semibold">{event.title}</TableCell>
                                    <TableCell className="hidden md:table-cell">{event.altText}</TableCell>
                                    <TableCell className="hidden md:table-cell">{formatDate(event.date)}</TableCell>
                                    <TableCell className="hidden md:table-cell">{event.shortDescription}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {event.socialTags.map((tag, index) => (
                                            <span key={index} className="text-blue-500">{index !== 0 && ' '}#{tag}</span>
                                        ))}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Image src={event.imageUrl} alt={event.altText} width={100} height={100} />
                                    </TableCell>
                                    <TableCell className="flex">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href={`/adminpanel/gallery/galleryManage/${event._id}`}>
                                                        <Button className="mr-2 bg-sky-400 text-white" size="sm">
                                                            <PencilIcon className="h-4 w-4" />
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
                                                            <PopoverTrigger><TrashIcon className="h-4 w-4" /></PopoverTrigger>
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
                    <div className="flex justify-center items-center mt-4">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`mx-1 px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-gray-300" : "bg-gray-200"
                                    }`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    )
}

export default GalleryList;

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

function PencilIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M3.293 14.707a1 1 0 0 1 0-1.414L11.586 4H13a1 1 0 0 1 0 2h-1.414L3.293 14.707zm12.414-7.414a1 1 0 0 0-1.414 0L12 7.586l1.707-1.707a1 1 0 0 0 0-1.414l-1-1A1 1 0 0 0 12.293 3l-1.293 1.293L15 8l.707-.707 1-1a1 1 0 0 0 0-1.414l-2-2zM5 17a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v1.586l9-9-1.586-1.586L5 14.414V13a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h2a1 1 0 0 1 0 2h-.293l-.378 10.714A2 2 0 0 1 14.329 20H5.67a2 2 0 0 1-1.999-1.286L3.293 9H3a1 1 0 0 1 0-2h2V4zm4 2v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h-4zm3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}