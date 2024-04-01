"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import './page.css';
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LocationIcon from "../../src/assets/icons/location.svg"

const Contact = () => {

    const [data, setData] = useState({
        name: "", subject: "", email: "", mobile: "", message: ""
    });
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        if (!data.name.trim()) {
            setError("Name is required");
            return;
        }
        try {
            const { name, subject, email, mobile, message } = data;
            const payload = { name, subject, email, mobile, message };
            const response = await axios.post('http://localhost:8000/Contact/Add', payload);
            if (response.status === 200) {
                console.log("Data sent successfully:", response.data);
                setData({ name: "", subject: "", email: "", mobile: "", message: "" });
                setError("");
            } else {
                console.log("Error:", response.statusText);
            }
        } catch (error) {
            console.log(error);
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
            <section className="contact-heading h-60 flex justify-center items-center w-full">
                <h1 className="text-4xl font-semibold">Contact Us</h1>
            </section>
            <section className='container contact-body container mx-auto mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='contact-form'>
                        <form className="flex flex-col w-full gap-3" onSubmit={submit}>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name">Name <span className="text-red-500">&#42;</span></label>
                                <Input id="name" placeholder="Enter Your Name" type="text" name="name" value={data.name} onChange={handleChange} />
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="subject">Subject</label>
                                <Input id="subject" placeholder="Subject" type="text" name="subject" value={data.subject} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="email">Email</label>
                                <Input id="email" placeholder="Enter Your Email" type="text" name="email" value={data.email} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="mobile">Mobile</label>
                                <Input id="mobile" placeholder="Enter Your Mobile" type="number" name="mobile" value={data.mobile} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="message">Message</label>
                                <Textarea id="message" placeholder="Message" type="text" name="message" value={data.message} onChange={handleChange} />
                            </div>
                            <div className="flex w-full items-center">
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </div>
                    <div className='contact-address'>
                        <div className="flex items-center gap-2">
                            <Image src={LocationIcon} height={30}/>
                            <h3 className="text-3xl font-bold">Address</h3>
                        </div>
                        <br />
                        <div>
                            <h5 className="text-2xl font-semibold">Office:</h5>
                            <hr style={{border:"1px solid", margin:"8px 0"}} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nihil!</p>
                            <p>Email: <u><a href="mailto:example@gmail.com" style={{color:"#FF9500"}}>example@gmail.com</a></u></p>
                            <p>Tel.- <u><a href="tel:1234567890" style={{color:"#FF9500"}}>1234567890</a></u></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;