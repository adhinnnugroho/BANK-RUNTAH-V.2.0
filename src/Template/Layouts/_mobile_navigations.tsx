import NavCard from "@/Template/Components/Card/NavCard";
import Link from "next/link";
import { useRouter } from "next/router";



const MobileNavigations = () => {
    const route = useRouter();


    return (
        <nav className="bg-gray-300 shadow-sm fixed bottom-0 w-full h-14 z-10">
            <div className="mx-auto max-w-7xl mt-2">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-1  text-center">
                        <div className="ml-6">
                            <NavCard icon="home" status_link={route.pathname === "/"} link="/" />
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <NavCard icon="truck" status_link={route.pathname === "/Jemput"}  link="/Jemput" />
                    </div>
                    <div className="col-span-1 text-center">
                        <NavCard icon="bell" status_link={route.pathname === "/Notif"} link="/Notif" />
                    </div>
                    <div className="col-span-1 text-center">
                        <NavCard icon="user" status_link={route.pathname === "/Profile"} link="/Profile" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavigations;


