const ListTrash = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                <div className="text-black ml-2 mt-10 text-4xl font-semibold">
                    Favorite
                </div>
                <div className="mt-7 flex justify-end">
                    <i className='bx bx-chevron-right mt-[6px] text-6xl'></i>
                </div>
            </div>
        </div>
    )
}

export default ListTrash