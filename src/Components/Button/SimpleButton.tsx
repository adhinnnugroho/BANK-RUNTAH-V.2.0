type PropsType = {
    'type' : "button" | "submit" | "reset" | undefined,
    'children' : React.ReactNode,
    'className'?: string,
    'bg_color'?: string,
}

const SimpleButton = (prop: PropsType) => {
    const { type, children, bg_color, className } = prop
    const bgcolor = bg_color ?? "bg-blue-500"
    return (
        <button type={type} className={`text-white font-medium py-2 px-4 rounded-lg ${bgcolor} ${className}`}>
            {children}
        </button>
    )
}

export default SimpleButton;