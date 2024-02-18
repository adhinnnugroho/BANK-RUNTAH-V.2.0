import Image from "next/image";
import RuntahLogo from "../../public/assets/img/logo/logo.png";
import SimpleButton from "@/Components/Button/SimpleButton";

const Navigations = () => {
    return (
        <nav className="bg-gray-800 h-28">
            <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
                <Image
                    src={RuntahLogo}
                    width={56}
                    height={56}
                    alt="Picture of the author"
                />

                <div className="float-right -mt-10">
                    <SimpleButton type="button" className="-mt-10 mr-2">
                        Login
                    </SimpleButton>
                </div>
            </div>
        </nav>
    )

}

export default Navigations;