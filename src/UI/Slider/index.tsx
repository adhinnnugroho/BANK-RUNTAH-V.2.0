import Image from "next/image";
const SlidePromo = () => {
    return (
        <div className="ml-2 mr-2 mt-5 overflow-y-auto flex">
            <Image
                src="/assets/img/slider/1.png"
                width={506}
                height={106}
                alt="Picture of the author"
            />
            <Image
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
            />
        </div>
    )
}

export default SlidePromo;