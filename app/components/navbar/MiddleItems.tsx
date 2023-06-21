"use client"

import MiddleItem from "@/app/components/navbar/MiddleItem";
import {useRouter} from "next/navigation";

const MiddleItems = () => {
    const router = useRouter()

    return (
        <div className="hidden lg:flex items-center gap-4">
            <MiddleItem label="Store" action={() => {router.push("/store")}}/>
            <MiddleItem label="Delivery" action={() => {}}/>
            <MiddleItem label="About" action={() => {}}/>
        </div>
    );
};

export default MiddleItems;