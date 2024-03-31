import Image from "next/image";
import RuntahLogo from "@/Asset/img/logo/logo.png";
import SimpleButton from "@/Template/Components/Button/SimpleButton";
import { useSession } from "next-auth/react";

const Navigations = () => {
    const { data: session } = useSession();

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
                    {!session ? (
                        <SimpleButton type="button" className="-mt-10 mr-2" link={"/Auth/login"}>
                            Login
                        </SimpleButton>
                    ) : (
                        'test'
                    )}
                </div>
            </div>
        </nav>
    )

}

export default Navigations;