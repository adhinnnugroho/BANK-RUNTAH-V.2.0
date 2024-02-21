import instance from "@/Lib/axios/instance";


const trashService = {
    getAllTrashMenu: () => instance.get('/api/Menu/'),
    updateUsers: (id: string, data: any) => instance.put("/api/user/", {id, data}),
    deleteUsers: (id: string) => instance.delete(`/api/user/${id}`)
}

export default trashService;