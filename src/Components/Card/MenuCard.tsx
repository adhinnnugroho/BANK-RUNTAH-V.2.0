type PropsType = {
    'icons'?: string,
    'children': React.ReactNode
}

const MenuCard = (prop: PropsType) => {
    return (
        <div className="">
            <div className="border border-gray-500 text-center rounded-lg">
                <i className={`bx bxs-${prop.icons} block text-3xl`}></i>
            </div>
            <h5 className="text-center">
                {prop.children}
            </h5>
        </div>
    )
}

export default MenuCard;