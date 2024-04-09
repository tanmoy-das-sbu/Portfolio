"use client"
import blog from '/public/images/icons/blog.svg';
import Image from "next/image";

const Blog = () => {
    return (
        <div className="container mx-auto mt-[175px] flex flex-col justify-center items-center p-10">
            <div className='mb-4 flex gap-2 items-center w-full'>
                <Image src={blog} className='w-10 h-10'/>
                <h4 className='text-3xl font-semibold'>Blog</h4>
            </div>
            <iframe src="https://we4pkv.blogspot.com" className="w-full h-[100vh]"></iframe>
        </div>
    )
}

export default Blog;