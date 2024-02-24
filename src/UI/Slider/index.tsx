import Image from "next/image";
import MenuCard from "@/Components/Card/MenuCard";
import { useEffect, useState } from "react";
import slideService from "@/Services/Slider";
const SlidePromo = () => {
    const [imgSlide, setimgSlide] = useState([]);
    useEffect(() => {
        const getAllImageSlide = async () => {
            const response = await slideService.getAllSlideImage();
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

            {/* <Image
                src="/assets/img/slider/2.png"
                width={506}
                height={506}
                alt="Picture of the author"
            />
            <Image
                src="/assets/img/slider/3.png"
                width={506}
                height={506}
                alt="Picture of the author"
            /> */}
        </div>
    )
}

export default SlidePromo;