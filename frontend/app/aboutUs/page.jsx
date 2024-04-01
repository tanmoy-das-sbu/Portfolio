"use client"
import Image from "next/image";
import "./page.css";
import aw2 from "../../src/assets/images/aw2.svg"
import bulletpoint from "../../src/assets/icons/text-bullet-list-square.svg";

const AboutUs = () => {
    return (
        <div>
            <section className="about-heading h-60 flex justify-center items-center w-full">
                <h1 className="text-4xl font-semibold">About Us</h1>
            </section>
            <section className='container about-body container mx-auto mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='about-div-1'>
                        <Image src={aw2} draggable="false"/>
                    </div>
                    <div className='about-div-2 flex flex-col gap-4'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum error voluptates doloribus veniam. Sunt mollitia vitae aspernatur saepe sint. Ut voluptate repellat ex pariatur reprehenderit explicabo ipsum blanditiis quis quas molestiae quam quaerat at ipsa delectus, fugit iste minima expedita! Eum magnam ad iure accusamus perferendis aliquam eaque corrupti! Atque architecto officia quos at in ut, laudantium laboriosam. Earum repudiandae magni sed enim quos ducimus. Ut a molestias rem accusantium dolorem veritatis pariatur eligendi repellendus dolorum exercitationem quisquam aspernatur debitis corrupti, delectus, blanditiis tempora. Modi commodi odio accusantium tempora consequuntur molestias. Deleniti et ipsam, voluptate expedita id veniam velit repellendus.</p>

                        <div className="inner-about-2 flex flex-col gap-3">
                            <section className="inner-about-sec flex flex-row gap-2">
                                <div className="about-sec w-2/4 flex">
                                    <Image src={bulletpoint} className="bullet-point"  draggable="false"/>
                                    <div className="values flex flex-col">
                                        <span className="font-semibold">Values</span>
                                        <span className="text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</span>
                                    </div>
                                </div>
                                <div className="about-sec w-2/4 flex">
                                    <Image src={bulletpoint} className="bullet-point"  draggable="false"/>
                                    <div className="values flex flex-col">
                                        <span className="font-semibold">Values</span>
                                        <span className="text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</span>
                                    </div>
                                </div>
                            </section>
                            <section className="inner-about-sec flex flex-row gap-2">
                                <div className="about-sec w-2/4 flex">
                                    <Image src={bulletpoint} className="bullet-point"  draggable="false"/>
                                    <div className="values flex flex-col">
                                        <span className="font-semibold">Values</span>
                                        <span className="text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</span>
                                    </div>
                                </div>
                                <div className="about-sec w-2/4 flex">
                                    <Image src={bulletpoint} className="bullet-point"  draggable="false"/>
                                    <div className="values flex flex-col">
                                        <span className="font-semibold">Values</span>
                                        <span className="text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs