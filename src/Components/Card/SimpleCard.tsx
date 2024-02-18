type PropsType = {
    'title'? : string,
    'children' : React.ReactNode
}

const SimpleCard = (prop: PropsType) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{prop.title}</div>
                <p className="text-gray-700 text-base">
                    {prop.children}
                </p>
            </div>
        </div>
    )
}
