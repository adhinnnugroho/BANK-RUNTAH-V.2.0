import Image from "next/image";

const Navigations = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Image
                        src="/assets/img/logo/logo.png"
                        width={5000}
                        height={5000}
                        alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navigations;