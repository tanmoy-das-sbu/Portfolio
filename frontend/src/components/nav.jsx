"use client"
import "./nav.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"

const Nav = () => {
    const name = 'PRADEEP VERMA';
    return (
        <div className="nav-div sticky top-0 z-30">
            <div className="container flex flex-row justify-between" style={{ height: '4em' }}>
                <div className="flex flex-row items-center nav-in-div">
                    <h2 className="font-bold" style={{ fontSize: '24px', color: 'white' }}>{name}</h2>
                </div>
                <div className="flex items-center">
                    <Image src={Logo} alt="slide_image" className="logo" />
                </div>
            </div>
        </div>
    )
}

export default Nav