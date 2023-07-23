"use client"

import {Product, User} from "@prisma/client";
import Container from "@/app/components/Container";
import CartItem from "@/app/(pages)/cart/components/CartItem";
import {useCallback, useEffect, useState} from "react";
import {BasketItem} from "@/app/types";
import CartSummary from "@/app/(pages)/cart/components/CartSummary";
import axios from "axios";

type Props = {
    currentUser?: User | null
};

export const calculateTotalPrice = (product: Product, quantity: number): number => Math.round((product.price-product.price/100*product.sale) * +quantity * 100) / 100

const CartClient = ({currentUser}: Props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        onChangeQuantity()
    }, [currentUser?.cart])

    const onChangeQuantity = useCallback(() => {
        const total = (currentUser?.cart as BasketItem[]).reduce((total, item) => {
            const itemCost = calculateTotalPrice(item.product, item.quantity);
            return total + itemCost;
        }, 0);

        setTotalPrice(Math.round(total * 100) / 100)
    }, [currentUser?.cart])

    const onCheckout = async () => {
        const response = await axios.post("api/checkout", currentUser?.cart as BasketItem[])
        window.location = response.data.url
    }

    return (
        <Container>
            <div className="text-2xl md:text-4xl pt-10 px-5 lg:px-20 text-gray-400">
                Your Shopping Cart
                <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 items-start">
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
                    <CartSummary totalPrice={totalPrice} onCheckout={onCheckout}/>
                </div>
            </div>
        </Container>
    );
};

export default CartClient;