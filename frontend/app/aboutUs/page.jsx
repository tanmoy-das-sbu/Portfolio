"use client"
import InternalServerError from "@/components/InternalServerError/page";
import "./page.css";
import Forbidden from "@/components/component/Forbidden/page";

const AboutUs = () => {
    return (
        <div className="pb-4">
            {/* <Forbidden /> */}
            <InternalServerError/>
        </div>
    )
}

export default AboutUs