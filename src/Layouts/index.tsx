import React from "react";
import Navigations from "./_navigations"


type PropsType = {
    'children': React.ReactNode
}

const AppLayouts = (prop: PropsType) => {
    const { children } = prop;
    return (
        <div>
            <Navigations />
            {children}
        </div>
    )
}

export default AppLayouts;