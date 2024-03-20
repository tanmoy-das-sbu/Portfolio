"use client"
import "./nav.css";
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const Nav = ({date,setDate}) => {
  console.log(date,'date')
    return (
        <div className="nav-div flex flex-row justify-between">
            <div className="flex flex-row items-center nav-in-div">
                <img src="https://img.freepik.com/free-vector/abstract-logo-gradient-color-style_23-2147507866.jpg?w=740&t=st=1710864530~exp=1710865130~hmac=036b214d7e8461b2be880391376ce89d6a7034f394cf3b4fc53fe315d410dd99" alt="" className="logo" />
                <h2 style={{ fontSize: '24px', color:'white' }}>Scheduler App</h2>
            </div>
            <div className="flex items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default Nav