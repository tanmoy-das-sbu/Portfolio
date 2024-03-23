"use client"
import "./nav.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"
import NavigationMenuUI from './navigationBar';

const Nav = () => {
    const name = 'Dr. PRADIP VARMA';

    return (
    <div style={{marginBottom:"50px"}}>
        <div className="w-max-md h-fit bg-[#ffbe5d] p-3 sticky top-0 z-30">
            <div className="container flex flex-row justify-around" >
                <div className="">
                    <h2 className="font-bold md:text-4xl text-lg text-white" >{name}</h2>   
                    <p className="font-bold md:text-3xl text-md text-white">Member-Elect, Rajya Sabha</p>
                    <p className="font-bold md:text-3xl text-md text-white">General Secretary, BJP</p>
                    <p className="font-bold md:text-3xl text-md text-white">Jharkhand</p>
                </div>
                <div className="flex items-center bg-white rounded-full p-3 ">
                    <Image  src={Logo} alt="slide_image" className="w-[80px] h-[80px] rounded-full  border-xl-white-600 " />
                </div>
            </div>
        </div>
        <NavigationMenuUI  />
    </div>
    )
}

export default Nav