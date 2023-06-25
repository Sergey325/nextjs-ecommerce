"use client"

import {Product, User} from "@prisma/client";
import {useRouter} from "next/navigation";
import Image from "next/image"
import {AiOutlineHeart} from "react-icons/ai";
import Button from "@/app/components/Button";
import {FaShoppingCart} from "react-icons/fa";
import {useCallback} from "react";

type Props = {
    data: Product
    currentUser?: User | null
    onAction?: (id: string) => void //toChange
    actionLabel: string
};

const ProductCard = ({data, currentUser, onAction, actionLabel}: Props) => {
    const router = useRouter()

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            onAction?.(data.id);
        },[onAction, data.id])

    return (
        <div
            onClick={() => router.push(`/products/${data.id}`)}
            className="
                col-span-1 cursor-pointer group bg-gray-900 text-gray-400 rounded-xl flex flex-col gap-8 p-4
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
                    src={data.images[0]}
                    className="
                            object-cover
                            h-full
                            w-full
                            hover:scale-110
                            transition
                        "
                />
                <div className="absolute top-0 right-0">
                    <AiOutlineHeart size={24}/>
                </div>
            </div>
            <div className="font-semibold text-sm">
                {data.title}
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="font-semibold text-2xl my-[-15px] text-gray-300">
                    $ {data.price}$
                </div>
            </div>
            {data.immediatelyAvailable &&
                <div className="font-light text-sm text-gray-400 mb-[-10px]">
                    In stock and immediately available
                </div>
            }
            <Button label={actionLabel} outline onClick={handleCancel} icon={FaShoppingCart}/>
        </div>
    );
};

export default ProductCard;