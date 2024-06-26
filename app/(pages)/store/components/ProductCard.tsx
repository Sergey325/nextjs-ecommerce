"use client"

import {Product, User} from "@prisma/client";
import {useRouter} from "next/navigation";
import Image from "next/image"
import Button from "@/app/components/Button";
import {FaShoppingCart} from "react-icons/fa";
import HeartButton from "@/app/(pages)/store/components/HeartButton";
import useCart from "@/app/hooks/useCart";
import {MdFavorite} from "react-icons/md";

type Props = {
    data: Product
    currentUser?: User | null
};

const ProductCard = ({data: product, currentUser}: Props) => {
    const router = useRouter()
    const {isInCart, updateCart} = useCart({product, currentUser})

    return (
        <div
            onClick={() => router.push(`store/product/${product.id}`)}
            className="
                col-span-1
                min-w-[200px]
                cursor-pointer
                group
                bg-gray-900 text-gray-400
                rounded-xl
                flex flex-col gap-8 p-4 flex-shrink-0
                select-text
            "
        >
            <div
                className="
                    aspect-square
                    w-full
                    relative
                    overflow-hidden
                "
            >
                <Image
                    fill
                    alt="Listings"
                    src={product.images[0]}
                    className="
                            object-cover
                            h-full
                            w-full
                            hover:scale-110
                            transition
                        "
                    sizes={"(max-width: 1200px) 50vw, 15vw"}
                    priority
                />
                <div className="absolute -top-[2px] -right-[2px] hover:opacity-80">
                    <HeartButton productId={product.id} currentUser={currentUser}/>
                </div>
            </div>
            <div className="font-semibold flex-grow text-sm">
                {product.title}
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="relative font-semibold text-2xl my-[-15px] text-gray-300 flex">
                    $ {(product.sale ? (product.price - product.price / 100 * product.sale).toFixed(2) : product.price.toFixed(1))}
                    {
                        product.sale &&
                        <span
                            className="
                                absolute
                                -top-0.5 -right-[50%]
                                text-sm text-gray-400
                                before:absolute before:inset-0
                                before:-rotate-[12deg]
                                before:translate-y-2 before:translate-x-[0.15rem]
                                before:border-t-2 before:border-red-500
                                beforer:w-full
                            "
                        >
                            {product.price.toFixed(2)}
                        </span>
                    }
                </div>
            </div>
            <div className="font-light text-sm text-gray-400 justify-self-start mb-[-10px] ">
                {product.immediatelyAvailable ? "Immediately available" : "Out of stock"}
            </div>
            <div className="">
                <Button label={isInCart ? "Remove" : "Add to Cart"} outline onClick={updateCart} icon={FaShoppingCart}/>
            </div>
        </div>
    );
};

export default ProductCard;