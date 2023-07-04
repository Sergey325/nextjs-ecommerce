import Image from "next/image";
import Carousel from "react-multi-carousel";
import GradientRadial from "@/app/components/GradientRadial";
import {Product} from "@prisma/client";
import {memo, useState} from "react";

type Props = {
    product: Product
};

const responsive = {
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1
    }
};

const responsiveOption = {
    desktop: {
        breakpoint: {
            max: 8000,
            min: 1024,
        },
        items: 4,
    },
}

const ProductImages = memo(({product}: Props) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0])

    return (
        <>
            <Image
                src={selectedImage}
                width={600} height={600}
                className="hidden lg:block object-contain mx-auto select-none pointer-events-none"
                alt="ProductImage"
                quality={100}
                priority
            />
            <div className="block lg:hidden pb-10 w-full z-20">
                <Carousel
                    responsive={responsive}
                    swipeable
                    draggable
                    showDots
                    infinite
                    keyBoardControl
                    dotListClass=""
                    customTransition="all 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    renderDotsOutside
                    itemClass="carousel-item-padding-40-px">
                    {product.images.map((slide) => (
                        <Image src={slide} key={slide} width={600} height={600} priority className="object-contain mx-auto select-none pointer-events-none" alt=""/>
                    ))}
                </Carousel>
            </div>
            <GradientRadial
                size="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
                gradient="bg-gradient-to-br from-blue-400/70 to-purple-500/70"
                blur="blur-[200px] md:blur-[300px]"
            />
            <div className="h-[120px] w-[100%] z-20">
                <Carousel
                    responsive={responsiveOption}
                    swipeable
                    draggable
                    infinite
                    keyBoardControl
                    customTransition="all 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-10-px">
                    {product.images.map((slide) => (
                        <Image
                            src={slide}
                            key={slide}
                            width={100} height={100}
                            priority
                            className="object-cover cursor-pointer hover:shadow-xl hover:opacity-70 rounded-xl border-gray-400 border-2"
                            alt="productImageOption"
                            onMouseEnter={() => setSelectedImage(slide)}
                        />
                    ))}
                </Carousel>
                {/*{product?.images.map( image => (*/}
                {/*    <Image*/}
                {/*        src={image}*/}
                {/*        key={image}*/}
                {/*        priority={true}*/}
                {/*        width={100} height={100}*/}
                {/*        alt="productImageOption"*/}
                {/*        className="object-cover cursor-pointer hover:shadow-xl hover:opacity-70 rounded-xl border-gray-400 border-2"*/}
                {/*        onMouseEnter={() => setSelectedImage(image)}*/}
                {/*    />*/}
                {/*))}*/}
            </div>
        </>
    );
});

ProductImages.displayName = 'ProductImages';

export default ProductImages;