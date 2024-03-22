"use client"
import "./nav.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"
import NavigationMenuUI from './navigationBar';

const Nav = () => {
    const name = 'Dr. PRADEEP VARMA';
    const detail = `Member-Elect, Rajya Sabha
    General Secretary, BJP
    Jharkhand`
    return (
    <>
        <div className="nav-div h-fit sticky top-0 z-30">
            <div className="container flex flex-row justify-between" style={{ height: '4em' }}>
                <div className="flex flex-col items-center nav-in-div">
                    <h2 className="font-bold md:text-4xl text-xl text-white" >{name}</h2>
                    {/* <h5>{detail}</h5> */}
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