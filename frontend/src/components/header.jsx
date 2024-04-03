"use client"
import "./header.css";
import Image from "next/image";
import Logo from "../assets/pkv.png"
import NavigationMenuUI from './navigationBar';import { useState,useEffect } from "react";


const Nav = () => {
    const name = 'Dr. PRADIP VARMA';
    const [scroll,setScroll]=useState(0);
  
    useEffect(()=>{
  const handlescroll=()=>{
    let header=document.getElementsByClassName('header')[0];
    var scrollPosition = window.pageYOffset ;
    if (scrollPosition > header.offsetTop) {
      header.classList.add("fixed"); // Add the "fixed" class to make the navbar fixed
    } else {
      header.classList.remove("fixed"); // Remove the "fixed" class if not scrolled to the top
    }
    // if(nav.scrollTop==0){
    //   nav.style.position='fixed';
    //   console.log('fixed')
    // }
  }
  window.addEventListener('scroll',handlescroll)

 },[scroll])
    return (
    <div className="header">
        <div className="w-max-md h-fit bg-[#ffbe5d] p-3 sticky top-0 z-30">
            <div className="container flex flex-row justify-around" >
                <div className="mt-auto mb-auto">
                    <u className="text-white"><h2 className="font-bold md:text-4xl text-xl text-white" >{name}</h2></u>    
                    <p className="font-bold md:text-3lg text-lg text-white">Member-Elect, Rajya Sabha</p>
                    <p className="font-bold md:text-3lg text-lg text-white">General Secretary, BJP</p>
                    <p className="font-bold md:text-3lg text-lg text-white">Jharkhand</p>
                </div>
                <div className="flex items-center bg-white rounded-full p-3 ">
                    <Image  src={Logo} alt="slide_image" className="header-logo-image border-xl-white-600 " draggable="false"/>
                </div>
            </div>
        </div>
        <NavigationMenuUI  />
    </div>
    )
}

export default Nav