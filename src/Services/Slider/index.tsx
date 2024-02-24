import instance from "@/Lib/axios/instance";


const slideService = {
    getAllSlideImage: () => instance.get('/api/slide'),
}

export default slideService;