"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Addevent() {
  const [formDataArray, setFormDataArray] = useState([]);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    priority: false,
    heading: "",
    shortDescription: "",
    location: "",
    visibility: true,
    scheduleVisibility: false,
    scheduleDate: "",
    scheduleTime: "",
  });

  const [option, setOption] = useState(true);
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
  const handleOptionChange = () => {
    setOption(!option);
    setVisibility(!visibility);
    setScheduleVisibility(!scheduleVisibility);
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
      priority: false,
      heading: "",
      shortDescription: "",
      location: "",
      visibility: true,
      scheduleVisibility: false,
      scheduleDate: "",
      scheduleTime: "",
    });
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
    <div className="mt-[250px]">
      <div>
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
                        onCheckedChange={() => {
                          setPriority(!priority);
                        }}
                      />
                      <Label htmlFor="priority">Priority</Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="priority">Visibility</Label>
                    <Switch
                      id="priority"
                      name="priority"
                      onCheckedChange={handleOptionChange}
                    />
                    <Label htmlFor="priority">Schedule Visibility</Label>
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
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Add Event </Button>
              </div>
            </div>
          </form>
        </div>
        {formDataArray.map((index) => (
          <div key={index} className="w-full">
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
                          onCheckedChange={() => {
                            setPriority(!priority);
                          }}
                        />
                        <Label htmlFor="priority">Priority</Label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="priority">Visibility</Label>
                      <Switch
                        id="priority"
                        name="priority"
                        onCheckedChange={handleOptionChange}
                      />
                      <Label htmlFor="priority">Schedule Visibility</Label>
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
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Add Event </Button>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </div>
  );
}
