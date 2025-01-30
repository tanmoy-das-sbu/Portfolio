"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import './page.css';
import { memo, useCallback, useState } from "react";
import axios from "axios";
import Image from "next/image";

import LocationIcon from "../../public/images/icons/location.svg"
import { useToast } from "@/components/ui/use-toast"

const Contact = () => {

    const [data, setData] = useState({
        name: "", subject: "", email: "", mobile: "", message: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const submit = async (e) => {
        e.preventDefault();
        if (!data.name.trim()) {
            setError("Name is required");
            return;
        }
        try {
            setLoading(true);
            const { name, subject, email, mobile, message } = data;
            const payload = { name, subject, email, mobile, message };
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact/Add`, payload);
            if (response.status === 200) {
                setData({ name: "", subject: "", email: "", mobile: "", message: "" });
                setError("");
                toast({
                    variant: "success",
                    title: "Message sent successfully",
                });
            } else {
                toast({
                    variant: "error",
                    title: response.statusText,
                });
            }
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
      <div>
        <section className="container contact-body mx-auto mt-[180px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
            <div className="contact-form">
              <form className="flex flex-col w-full gap-3">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="name">
                    Name <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="subject">Subject</label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="mobile">Mobile</label>
                  <Input
                    id="mobile"
                    placeholder="Enter Your Mobile"
                    type="number"
                    name="mobile"
                    value={data.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    type="text"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex w-full items-center">
                  <Button type="button" onClick={submit} disabled={loading}>
                    {loading ? <span>Saving...</span> : <span>Submit</span>}
                  </Button>
                </div>
              </form>
            </div>
            <div className="contact-address">
              <div className="flex items-center gap-2">
                <Image
                  src={LocationIcon}
                  height={30}
                  draggable="false"
                  alt="location"
                />
                <h3 className="text-3xl font-bold">Address</h3>
              </div>
              <br />
              <div>
                <h5 className="text-2xl font-semibold">Office:</h5>
                <hr style={{ borderColor: "black", margin: "8px 0" }} />
                <p>
                  402, Brahmputra Apartments, Dr. B. D. Marg, New Delhi - 110001
                </p>
                <p>
                  Email:{" "}
                  <u>
                    <a
                      href="mailto:pkvbjp@gmail.com"
                      style={{ color: "#FF9500" }}
                    >
                      pkvbjp@gmail.com
                    </a>
                  </u>
                </p>
                <p>
                  Tel.-{" "}
                  <u>
                    <a href="tel:011-23312022" style={{ color: "#FF9500" }}>
                      011-23312022
                    </a>
                  </u>
                </p>
                <br />
                <h5 className="text-2xl font-semibold">Residential:</h5>
                <hr style={{ borderColor: "black", margin: "8px 0" }} />
                <p>
                  313, Ranchi Puruliya Road, Birla Campus, Ara, Mahilong,
                  Ranchi, Jharkhand. 835103
                </p>
                <p>
                  Email:{" "}
                  <u>
                    <a
                      href="mailto:pkvbjp@gmail.com"
                      style={{ color: "#FF9500" }}
                    >
                      pkvbjp@gmail.com
                    </a>
                  </u>
                </p>
                <p>
                  Tel.-{" "}
                  <u>
                    <a href="tel:+919450282852" style={{ color: "#FF9500" }}>
                      +919450282852
                    </a>
                  </u>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default memo(Contact);