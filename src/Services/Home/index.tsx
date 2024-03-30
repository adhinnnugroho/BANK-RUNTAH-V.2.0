import instance from "@/Lib/axios/instance";


const HomeServices = {
    getAllTrashMenu: () => instance.get('/api/Home/Menu/MainMenu'),
    getAllSlideImage: () => instance.get('/api/Home/Slider/Slider'),
}

export default HomeServices;