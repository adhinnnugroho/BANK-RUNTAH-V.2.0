const MobileNavigations = () => {
    return (
        <nav className="bg-gray-300 shadow-sm fixed bottom-0 w-full h-14">
            <div className="mx-auto max-w-7xl mt-2">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-1  text-center">
                        <div className="bg-green-500 p-5 w-16 h-16 rounded-full ml-6 -mt-6 
                        border-4 border-gray-100 shadow flex justify-center items-center">
                            <i className="bx bxs-home  text-3xl text-white" />
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <i className='bx bx-search-alt-2  block text-3xl' />
                    </div>
                    <div className="col-span-1 text-center">
                        <i className="bx bxs-bank block text-3xl" />
                    </div>
                    <div className="col-span-1 text-center">
                        <i className="bx bxs-user block text-3xl" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavigations;