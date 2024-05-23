import MobileNavigations from "@/Template/Layouts/_mobile_navigations"

const ProfileComponent = () => {
    return (
        <>
            <nav className="bg-gray-800 h-32">
                <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">

                </div>
            </nav>

            <div className="bg-gray-300 ml-5 mr-5 -mt-10 h-20 rounded-lg">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <h5 className="ml-4 font-semibold pt-1 text-lg">
                            Runtah Coin
                        </h5>

                        <h6 className="ml-4 font-semibold pb-2 text-lg">
                        </h6>
                    </div>
                    <div className="col-span-1">
                        <div className="float-right mt-3 mr-5">
                        </div>
                    </div>
                </div>
            </div>
            <MobileNavigations />
        </>
    )
}

export default ProfileComponent