"use client"
import "./header.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"
import NavigationMenuUI from './navigationBar';

const Nav = () => {
    const name = 'Dr. PRADIP VARMA';

    return (
    <>
        <div className="w-max-md h-fit bg-[#ffbe5d] p-3 sticky top-0 header-main-div">
            <div className="container flex flex-row justify-around" >
                <div className="">
                    <u className="text-white"><h2 className="font-bold md:text-4xl text-xl text-white" >{name}</h2></u>    
                    <p className="font-bold md:text-3lg text-lg text-white">Member-Elect, Rajya Sabha</p>
                    <p className="font-bold md:text-3lg text-lg text-white">General Secretary, BJP</p>
                    <p className="font-bold md:text-3lg text-lg text-white">Jharkhand</p>
                </div>
                <div className="flex items-center bg-white rounded-full p-3 ">
                    <Image  src={Logo} alt="slide_image" className="w-[80px] h-[80px] rounded-full  border-xl-white-600 " />
                </div>
            </div>
        </div>
        <NavigationMenuUI />
    </>
    )
}

export default Nav