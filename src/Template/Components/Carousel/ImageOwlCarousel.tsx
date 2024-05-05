import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';


declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

type PropsType = {
    children: React.ReactNode
}

const ImageOwlCarousel = (prop: PropsType) => {
    const { children } = prop
    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
    });

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
        <>
            <OwlCarousel className="owl-theme" {...options} loop margin={10}>
                {children}
            </OwlCarousel>
        </>
    )
}

export default ImageOwlCarousel