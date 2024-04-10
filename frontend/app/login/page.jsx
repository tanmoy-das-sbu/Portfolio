"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "./page.css";
import axios from 'axios';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', data);
            const { token, email } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('email', email);

            window.location.href = '/adminpanel';
        } catch (err) {
            setError('Invalid email or password');
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
        <div className="container mx-auto mt-[210px] flex justify-center items-center p-10">
            <div className="h-[500px] w-[600px] rounded-lg px-[80px] py-[45px] login-div bg-[#414C55]" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div className="flex flex-col">
                    <section className="login-heading text-white">
                        <p className="text-[20px]">Welcome to <span className="font-semibold">Scheduler Admin Login</span></p>
                    </section>
                    <section className="mt-[3.25rem]">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="email" className="text-white">Email</label>
                                <Input id="email" name="email" type="text" placeholder="email@domain.com" onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="password" className="text-white">Password</label>
                                <Input id="password" name="password" type="password" placeholder="Enter your password" onChange={handleChange} required />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="mt-[60px]">
                                <Button type="button" className="w-full bg-[#2DC89D] text-white hover:bg-[#F47825]" onClick={handleSubmit}>Submit</Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login;