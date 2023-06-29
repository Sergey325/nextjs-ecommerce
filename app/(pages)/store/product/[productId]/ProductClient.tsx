"use client"

import {Product} from "@prisma/client";
import {useState} from "react";
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";

type Props = {
    product: Product
};

const responsive = {
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        partialVisibilityGutter: 35,
        items: 1
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        partialVisibilityGutter: 0,
        items: 1
    }
};

const ProductClient = ({product}: Props) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0])

    const lines = [
        "AMD Radeon™ RX 6700 XT",
        "12 GB GDDR6 (256bit), Connection via PCIe 4.0",
        "Active Cooling (Tri-Slot), RGB illuminated",
        "1x HDMI, 2x DisplayPort",
        "Power Supply: 1 x 6pin, 1 x 8pin, 650 W PSU recommended",
        "Card length approx. 295 mm"
    ]

    return (
        <Container>
            <div className="flex flex-col pt-10 gap-10 px-10 2xl:px-36 justify-center">

                <div className="flex flex-col lg:flex-row justify-between ">
                    <div className="relative flex flex-col items-center gap-4">
                        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300">{product.title}</div>
                        <Image
                            src={selectedImage}
                            width={600} height={600}
                            className="object-contain mx-auto select-none pointer-events-none"
                            alt="ProductImage"
                            quality={100}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div
                                className={`
                                w-[300px] h-[300px] 
                                bg-gradient-to-br from-blue-400/70 to-purple-500/70
                                rounded-full 
                                filter blur-[300px] 
                                transition-all duration-700 bg-in
                                cursor-pointer`}
                                ></div>
                        </div>
                        <div className="hidden lg:flex flex-row gap-4 z-20">
                            {product?.images.map( image => (
                                <Image
                                    src={image}
                                    key={image}
                                    priority={true}
                                    width={100} height={100}
                                    alt="productImageOption"
                                    className="object-cover cursor-pointer hover:shadow-xl hover:opacity-70 rounded-xl border-gray-400 border-2"
                                    onMouseEnter={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col text-gray-400 text-lg gap-20">
                        <div className="flex flex-col gap-6 text-gray-400">
                            <div className="cursor-pointer text-4xl">{product.manufacturer}</div>
                            <hr className="border-gray-500 w-full"/>
                            <div className="flex flex-col ">
                                {product.sale &&
                                    <p className="text-sm">
                                        {"Old price "}
                                        <span className="
                                            relative
                                            text-2xl text-gray-400
                                            before:absolute before:inset-0
                                            before:-rotate-[12deg]
                                            before:translate-y-3 before:translate-x-1
                                            before:border-t-2 before:border-red-500
                                            beforer:w-full"
                                        >
                                            {product.price}
                                        </span></p>
                                }
                                <span className="text-4xl text-gray-300">${product.price-product.price/100*product.sale}</span>
                                <span className="text-sm text-gray-500">incl. VAT plus shipping costs</span>
                            </div>
                            <hr className="border-gray-500 w-full"/>
                            <div className="flex flex-col gap-4 items-start text-lg">
                                {lines.map( line => (
                                    <span key={line} className="before:content-['•'] before:text-xl before:pr-2">{line}</span>
                                ))}
                                <span className="hover:underline underline-offset-4 cursor-pointer">more product information {">"}</span>
                            </div>
                            <hr className="border-gray-500 w-full"/>
                            <div className="flex flex-col ">
                                <span className="text-xl text-gray-300">{product.immediatelyAvailable && "In stock and immediately available"}</span>
                                <span className="text-sm text-gray-500">Delivery time 1-2 business days</span>
                            </div>
                            <Button label="Into Cart" outline />
                            <Button label="Add to wish list" outline />
                        </div>


                    </div>

                </div>

            </div>
        </Container>
    );
};

export default ProductClient;