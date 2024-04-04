"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/component/loader/loading';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const EventEdit = ({ params }) => {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null,
        priority: false,
        heading: "",
        shortDescription: "",
        location: "",
        visibility: true,
        scheduleVisibility: false,
        scheduleDate: null,
        scheduleTime: null,

    });

    const [option, setOption] = useState(true);
    const [url, setUrl] = useState("");
    const [priority, setPriority] = useState(false);
    const [visibility, setVisibility] = useState(true);
    const [scheduleVisibility, setScheduleVisibility] = useState(false);

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await axios.get(`https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/GetById/${params.eventId}`);
                console.log(response.data.data);
                setData(response.data.data);
                setFormData({
                    startDate: response.data.data.startDate,
                    endDate: response.data.data.endDate,
                    startTime: response.data.data.startTime,
                    endTime: response.data.data.endTime,
                    priority: response.data.data.priority,
                    heading: response.data.data.heading,
                    shortDescription: response.data.data.shortDescription,
                    location: response.data.data.location,
                    visibility: response.data.data.visibility,
                    scheduleVisibility: response.data.data.scheduleVisibility,
                    scheduleDate: response.data.data.scheduleDate,
                    scheduleTime: response.data.data.scheduleTime,
                    imageUrl: response.data.data.imageUrl,
                });
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        getEventDetails();
    }, [params.eventId]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const val = type === "file" ? files[0] : value;
        setFormData({
            ...formData,
            [name]: val,
        });
    };
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                "https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/Upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Image upload failed");
            }

            const data = await response.json();
            console.log("dta", data);
            console.log("dimg", data.imageUrl);
            // setUrl(data.imageUrl);
            setUrl(data.imageUrl);
            setFormData({
                ...formData,
                imageUrl: data.imageUrl,
            });
            console.log("Message", url);
        } catch (error) {
            console.error("Error uploading image:", error.message);
        }
    };
    const handleOptionChange = () => {
        setOption(!option);
        setVisibility(!visibility);
        setScheduleVisibility(!scheduleVisibility);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/UpdateById/${params.eventId}`,
                formData
            );

            if (response.status === 200) {
                console.log("Event details updated successfully:", response.data);
            } else {
                console.error("Failed to update event details");
            }
        } catch (error) {
            console.error("Error updating event details:", error.message);
        }
    };


    if (!data) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    const isImageFromAllowedDomain = data.imageUrl.startsWith('https://res.cloudinary.com/neeleshks/image/upload');

    return (
        <div className="mt-[250px] pb-6">
            <div>
                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="mx-auto max-w-5xl grid gap-4 p-4 md:gap-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Update Event
                                </h1>
                            </div>
                            <div className="flex  flex-col sm:flex-row gap-4 items-center justify-center ">
                                <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input
                                        id="startDate"
                                        placeholder="Start Date"
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                    <Label htmlFor="endDate">End Date</Label>
                                    <Input
                                        id="endDate"
                                        placeholder="End Date"
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center ">
                                <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                    <Label htmlFor="startTime">Start Time</Label>
                                    <Input
                                        id="startTime"
                                        placeholder="Start Time"
                                        type="time"
                                        name="startTime"
                                        value={formData.startTime || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                    <Label htmlFor="endTime">End Time</Label>
                                    <Input
                                        id="endTime"
                                        placeholder="End Time"
                                        type="time"
                                        name="endTime"
                                        value={formData.endTime || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="heading">Heading</Label>
                                    <Input
                                        id="heading"
                                        placeholder="Heading"
                                        type="text"
                                        name="heading"
                                        value={formData.heading || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        placeholder="Location"
                                        type="text"
                                        name="location"
                                        value={formData.location || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="shortDescription">Short Description</Label>
                                    <Textarea
                                        className="min-h-[150px]"
                                        id="shortDescription"
                                        placeholder="Short Description"
                                        name="shortDescription"
                                        value={formData.shortDescription || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="img">Image</Label>
                                    <input type="file" name="img" onChange={handleImageUpload} />
                                </div>
                                <div className="flex flex-col gap-4 ">
                                    <div className="flex flex-col gap-4 p-6">
                                        <Label htmlFor="priority">Priority</Label>
                                        <div className="flex items-center space-x-2">
                                            <Switch
                                                id="priority"
                                                name="priority"
                                                value={formData.priority}
                                                onCheckedChange={() => {
                                                    setPriority(!priority);
                                                }}
                                            />
                                            <Label htmlFor="priority">Priority</Label>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Label htmlFor="visibility">Visibility</Label>
                                        <Switch
                                            id="visibility"
                                            name="visibility"
                                            value={formData.visibility}
                                            onCheckedChange={handleOptionChange}
                                        />
                                        <Label htmlFor="visibility">Schedule Visibility</Label>
                                    </div>
                                    <div className="flex flex-row  justify-around p-4">
                                        {option ? (
                                            <div>
                                                <Label htmlFor="visibility">Visibility</Label>
                                                <div className="flex items-center space-x-2">
                                                    <Switch
                                                        id="visibility"
                                                        name="visibility"
                                                        onCheckedChange={() => {
                                                            setVisibility(!visibility);
                                                        }}
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="visibility">Visibility</Label>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <Label htmlFor="scheduleVisibility">
                                                    Schedule Visibility
                                                </Label>

                                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center ">
                                                    <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                                        <Label htmlFor="scheduleDate">Date</Label>
                                                        <Input
                                                            id="scheduleDate"
                                                            placeholder=" Date"
                                                            type="date"
                                                            name="scheduleDate"
                                                            value={formData.scheduleDate || ''}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                                        <Label htmlFor="scheduleTime">Time</Label>
                                                        <Input
                                                            id="scheduleTime"
                                                            placeholder="Time"
                                                            type="time"
                                                            name="scheduleTime"
                                                            value={formData.scheduleTime || ''}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default EventEdit;