"use client"

import {BiShoppingBag} from "react-icons/bi";
import {User} from "@prisma/client";
import {useMemo} from "react";

type Props = {
    currentUser?: User | null;
    onClick?: () => void;
};

const Cart = ({currentUser, onClick}: Props) => {
    const amountCart = useMemo(() => {
        return currentUser?.cart.length ?? 0;
    }, [currentUser?.cart.length]);

    return (
        <div className="group cursor-pointer relative hidden sm:block" onClick={onClick}>
            <BiShoppingBag size={32} className="text-gray-400 group-hover:text-gray-500" />
            <span className="
                text-gray-300 text-sm
                absolute top-[-10px] right-[-10px]
                rounded-full
                bg-gray-600
                px-1.5
            ">
                {amountCart ? amountCart : ""}
            </span>
        </div>
    );
};

export default Cart;