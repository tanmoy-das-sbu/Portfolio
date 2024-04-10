"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Logout = () => {
    const nav = useRouter();
    const { toast } = useToast();

    const handleLogout = async () => {
        try {
            await axios.get('https://portfolio-git-main-tanmoys-projects.vercel.app/auth/logout');
            localStorage.clear();
            nav.push('/login');
            toast({
                variant: "success",
                title: 'logout successfully',
            });
        } catch (error) {
            toast({
                variant: "error",
                title: error,
            });
        }
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger className="text-sm tracking-tighter">
                    <Button>Logout</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogDescription>
                            Are you sure, you want to logout?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                        <AlertDialogAction>
                            <Button onClick={handleLogout}>Logout</Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default Logout;