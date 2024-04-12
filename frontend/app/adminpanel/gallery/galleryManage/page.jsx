"use client"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import Forbidden from "@/components/component/Forbidden/page";
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation'

const ManageGallery = () => {
    const [data, setData] = useState({
        title: "", altText: "", shortDescription: "", date: "", socialTags: [], imageUrl: ""
    });
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [forbidden, setForbidden] = useState(false);
    const nav = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setForbidden(false);
        } else {
            setToken(token);
            setForbidden(true);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!data.title.trim()) {
            setError("Title is required");
        }
        if (selectedFile == null) {
            toast({
                variant: "warning",
                title: "Photo is required.",
            });
            return;
        }

        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setLoading(true);
            const formData = new FormData();
            formData.append('image', selectedFile);
            const response = await axios.post(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/Upload`, formData);
            if (response.status === 200) {
                const imageUrl = response.data.imageUrl;
                const postData = { ...data, imageUrl };
                const submitResponse = await axios.post(`https://portfolio-git-main-tanmoys-projects.vercel.app/gallery/Add`, postData);
                if (submitResponse.status === 200) {
                    setData({
                        title: "",
                        altText: "",
                        shortDescription: "",
                        date: "",
                        socialTags: [],
                        imageUrl: ""
                    });
                    document.getElementById('imageUrl').value = '';
                    setError("");
                    setSelectedFile(null);
                    toast({
                        variant: "success",
                        title: "Photo added successfully.",
                    });
                } else {
                    toast({
                        variant: "error",
                        title: submitResponse.statusText,
                    });
                }
            } else {
                toast({
                    variant: "error",
                    title: response.statusText,
                });
            }
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
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'socialTags') {
            const tags = value.split(',').map(tag => tag.trim());
            setData(prevData => ({
                ...prevData,
                [name]: tags
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        setData((prevData) => ({
            ...prevData,
            date: selectedDate
        }));
    }

    if (!forbidden) {
        return (
            <div>
                <Forbidden />
            </div>
        );
    }

    return (
        <div className="container mt-[210px] pb-6">
            <section className="w-full h-[5rem] flex items-center justify-between pl-2 gap-4">
                <h1 className="text-2xl font-bold">Manage Gallery</h1>
                <Link href="/adminpanel/gallery/galleryList">
                    <Button className="bg-blue-500 text-white" >View Gallery List</Button>
                </Link>
            </section>
            <section className="mt-2 w-full h-[500px] p-2">
                <form className="flex flex-col w-full gap-3">
                    <div className="lg:flex md:flex-row gap-4 sm:flex-col">
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="title" className="font-semibold">Title <span className="text-red-500">&#42;</span></label>
                            <Input id="title" placeholder="Enter the Title" type="text" name="title" value={data.title} onChange={handleChange} />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="altText">Alt Text</label>
                            <Input id="altText" placeholder="Alt Text" type="text" name="altText" value={data.altText} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="lg:flex md:flex-row gap-4 sm:flex-col">
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="date">Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
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
                                        value={data.date}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="imageUrl" className="font-semibold">Image <span className="text-red-500">&#42;</span></label>
                            <Input id="imageUrl" type="file" name="imageUrl" value={data.imageUrl} onChange={handleImageChange} />
                            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="shortDescription">Short Description</label>
                        <Textarea id="shortDescription" placeholder="Message" type="text" name="shortDescription" value={data.shortDescription} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="socialTags">Social Tags</label>
                        <Input id="socialTags" placeholder="Enter Your Tags separated by commas" type="text" name="socialTags" value={data.socialTags.join(',')} onChange={handleChange} />
                    </div>
                    <div className="flex w-full items-center">
                        <Button type="button" onClick={submit} disabled={loading}>
                            {loading ? <span>Saving...</span> : <span>Submit</span>}
                        </Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ManageGallery;

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