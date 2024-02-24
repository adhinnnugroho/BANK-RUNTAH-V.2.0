import MenuCard from "@/Components/Card/MenuCard";
import trashService from "@/Services/Trash";
import { useEffect, useState } from "react";


const ListMenu = () => {
    const [list_menu, setListMenu] = useState([]);

    useEffect(() => {
        const getTrashMenu = async () => {
            const response = await trashService.getAllTrashMenu();
            setListMenu(response.data.data);
        }

        getTrashMenu();
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
