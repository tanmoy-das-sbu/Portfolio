"use client";
import "./page.css";

const Forbidden = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen gap-[5em] py-8 bg-[#1C2127]">
            <div className="message-div md:order-2 flex flex-col items-center text-center">
                <div className="message text-white text-lg md:text-xl lg:text-2xl font-poppins font-medium">You are not authorized.</div>
                <div className="message2 text-white text-sm md:text-base lg:text-lg font-poppins font-normal">You tried to access a page you did not have prior authorization for.</div>
            </div>
            <div className="forbidden-div flex flex-col items-center justify-center mt-8 md:mt-0 md:order-1 h-[330px] w-[200px] rounded-t-[70px] bg-[#8594A5]">
                <div className="neon text-4xl md:text-9xl text-[#5BE0B3]-500 animate-flux text-center w-[300px] mt-[30px] mb-[10px] tracking-[3px]">403</div>
                <div className="door-frame ml-2 md:ml-4 h-[495px] w-[295px] rounded-t-[90px] bg-[#8594A5] flex justify-center items-center">
                    <div className="door bg-gray-700">
                        <div className="rectangle bg-gray-600"></div>
                        <div className="handle bg-gray-600 absolute top-[250px] left-[30px] h-8 w-50 bg-blue-200 rounded-md"></div>
                        <div className="window flex justify-center items-center h-[40px] w-[130px] bg-[#1C2127]">
                            <div className="eye bg-white absolute top-[15px] left-[25px] h-[5px] w-[15px]"></div>
                            <div className="eye eye2 bg-white ml-6 absolute top-[15px] left-[25px] h-[5px] w-[15px]"></div>
                            <div className="leaf bg-[#1C2127] animate-leaf"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;