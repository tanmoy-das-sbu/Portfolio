"use client"
import './footer.css';
import { Input } from '@/components/ui/input';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import youtube from '../assets/icons/youtube.svg';
import facebook from '../assets/icons/facebook.svg';
import Link from 'next/link';

const Footer = () => {

    return (
        <div className="footer-main-div">
            <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
                <section className="footer-section text-white">
                    <h2 className='font-bold'>Quick Links</h2>
                    <hr />
                    <br />
                    <ul className='md:text-3sm text-sm flex flex-col flex-wrap quick-links-ul'>
                        <li><span>&gt;&gt;</span> Home</li>
                        <li><span>&gt;&gt;</span> Photo Gallery</li>
                        <li><span>&gt;&gt;</span> Blog</li>
                        <li><span>&gt;&gt;</span> Articles</li>
                        <li><span>&gt;&gt;</span> Biography</li>
                        <Link href={`/contact`}><li><span>&gt;&gt;</span> Contact Us</li></Link>
                    </ul>
                </section>
                <section className="footer-section">
                    <h2 className='font-bold'>Subscribe Newsletter</h2>
                    <hr />
                    <br />
                    <div className="flex items-center">
                        <Input id="email" placeholder="Enter your Email" type="email" name="email" className="h-10" />
                        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 h-10 text-sm flex justify-center items-center">Subscribe</button>
                    </div>

                    <div className='social-div'>
                        <h2 className='font-bold'>Socials</h2>
                        <hr />
                        <div className='flex justify-between items-center icons-div mt-2'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://www.facebook.com" target='_blank'><Image src={facebook} className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 social-icons" draggable='false' /></a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://twitter.com" target='_blank'><Image src={twitter} className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 social-icons" draggable='false' /></a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://www.youtube.com" target='_blank'><Image src={youtube} className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 social-icons" draggable='false' /></a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Youtube</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://www.instagram.com" target='_blank'><Image src={instagram} className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 social-icons" draggable='false' /></a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>

                </section>
                <section className="footer-section">
                    <h2 className='font-bold'>Contact</h2>
                    <hr />
                    <br />
                    <div className='h-40 contact-section'>
                        <div className='h-24'>
                            <p><span className='font-semibold'>Office: </span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quam?</span></p>
                            <p>Email: <u><a href="mailto:example@gmail.com">example@gmail.com</a></u></p>
                            <p>Tel.- <u><a href="tel:1234567890">1234567890</a></u></p>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;