"use client"

import {User} from "@prisma/client";
import Container from "@/app/components/Container";
import CartItem from "@/app/components/store/CartItem";
import Button from "@/app/components/Button";
import {useCallback, useEffect, useState} from "react";
import {BasketItem} from "@/app/types";

type Props = {
    currentUser?: User | null
};

const CartClient = ({currentUser}: Props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        onChangeQuantity()
    }, [])

    const onChangeQuantity = useCallback(() => {
        const total = (currentUser?.cart as BasketItem[]).reduce((total, item) => {
            const itemCost = item.product.price * item?.quantity;
            return total + itemCost;
        }, 0);

        console.log(Math.round(total * 100) / 100)
        setTotalPrice(Math.round(total * 100) / 100)
    }, [currentUser?.cart])

    return (
        <Container>
            <div className="text-2xl md:text-4xl pt-10 px-5 lg:px-20 text-gray-400">
                Your Shopping Cart
                <div className="flex flex-col xl:flex-row gap-20 items-start">
                    <div className="flex flex-col w-full xl:w-4/6  pt-10 gap-3">
                        <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 text-sm sm:text-lg">
                            <span className="">Product</span>
                            <span className="hidden md:inline-block md:w-[18%] justify-self-end lg:text-center -mr-[28%]">Price</span>
                            <span className="md:w-[18%] justify-self-end text-center">Quantity</span>
                            <span className=" justify-self-end text-right">Total</span>
                        </div>
                        <hr className="border-gray-500 w-full"/>
                        {(currentUser?.cart as BasketItem[]).map((item: BasketItem) => (
                            <div key={item.product.id} className="flex flex-col gap-4">
                                <CartItem item={item} onChangeQuantity={onChangeQuantity}/>
                                <hr className="border-gray-500 w-full"/>
                            </div>
                        ))}
                    </div>
                    <div
                        className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 w-full md:w-[50%] xl:w-[30%] bg-gray-900 text-gray-400 self-start"
                    >
                        <h2 className="text-xl font-medium ">
                            Order summary
                        </h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-base sm:text-lg text-gray-400 max-w-[60%]">Subtotal</span>
                                <span className="font-light text-base sm:text-lg text-gray-300">${totalPrice}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-light text-sm sm:text-base text-gray-400 max-w-[60%]">Estimated shipping and handling costs</span>
                                <span className="font-light text-base sm:text-lg text-gray-300">Free</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base sm:text-lg">
                                <div className="text-sm sm:text-base font-medium">Order total</div>
                                <span className="text-xl sm:text-2xl text-gray-300">${totalPrice}</span>

                            </div>
                        </div>
                        <div className="text-sm sm:text-base pt-5">
                            <Button label="Checkout" onClick={() => {}} gradient/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CartClient;