import Image from "next/image";
import { useEffect, useState } from "react";
import HomeServices from "@/Services/Home";

const HomeCarousel = () => {
    const [imgSlide, setimgSlide] = useState([]);
    useEffect(() => {
        const getAllImageSlide = async () => {
            const response = await HomeServices.getAllSlideImage();
            setimgSlide(response.data.data);
        }

        getAllImageSlide();
    })

    return (
        <div className="ml-2 mr-2 mt-5 overflow-y-auto flex">
            {imgSlide && imgSlide.map((slide: any, index: number) => {
                return (
                    <>
                        <Image
                            src={slide.img_url}
                            width={506}
                            height={106}
                            alt={slide.name}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default HomeCarousel;