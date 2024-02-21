import React from "react";
import Navigations from "./_navigations"
import MobileNavigations from "./_mobile_navigations";


type PropsType = {
    'children': React.ReactNode
}

const AppLayouts = (prop: PropsType) => {
    const { children } = prop;
    return (
        <div>
            <Navigations />
            {children}
            <MobileNavigations />
        </div>
    )
}

export default AppLayouts;