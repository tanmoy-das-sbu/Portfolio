import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"




const page = () => {
    return (
        <div className="flex flex-col">
            <header
                className=" border-b bg-gray-100/40 ">
                <div className="flex items-center justify-center gap-2">
                    <CalendarIcon className="h-6 w-6 py-8" />
                    <h1 className="font-semibold text-lg md:text-2xl">Events</h1>
                </div>
            </header>
            <main className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">

                <div className="container flex h-14 lg:h-[60px] items-center gap-4  px-6 dark:bg-gray-800/40" >
                    <Link className="lg:hidden" href="#">
                        <CalendarIcon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full">
                        <form>
                            <div className="relative">
                                <SearchIcon
                                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                    placeholder="Search events..."
                                    type="search" />
                            </div>
                        </form>
                    </div>

                    <div>
                        
                            
                                <Button className="ml-4" variant="outline">
                                    Add Event
                                </Button>
                            
                        
                    </div>
                </div>
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Event</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="hidden md:table-cell">Start/End</TableHead>
                                <TableHead className="hidden md:table-cell">Status</TableHead>
                                <TableHead className="hidden md:table-cell">Location</TableHead>
                                <TableHead>Actions</TableHead>
                                <TableHead>Visibility</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">Onboarding Session</TableCell>
                                <TableCell className="hidden md:table-cell"> 20-03-2024 - 21-03-2024</TableCell>
                                <TableCell className="hidden md:table-cell"> 10:00 AM - 11:00 AM</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Badge variant="info">Public</Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">Ranchi</TableCell>
                                <TableCell>
                                    <Button className="mr-2" size="sm" variant="outline">
                                        Edit
                                    </Button>
                                    <Button className="mr-2" size="sm" variant="outline">
                                        Delete
                                    </Button>

                                </TableCell>
                                <TableCell>
                                <div className="flex items-center space-x-2">
                                        <Switch id="visibility" />
                                        
                                    </div>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>

        </div>
    )
}

export default page


function CalendarIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>)
    );
}


function SearchIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>)
    );
}


function CalendarDaysIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>)
    );
}