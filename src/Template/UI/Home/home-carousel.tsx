import React, { useEffect, useState } from 'react';

import Image from "next/image";
import HomeServices from "@/Core/Services/Home";
import dynamic from 'next/dynamic';

const HomeCarousel = () => {
    const [carouselImage, setCarouselImage] = useState([]);

    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
    });

    useEffect(() => {
        const getAllImageSlide = async () => {
            const fetchingAllImage = await HomeServices.getAllSlideImage();
            const resultFetchingAllImageCaraousel = await fetchingAllImage.data.data;
            setCarouselImage(resultFetchingAllImageCaraousel);
        }

        getAllImageSlide();
    }, [])

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };

    return (
        <div className="ml-2 mr-2 mt-5  overflow-y-auto flex">
            <OwlCarousel className="owl-theme" {...options} loop margin={10}>
                {carouselImage && carouselImage.map((slide: any, index: number) => {
                    return (
                        <div key={index} className="lg:ml-2 lg:w-auto">
                            <div className="item ">
                                <Image
                                    src={slide.img_url}
                                    width={506}
                                    height={106}
                                    alt={slide.name}
                                />
                            </div>
                        </div>
                    )
                })}
            </OwlCarousel>
        </div>
    )
}

export default HomeCarousel;


