"use client"

import {BsCpuFill, BsDeviceSsdFill, BsFan, BsGpuCard, BsMotherboardFill} from "react-icons/bs";
import ThirdSectionItem from "@/app/components/homePage/ThirdSectionItem";
import {FaMemory} from "react-icons/fa";

const items = [
    {
        icon: BsCpuFill,
        label: "Processors",
        linearGradient: "bg-gradient-to-br from-orange-400 to-amber-500",
        category: "Processors",
        iconColor: "#f97316",
    },
    {
        icon: BsMotherboardFill,
        label: "Motherboards",
        linearGradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
        category: "Motherboards",
        iconColor: "#818cf8",
    },
    {
        icon: BsGpuCard,
        label: "Graphics cards",
        linearGradient: "bg-gradient-to-br from-teal-400 to-purple-600",
        category: "GPUs",
        iconColor: "#06b6d4",
    },
    {
        icon: FaMemory,
        label: "Desktop Memory (RAM)",
        linearGradient: "bg-gradient-to-br from-yellow-500 to-purple-400",
        category: "RAM",
        iconColor: "#fdba74",
    },
    {
        icon: BsDeviceSsdFill,
        label: "Hard Drives",
        linearGradient: "bg-gradient-to-br from-green-500 to-purple-400",
        category: "Hard Drives",
        iconColor: "#10b981",
    },
    {
        icon: BsFan,
        label: "Processor Coolers",
        linearGradient: "bg-gradient-to-br from-red-500 to-purple-400",
        category: "CPU Coolers",
        iconColor: "#ec4899",
    },
]

const ThirdSection = () => {
    return (
        <div className="flex flex-wrap pt-20 gap-4">
            {items.map( item => (
                <ThirdSectionItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    linearGradient={item.linearGradient}
                    category={item.category}
                    iconColor={item.iconColor}
                />
            ))}
        </div>
    );
};

export default ThirdSection;