"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useState } from "react";
import { formatDate } from "@/utils/dateFormat";
import { Badge } from "@/components/ui/badge";

export default function Addevent() {
  const [formDataArray, setFormDataArray] = useState([]);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    heading: "",
    shortDescription: "",
    location: "",
    scheduleDate: "",
    scheduleTime: "",
  });

  const [option, setOption] = useState();
  const [url, setUrl] = useState("");
  const [priority, setPriority] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [scheduleVisibility, setScheduleVisibility] = useState(false);

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
      console.log("Message", url);
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      shortDescription: "",
      location: "",
      scheduleDate: "",
      scheduleTime: "",
    });
    setPriority(false)
    setVisibility(true)
    setScheduleVisibility(false)
    console.log(formDataArray);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-git-main-tanmoys-projects.vercel.app/schedule/AddMultiple",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataArray),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Schedule added successfully:", data);
      setFormData({
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        priority: false,
        heading: "",
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
      setImageUrlLink("");
    
    } catch (error) {
      console.error("Error adding schedule:", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mt-[250px] flex flex-row justify-around flex-wrap">
        <div className="md:w-2/4 w-full">
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="mx-auto max-w-5xl grid gap-4 p-4 md:gap-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Add Event
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
                <div>
                  <div className="flex flex-col gap-4">
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
                  <div className="flex flex-col gap-4">
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
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="shortDescription">Short Description</Label>
                    <Textarea
                      className="min-h-[150px]"
                      id="shortDescription"
                      placeholder="Short Description"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="img">Image</Label>
                    <input
                      type="file"
                      name="img"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className="flex flex-col gap-4 ">
                    <div className="flex flex-col gap-4 p-6">
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
                        <Label htmlFor="priority">Priority</Label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="visibility">Visibility</Label>
                      <div className="flex items-center space-x-2">
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
        <div className="rounded-lg border md:w-2/4 w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">SrNo.</TableHead>
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
                    {event.heading}
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
          className="..."
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
