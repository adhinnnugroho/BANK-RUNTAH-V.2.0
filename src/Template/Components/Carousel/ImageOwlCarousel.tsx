import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';



type PropsType = {
    'children': React.ReactNode,
    'autoPlay'?: boolean,
    'loop'?: boolean | undefined
}

const ImageOwlCarousel = (prop: PropsType) => {
    const { children, autoPlay = false, loop = false } = prop

    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
    });

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: loop,
        autoplay: autoPlay,
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
        <>
            <OwlCarousel className="owl-theme" {...options}  margin={10}>
                {children}
            </OwlCarousel>
        </>
    )
}

export default ImageOwlCarousel