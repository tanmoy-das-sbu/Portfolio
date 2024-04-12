"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/component/loader/loading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import Forbidden from "@/components/component/Forbidden/page";
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation'

const EventEdit = ({ params }) => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    heading: "",
    eventType: "",
    shortDescription: "",
    location: "",
    scheduleDate: "",
    scheduleTime: "",
  });
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [priority, setPriority] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [scheduleVisibility, setScheduleVisibility] = useState(false);
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

    const getEventDetails = async () => {
      try {
        const response = await axios.get(
          `https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/GetById/${params.eventId}`
        );
        console.log(response.data.data);
        setData(response.data.data);
        setFormData({
          startDate: response.data.data.startDate.slice(0, 10),
          endDate: response.data.data.endDate.slice(0, 10),
          startTime: response.data.data.startTime,
          endTime: response.data.data.endTime,
          priority: response.data.data.priority,
          heading: response.data.data.heading,
          shortDescription: response.data.data.shortDescription,
          location: response.data.data.location,
          visibility: response.data.data.visibility,
          scheduleVisibility: response.data.data.scheduleVisibility,
          scheduleDate:
            response.data.data.scheduleDate !== null &&
              response.data.data.scheduleDate !== undefined
              ? response.data.data.scheduleDate.slice(0, 10)
              : "",
          scheduleTime: response.data.data.scheduleTime,
        });

        setUrl(
          response.data.data.imageUrl !== null &&
            response.data.data.imageUrl !== ""
            ? response.data.data.imageUrl
            : url
        );
        setPriority(response.data.data.priority);
        setVisibility(response.data.data.visibility);
        setScheduleVisibility(response.data.data.scheduleVisibility);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    getEventDetails();
  }, [params.eventId, forbidden]);

  function formatTime(timeString) {
    if (!timeString) return "";

    const [time, period] = timeString.split(" ");
    const [hours, minutes] = time.split(":");

    let formattedHours = parseInt(hours, 10);
    if (period === "PM" && formattedHours !== 12) {
      formattedHours += 12;
    } else if (period === "AM" && formattedHours === 12) {
      formattedHours = 0;
    }

    const formattedTime = `${formattedHours
      .toString()
      .padStart(2, "0")}:${minutes}`;

    return formattedTime;
  }
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
    const imageData = new FormData();
    imageData.append("image", file);

    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await fetch(
        "https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/Upload",
        {
          method: "POST",
          body: imageData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      setUrl(data.imageUrl);
      setFormData({
        ...formData,
        imageUrl: data.imageUrl,
      });
      console.log("Message", url);
      toast({
        variant: "success",
        title: "Image Updated Successfully",
      });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.put(
        `https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/UpdateById/${params.eventId}`,
        { ...formData, priority, visibility, scheduleVisibility, imageUrl: url }
      );

      if (response.status === 200) {
        console.log("Event details updated successfully:", response.data);
        toast({
          variant: "success",
          title: "Event Updated",
        });
      } else {
        console.error("Failed to update event details");
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
    }
  };

  if (!data) {
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

  const isImageFromAllowedDomain = data.imageUrl.startsWith(
    "https://res.cloudinary.com/neeleshks/image/upload"
  );

  return (
    <div className="mt-[210px] pb-6">
      <div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-5xl bg-[#F3F0EB] rounded-3xl grid gap-4 p-4 md:gap-6">
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
                    value={formData.startDate || ""}
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
                    value={formData.endDate || ""}
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
                    value={formatTime(formData.startTime) || ""}
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
                    value={formatTime(formData.endTime) || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="heading">Heading</Label>
                  <Input
                    id="heading"
                    placeholder="Heading"
                    type="text"
                    name="heading"
                    value={formData.heading || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Location"
                    type="text"
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="shortDescription"
                    placeholder="Short Description"
                    name="shortDescription"
                    value={formData.shortDescription || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="img">Image</Label>
                    <input
                      type="file"
                      name="img"
                      onChange={handleImageUpload}
                    />
                  </div>
                  {url !== null && url !== "" ? (
                    <img
                      src={url}
                      className="h-20 w-auto rounded-md shadow-2xl "
                      alt="ThumNail"
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                      className="h-20 w-auto rounded-md shadow-2xl "
                      alt="ThumNail"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-4 ">
                  <div className="flex flex-col gap-4 ">
                    <Label htmlFor="priority">Priority</Label>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="priority"
                        name="priority"
                        checked={priority}
                        onCheckedChange={() => {
                          setPriority(!priority);
                        }}
                      />
                      <Label htmlFor="priority">ON</Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <Switch
                      id="visibility"
                      name="visibility"
                      checked={visibility}
                      onCheckedChange={() => {
                        setVisibility(!visibility);
                        {
                          visibility ? setScheduleVisibility(false) : "";
                        }
                      }}
                      defaultChecked
                    />

                  </div>
                  {visibility ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="priority">Schedule Visibility</Label>
                        <Switch
                          id="priority"
                          name="priority"
                          checked={scheduleVisibility}
                          onCheckedChange={() => {
                            setScheduleVisibility(!scheduleVisibility);
                          }}
                        />
                      </div>
                      <div className="flex flex-row  justify-around p-4">
                        {scheduleVisibility ? (
                          <div>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center ">
                              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                <Label htmlFor="scheduleDate">Date</Label>
                                <Input
                                  id="scheduleDate"
                                  placeholder=" Date"
                                  type="date"
                                  name="scheduleDate"
                                  value={formData.scheduleDate}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                                <Label htmlFor="scheduleTime">Time</Label>
                                <Input
                                  id="scheduleTime"
                                  placeholder="Time"
                                  type="time"
                                  value={
                                    formatTime(formData.scheduleTime) || ""
                                  }
                                  name="scheduleTime"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-center">
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;