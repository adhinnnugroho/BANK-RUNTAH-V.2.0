import React from "react"

type PropsType = {
    'type': "button" | "submit" | "reset" | undefined,
    'children': React.ReactNode,
    'icons'?: string,
    onClick?: () => void,
    'className'?: string
}

const BorderButton = (prop: PropsType) => {
    const { children, icons, className, type, onClick } = prop
    return (
        <button type={type} onClick={onClick} className={`border border-green-600 rounded-lg py-2 px-4 flex text-xl  ${className}`}>
            <i className={`bx bxl-${icons} text-2xl mr-11`} />
            {children}
        </button>
    )
}

export default BorderButton