import NavCard from "@/Components/Card/NavCard";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileNavigations = () => {
    const route = useRouter();
    return (
        <nav className="bg-gray-300 shadow-sm fixed bottom-0 w-full h-14">
            <div className="mx-auto max-w-7xl mt-2">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-1  text-center">
                        <div className="ml-6">
                            <NavCard icon="home" status_link={route.pathname === "/"} link="/" />
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <NavCard icon="search-alt-2" status_link={route.pathname === "/cari"} link="/cari" />
                    </div>
                    <div className="col-span-1 text-center">
                        <NavCard icon="bank" status_link={route.pathname === "/bank"} link="/bank" />
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


