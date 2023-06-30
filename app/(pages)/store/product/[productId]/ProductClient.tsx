"use client"

import {Product, User} from "@prisma/client";
import {Fragment, useState} from "react";
import "react-multi-carousel/lib/styles.css";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import {AiOutlineCaretDown} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import useFavorite from "@/app/hooks/useFavorite";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import useCart from "@/app/hooks/useCart";
import ProductImages from "@/app/components/store/ProductImages";

type Props = {
    product: Product
    currentUser?: User | null
};

const ProductClient = ({product, currentUser}: Props) => {
    const {hasFavorited, toggleFavorite} = useFavorite({productId: product.id, currentUser})
    const {isInCart, updateCart} = useCart({product, currentUser})

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Container>
            <div className="flex flex-col pt-10 gap-10 px-3 sm:px-10 2xl:px-36 justify-center">
                <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">

                    <ProductImages product={product}/>

                    <div className="flex flex-col text-gray-400 text-sm lg:text-lg gap-20">
                        <div className="flex flex-col gap-6 text-gray-400">

                            {/*TO ADD FUNCTION*/}
                            <div className="cursor-pointer text-4xl w-min" onClick={() => {}}>
                                {product.manufacturer}
                            </div>

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
                                        </span>
                                    </p>
                                }
                                <span className="text-4xl text-gray-300">${product.price-product.price/100*product.sale}</span>
                                <span className="text-sm text-gray-500">incl. VAT plus shipping costs</span>
                            </div>
                            <hr className="border-gray-500 w-full"/>
                            <div className="flex flex-col gap-4 items-start text-sm lg:text-lg">
                                {product.properties.filter((property: any) => property?.title === "description").map( (property: any) => (
                                    <span key={property.value} className="before:content-['•'] before:text-xl before:pr-2 ">{property.value}</span>
                                ))}
                                <span className="hover:underline underline-offset-4 cursor-pointer">more product information {">"}</span>
                            </div>
                            <hr className="border-gray-500 w-full"/>
                            <div className="flex flex-col">
                                <span className="text-sm lg:text-xl text-gray-300">{product.immediatelyAvailable ? "In stock and immediately available" : "Out of stock"}</span>
                                <span className="text-xs lg:text-sm text-gray-500">{product.immediatelyAvailable ? "Delivery time 1-2 business days" : "Delivery time 3-5 business days"}</span>
                            </div>
                            <Button icon={FaShoppingCart} label={isInCart ? "Remove from cart" : "Into Cart"} outline  onClick={updateCart}/>
                            <Button icon={hasFavorited ? MdFavorite : MdFavoriteBorder} label={hasFavorited ? "Remove from wish list" : "Add to wish list"} onClick={toggleFavorite} outline />
                        </div>
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consequatur distinctio eveniet, explicabo fugiat inventore, iste laboriosam magnam nesciunt nostrum pariatur perferendis quia, quidem quisquam ratione recusandae repellendus sint temporibus vero! Ad atque libero necessitatibus nulla numquam, quasi voluptatibus.
                                    </div>
                                    :<div className="text-lg">
                                        The manufacturer did not provide a description of this product
                                    </div>
                            }
                        </div>
                        <hr className="border-gray-500 w-full"/>
                    </div>
                    <div className={`
                        relative
                        flex flex-col gap-3
                        overflow-y-hidden
                        transition-all
                        duration-700
                        ${isExpanded ? "h-auto" : "h-[560px]"}
                        ${isExpanded ? "after:hidden" : "after:absolute"}
                        after:content-['']
                        after:bottom-0
                        after:w-full
                        after:h-[150px]
                        after:bg-gradient-to-b
                        after:from-transparent
                        after:to-gray-900
                        `}>
                        Specification
                        {product.properties.filter((property: any) => property?.title !== "description").map( (property: any) => (
                            <Fragment key={property.value + property.title} >
                                <div className="grid grid-cols-2 justify-between text-sm lg:text-lg text-gray-400 ">
                                    <span className="">
                                        {property.title}
                                    </span>
                                    <span>
                                       {property.value}
                                   </span>
                                </div>
                                <hr className="border-gray-500 w-full"/>
                            </Fragment>
                        ))}
                    </div>
                    <AiOutlineCaretDown
                        size={40}
                        className={`mx-auto -mt-12 text-gray-600 hover:text-gray-800 cursor-pointer transition-all ${isExpanded ? "rotate-180" : "rotate-0"}`}
                        onClick={() => setIsExpanded(value => !value)}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ProductClient;