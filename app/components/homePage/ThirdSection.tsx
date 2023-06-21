"use client"

import {BsCpuFill, BsDeviceSsdFill, BsFan, BsGpuCard, BsMotherboardFill} from "react-icons/bs";
import ThirdSectionItem from "@/app/components/homePage/ThirdSectionItem";
import {FaMemory} from "react-icons/fa";

const ThirdSection = () => {

    return (
        <div className="flex flex-wrap pt-20 gap-4">
            <ThirdSectionItem
                icon={BsCpuFill}
                label="Processor"
                linearGradient={"bg-gradient-to-br from-orange-400 to-amber-500"}
                pushUrl={"/"}
                iconColor="#f97316"
            />
            <ThirdSectionItem
                icon={BsMotherboardFill}
                label="Motherboard"
                linearGradient={"bg-gradient-to-br from-indigo-500 to-purple-600"}
                pushUrl={"/"}
                iconColor="#818cf8"
            />
            <ThirdSectionItem
                icon={BsGpuCard}
                label="Graphics cards"
                linearGradient={"bg-gradient-to-br from-teal-400 to-purple-600"}
                pushUrl={"/"}
                iconColor="#06b6d4"
            />
            <ThirdSectionItem
                icon={FaMemory}
                label="Desktop Memory (RAM)"
                linearGradient={"bg-gradient-to-br from-yellow-500 to-purple-400"}
                pushUrl={"/"}
                iconColor="#fdba74"

            />
            <ThirdSectionItem
                icon={BsDeviceSsdFill}
                label="Hard Drives"
                linearGradient={"bg-gradient-to-br from-green-500 to-purple-400"}
                pushUrl={"/"}
                iconColor="#10b981"
            />
            <ThirdSectionItem
                icon={BsFan}
                label="Processor Coolers"
                linearGradient={"bg-gradient-to-br from-red-500 to-purple-400"}
                pushUrl={"/"}
                iconColor="#ec4899"
            />
        </div>
    );
};

export default ThirdSection;