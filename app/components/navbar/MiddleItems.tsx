"use client"

import MiddleItem from "@/app/components/navbar/MiddleItem";

const MiddleItems = () => {

    return (
        <div className="hidden lg:flex items-center gap-4">
            <MiddleItem label="Store" action={() => {}}/>
            <MiddleItem label="Delivery" action={() => {}}/>
            <MiddleItem label="About" action={() => {}}/>
        </div>
    );
};

export default MiddleItems;