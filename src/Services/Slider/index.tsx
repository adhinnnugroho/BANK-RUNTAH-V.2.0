import instance from "@/Lib/axios/instance";


const slideService = {
    getAllSlideImage: () => instance.get('/api/Slider/Slide'),
}

export default slideService;