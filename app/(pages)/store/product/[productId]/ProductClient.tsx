"use client"

import {Product, User} from "@prisma/client";
import "react-multi-carousel/lib/styles.css";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import {FaShoppingCart} from "react-icons/fa";
import useFavorite from "@/app/hooks/useFavorite";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import useCart from "@/app/hooks/useCart";
import ProductImages from "@/app/(pages)/store/product/components/ProductImages";
import ProductSpecification from "@/app/(pages)/store/product/components/ProductSpecification";
import Link from "next/link";

type Props = {
    product: Product
    currentUser?: User | null
};

const ProductClient = ({product, currentUser}: Props) => {
    const {hasFavorited, toggleFavorite} = useFavorite({productId: product.id, currentUser})
    const {isInCart, updateCart} = useCart({product, currentUser})


    const scrollToSpecs = () => {
        const element = document.getElementById('specs');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Container>
            <div className="flex flex-col pt-10 gap-10 px-3 sm:px-10 2xl:px-36 justify-center">
                <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">
                    <div className="relative flex flex-col items-center">
                        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 self-start">{product.title}</div>
                        <ProductImages product={product}/>
                    </div>
                    <div className="flex flex-col items-stretch gap-6 text-gray-400">
                        <div className="cursor-pointer text-4xl w-min" onClick={() => {}}>
                            <Link href={`/store?manufacturer=${product.manufacturer}`}>{product.manufacturer}</Link>

                        </div>

                        <hr className="border-gray-500 w-full"/>
                        <div className="flex flex-col ">
                            {product.sale > 0 &&
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
                                    </span>
                                </p>
                            }
                            <span className="text-4xl text-gray-300">${(product.price-product.price/100*product.sale).toFixed(2)}</span>
                            <span className="text-sm text-gray-500">incl. VAT plus shipping costs</span>
                        </div>
                        <hr className="border-gray-500 w-full"/>
                        <div className="flex flex-col gap-4 items-start text-sm lg:text-lg">
                            {product.properties.filter((property: any) => property?.title === "description").map( (property: any) => (
                                <span key={property.value} className="before:content-['•'] before:text-xl before:pr-2 ">{property.value}</span>
                            ))}
                            <span className="hover:underline underline-offset-4 cursor-pointer" onClick={scrollToSpecs}>more product information {">"}</span>
                        </div>
                        <hr className="border-gray-500 w-full"/>
                        <div className="flex flex-col flex-grow">
                            <span className="text-sm lg:text-xl text-gray-300">{product.immediatelyAvailable ? "In stock and immediately available" : "Out of stock"}</span>
                            <span className="text-xs lg:text-sm text-gray-500">{product.immediatelyAvailable ? "Delivery time 1-2 business days" : "Delivery time 3-5 business days"}</span>
                        </div>
                        <Button icon={FaShoppingCart} label={isInCart ? "Remove from cart" : "Into Cart"} outline  onClick={updateCart}/>
                        <Button icon={hasFavorited ? MdFavorite : MdFavoriteBorder} label={hasFavorited ? "Remove from wish list" : "Add to wish list"} onClick={toggleFavorite} outline />
                    </div>
                </div>
                <div className="flex flex-col pt-10 gap-10 text-gray-300 text-2xl 2xl:w-[80%]">
                    <div className="flex flex-col gap-5">
                        <hr className="border-gray-500 w-full"/>
                        Description
                        <div className="text-sm lg:text-lg text-gray-400">
                            {
                                product.description
                                    ?
                                    <div className="">
                                        {product.description}
                                    </div>
                                    :<div className="text-lg">
                                        The manufacturer did not provide a description of this product
                                    </div>
                            }
                        </div>
                        <hr className="border-gray-500 w-full"/>
                    </div>
                    <ProductSpecification product={product}/>
                </div>
            </div>
        </Container>
    );
};

export default ProductClient;