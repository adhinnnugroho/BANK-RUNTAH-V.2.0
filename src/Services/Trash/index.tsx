import instance from "@/Lib/axios/instance";


const trashService = {
    getAllTrashMenu: () => instance.get('/api/Menu/'),
}

export default trashService;