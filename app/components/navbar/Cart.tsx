"use client"

import {BiShoppingBag} from "react-icons/bi";
import {User} from "@prisma/client";

type Props = {
    currentUser?: User | null
    onClick?: () => void
}

const Cart = ({currentUser, onClick}: Props) => {

    return (
        <div className="group cursor-pointer relative hidden sm:block" onClick={onClick}>
            <BiShoppingBag size={32} className="text-gray-400 group-hover:text-gray-500"/>
            <span className="
                text-gray-300 text-sm
                absolute top-[-10px] right-[-10px]
                rounded-full
                bg-gray-600
                px-1.5
            ">
                {currentUser?.cart?.length !== 0 && currentUser?.cart?.length}
            </span>
        </div>
    );
};

export default Cart;