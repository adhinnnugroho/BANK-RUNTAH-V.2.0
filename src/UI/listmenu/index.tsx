import MenuCard from "@/Components/Card/MenuCard";
import prisma from "../../../prisma/client";
import { useEffect, useState } from "react";


const ListMenu = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5 ml-2 mr-2 mt-5">
                <div className="col-span-1">
                    <MenuCard icons="devices" name="Elektronik" />
                </div>
                {/* {list_menu && list_menu.map((user: any, index: number) => {
                return (
                    <div className="col-span-1" key={index}>
                        <MenuCard icons={user.icons}>
                            {user.name}
                        </MenuCard>
                    </div>
                )
            })} */}
            </div>
        </>
    );
};

export default ListMenu;
