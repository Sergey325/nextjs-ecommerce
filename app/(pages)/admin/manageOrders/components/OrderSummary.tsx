"use client"

import {ItemOrder} from "@/app/types";
import DropDown from "@/app/components/DropDown/DropDown";
import React from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

type Props = {
    order: ItemOrder
};

const OrderSummary = ({order}: Props) => {
    const router = useRouter()

    const onChangeStatus = (orderId: string, status: string) => {
        if (order.status === status) {
            return
        }

        axios.patch(`/api/orders/${orderId}`,{status: status})
            .then(() => {
                toast.success("Order status successfully changed!");
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
    }

    const options = [
        { value: "On Process", label: "On Process", onSelected: function() { onChangeStatus(order.id, this.value) }},
        { value: "Dispatched", label: "Dispatched", onSelected: function() { onChangeStatus(order.id, this.value) }},
        { value: "Delivered", label: "Delivered", onSelected: function() { onChangeStatus(order.id, this.value) }},
    ]

    return (
        <div
            className="rounded-lg p-2 sm:p-4 lg:col-span-5 w-full xl:w-[30%] bg-gray-900 text-gray-400 self-start my-auto"
        >
            <h2 className="text-base md:text-xl font-medium ">
                Order summary
            </h2>

            <div className="mt-6 space-y-4 text-sx sm:text-base">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-400 max-w-[60%]">Created at</span>
                    <span className="font-light text-gray-300 text-right">{order.createdAt}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-light text-gray-400 max-w-[60%]">Status</p>
                    <DropDown
                        placeholder={order.status}
                        mainStyles="
                            hover:shadow-none
                            min-w-[180px]
                            bg-slate-800
                            border-2 border-slate-700
                            text-gray-400
                            bg-slate-800
                            px-1
                            z-10
                        "
                        childStyle={"bg-slate-900 hover:bg-gray-700 font-medium min-w-[150px] text-nowrap"}
                        options={options}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-light text-gray-400 max-w-[60%]">Subtotal</span>
                    <span className="font-light text-gray-300">${order.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-light text-gray-400 max-w-[60%]">Shipping and handling costs</span>
                    <span className="font-light text-gray-300">Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base sm:text-lg">
                    <div className="text-xs sm:text-base font-medium">Order total</div>
                    <span className="text-base lg:text-xl text-gray-300">${order.totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;