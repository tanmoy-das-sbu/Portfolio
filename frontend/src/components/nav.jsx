"use client"
import "./nav.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"
import NavigationMenuUI from './navigationBar';

const Nav = () => {
    const name = 'Dr. PRADEEP VARMA';

    return (
    <>
        <div className="nav-div h-fit sticky top-0 z-30">
            <div className="container flex flex-row justify-around" style={{ height: '4em' }}>
                <div className="nav-in-div">
                    <u className="text-white"><h2 className="font-bold md:text-4xl text-xl text-white" >{name}</h2></u>   
                    <p className="font-bold md:text-4base text-base text-white">Member-Elect, Rajya Sabha</p>
                    <p className="font-bold md:text-4base text-base text-white">General Secretary, BJP</p>
                    <p className="font-bold md:text-4base text-base text-white">Jharkhand</p>
                </div>
                <div className="flex items-center">
                    <Image src={Logo} alt="slide_image" className="logo h-auto " />
                </div>
            </div>
        </div>
        <NavigationMenuUI />
    </>
    )
}

export default Nav