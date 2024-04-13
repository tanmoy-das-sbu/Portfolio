
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"

import { AlignJustify, Globe } from "lucide-react"
import Link from "next/link";

const Buttons = () => {
    return (<div className="w-full bg-[#F47621] fixed right-0 z-30" >
        <div className="flex items-center justify-end">
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger className="w-full p-3"><AlignJustify className="text-white" /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10 " >
                                    <SheetClose asChild><Link href={"/"} passHref> Home</Link></SheetClose>
                                    <SheetClose asChild><Link href={"/schedule"} passHref> Schedule</Link></SheetClose>
                                    <SheetClose asChild><Link href={"/gallery"} passHref> Gallery</Link></SheetClose>
                                    <SheetClose asChild><Link href={"/socials"} passHref> Socials</Link></SheetClose>
                                    <SheetClose asChild><Link href={"/contact"} passHref> Contact</Link></SheetClose>
                                    <SheetClose asChild><Link href={"/blog"} passHref> Blog</Link></SheetClose>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div >

            </div>
        </div>
    </div>
    );
}

export default Buttons;