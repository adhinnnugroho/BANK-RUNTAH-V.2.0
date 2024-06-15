import Image from "next/image";
import RuntahLogo from "@/Asset/img/logo/logo.png";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigations = () => {

    return (
        <nav className="bg-gray-800 h-44 w-screen">
            <div className="mx-auto ml-2 max-w-7xl px-2 py-2 sm:px-6 lg:px-8 pt-4">
                <Image
                    src={RuntahLogo}
                    width={56}
                    height={56}
                    alt=""
                />

                <div className="float-right -mt-10">
                    <FontAwesomeIcon icon={faBell} className="text-white text-3xl mr-4" />
                </div>
            </div>
        </nav>
    )
}

export default Navigations;