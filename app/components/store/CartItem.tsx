"use client"

import {Product} from "@prisma/client";
import Image from "next/image"
import DropDown from "@/app/components/DropDown/DropDown";
import {BsFillTrashFill} from "react-icons/bs";
import {useCallback, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";

type Props = {
    item: { product: Product, quantity: number }
    onChangeQuantity: () => void
};

const CartItem = ({item, onChangeQuantity}: Props) => {
    const [totalPrice, setTotalPrice] = useState(Math.round(item.product.price * +item.quantity * 100) / 100)
    const router = useRouter()

    const options = [
        { value: "1", label: "1", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "2", label: "2", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "3", label: "3", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "4", label: "4", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "5", label: "5", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "6", label: "6", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "7", label: "7", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "8", label: "8", onSelected: function() { handleChangeQuantity(this.value) }},
        { value: "9", label: "9", onSelected: function() { handleChangeQuantity(this.value) }},
    ]

    const handleChangeQuantity = useCallback((quantity: string) => {
        try {
            item.quantity = +quantity;
            setTotalPrice(Math.round(item.product.price * +quantity * 100) / 100);

            axios
                .patch("/api/cart", item)
                .then(() => {
                    toast.success("Success!");
                })
                .catch(() => {
                    toast.error("Something went wrong.");
                })
                .finally(onChangeQuantity);

        } catch (error) {
            toast.error("Something went wrong");
        }
    }, [item, setTotalPrice]);

    const handleDeleteItem = useCallback(() => {
        try {
            axios
                .put("/api/cart", { productId: item.product.id })
                .then(() => {
                    toast.success("Success!");
                })
                .catch(() => {
                    toast.error("Something went wrong.");
                })
                .finally(() => {
                    router.refresh();
                });
        } catch (error) {
            toast.error("Something went wrong");
        }
    }, [item.product, router]);

    return (
        <div className="flex flex-col sm:flex-row w-full text-gray-400 text-sm md:text-lg justify-between items-center gap-5">
            <div
                className="flex w-full sm:w-1/2 gap-1 items-center cursor-pointer"
                onClick={() => router.push(`/store/product/${item.product.id}`)}
            >
                <Image src={item.product.images[0]} alt="productImage" height={100} width={100} className=""/>
                <span className="text-sm md:text-base">{item.product.title}</span>
            </div>
            <span className="hidden md:inline-block md:w-[15%]">${item.product.price}</span>
            <div className="flex justify-between items-center w-full sm:w-[45%] md:w-[30%] min-h-max min-w-max">
                <div className="flex items-center text-base gap-1 min-h-max min-w-max">
                    <DropDown
                        options={options}
                        placeholder={item.quantity.toString()}
                        mainStyles="border-1 border-gray-400 text-gray-400 hover:shadow-none text-base max-h-[200px] lg:max-h-min"
                        rounded
                        childStyle="bg-gray-900 "
                    />
                    <BsFillTrashFill
                        className="text-gray-400 hover:text-gray-500 transition cursor-pointer"
                        size={24}
                        onClick={handleDeleteItem}
                    />
                </div>
                <span className="text-xl text-gray-300 inline-block text-right ">${totalPrice}</span>
            </div>

        </div>
    );
};

export default CartItem;