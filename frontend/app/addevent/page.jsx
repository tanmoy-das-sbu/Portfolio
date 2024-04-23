"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

import { Switch } from "@/components/ui/switch";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { formatDate } from "@/utils/dateFormat";
import { Badge } from "@/components/ui/badge";
import Forbidden from "@/components/component/Forbidden/page";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

export default function Addevent() {
  const [formDataArray, setFormDataArray] = useState([]);
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
  const [err, setErr] = useState("");

  const [url, setUrl] = useState("");
  const [priority, setPriority] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [scheduleVisibility, setScheduleVisibility] = useState(false);
  const [token, setToken] = useState("");
  const [forbidden, setForbidden] = useState(true);
  const nav = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setForbidden(false);
    } else {
      setToken(token);
      setForbidden(true);
    }
  }, []);

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
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/schedule/Upload`,
        formData
      );
      setUrl(response.data.imageUrl);

      toast({
        variant: "success",
        title: "Image Added Successfully",
      });
    } 
    catch (error) {
      if (error.response.status === 403 || error.response.status === 401) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "startDate",
      "endDate",
      "startTime",
      "endTime",
      "heading",
      "eventType",
      "shortDescription",
      "location",
    ];

    if (formData.startDate > formData.endDate) {
      setErr("End Date cannot be smaller than Start Date!");
      toast({
        variant: "error",
        title: "End Date cannot be smaller than Start Date",
      });
      return;
    }
    else{
      setErr("");
    }

    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      toast({
        variant: "error",
        title: "Please fill the required fields",
      });
      return;
    }
    setFormDataArray([
      ...formDataArray,
      {
        ...formData,
        imageUrl: url,
        priority,
        visibility,
        scheduleVisibility,
      },
    ]);
    setFormData({
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
    setPriority(false);
    setVisibility(true);
    setScheduleVisibility(false);

    document.getElementById("imageInput").value = "";
    toast({
      variant: "success",
      title: "Event Added",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/schedule/AddMultiple`,
        formDataArray
      );
      if (response.status >= 200 && response.status < 300) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFormData({
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        priority: false,
        heading: "",
        eventType: "",
        shortDescription: "",
        location: "",
        visibility: true,
        scheduleVisibility: "",
        scheduleDate: "",
        scheduleTime: "",
      });
      setPriority(false);
      setVisibility(true);
      setScheduleVisibility(false);
      toast({
        variant: "success",
        title: "All Event Submitted",
      });
      setFormDataArray([]);
    } catch (error) {

      if (error.response.status === 403 || error.response.status === 401) {
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

  if (!forbidden) {
    return (
      <div>
        <Forbidden />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mt-[210px] flex flex-row   justify-between flex-wrap">
        <div className="md:w-[40%] bg-[#F3F0EB] rounded-2xl w-full">
          <div className="w-full">
            <form onSubmit={handleSubmit} aria-required>
              <div className="mx-auto max-w-5xl flex flex-col gap-2 md:p-4 p-2 md:gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Add Event
                  </h1>
                </div>
                <div className="">
                  <div className="flex  flex-col sm:flex-row gap-4 items-center justify-center ">
                    <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        placeholder="Start Date"
                        type="date"
                        name="startDate"
                        value={formData.startDate}
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
                        value={formData.endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center mt-2">
                  {err && <p className="text-[12px] text-red-500">{err}</p>}
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
                      value={formData.startTime}
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
                      value={formData.endTime}
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
                      value={formData.heading}
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
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="location">Event Type</Label>
                    <Input
                      id="eventType"
                      placeholder="Event Type"
                      type="text"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="shortDescription">Short Description</Label>
                    <Textarea
                      className=""
                      id="shortDescription"
                      placeholder="Short Description"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="img">Image</Label>
                    <input
                      id="imageInput"
                      type="file"
                      name="img"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
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
                                    value={formData.scheduleTime}
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
                </div>
                <div className="flex justify-center">
                  <Button type="submit">Save Event </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rounded-lg border md:w-[55%]  w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">SrNo.</TableHead>
                <TableHead className="w-[200px]">Event</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">
                  Start/End
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Event Type
                </TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formDataArray.map((event, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{index + 1}</TableCell>
                  <TableCell className="font-semibold">
                    {event.heading.split(" ").slice(0, 2).join(" ") + "..."}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(event.startDate)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {event.startTime} - {event.endTime}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="info">{event.eventType}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {event.location}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-end m-4">
        <Button
          disabled={formDataArray.length <= 0}
          className=""
          onClick={handleFormSubmit}
        >
          {formDataArray.length <= 0 ? "No Data" : "Submit"}
          <span class="inline-flex items-center justify-center px-6 py-3.5 w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-white rounded-full">
            {formDataArray.length}
          </span>
        </Button>
      </div>
    </div>
  );
}
