import MenuCard from "@/Components/Card/MenuCard";
import prisma from "../../../prisma/client";
import { useEffect, useState } from "react";


const ListMenu = () => {
    const [list_menu, setListMenu] = useState([]);

    useEffect(() => {
        fetch('/api/Menu')
            .then(response => response.json())
            .then(data => setListMenu(data))
            .catch(error => console.error('Error fetching data:', error));
    })

    return (
        <div className="grid grid-cols-4 gap-5 ml-2 mr-2 mt-5">
            {list_menu && list_menu.map((user: any, index: number) => {
                return (
                    <div className="col-span-1" key={index}>
                        <MenuCard icons={user.icons} name={user.Name} />
                    </div>
                )
            })}
        </div>
    );
};

export default ListMenu;
