"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "./page.css";

const Login = () => {
    return (
        <div className="container mx-auto mt-[210px] flex justify-center items-center p-10">
            <div className="h-[500px] w-[600px] rounded-lg px-[80px] py-[45px] login-div bg-[#414C55] text-white" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <div className="flex flex-col">
                    <section className="login-heading">
                        <p className="text-[20px]">Welcome to <span className="font-semibold">Scheduler Admin Login</span></p>
                    </section>
                    <section className="mt-[3.25rem]">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="email">Email</label>
                                <Input id="email" name="email" type="email" placeholder="email@domain.com" required/>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="password">Password</label>
                                <Input id="password" name="password" type="password" placeholder="Enter your password" required/>
                            </div>
                            <div className="mt-[60px]">
                                <Button type="button" className="w-full bg-[#2DC89D] text-white hover:bg-[#F47825]">Submit</Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login;