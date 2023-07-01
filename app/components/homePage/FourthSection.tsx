import {RiRefund2Line, RiTruckFill} from "react-icons/ri";
import {FaCoins} from "react-icons/fa";
import {TbDiscount} from "react-icons/tb";
import React from "react";
import FourthSectionItem from "@/app/components/homePage/FourthSectionItem";
import GradientRadial from "@/app/components/GradientRadial";

const items = [
    {
        icon: RiTruckFill,
        title: "Free Delivery",
        subtitle: "Free shipping on all"
    },
    {
        icon: FaCoins,
        title: "Money Return",
        subtitle: "Back guarantee in 7 days"
    },
    {
        icon: TbDiscount,
        title: "Member Discount",
        subtitle: "On every order over $130.00"
    },
    {
        icon: RiRefund2Line,
        title: "Return Policy",
        subtitle: "Support 24 hours a day"
    },
]

const FourthSection = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-center w-[80%] gap-20">
            <div className="w-full xl:w-1/2 xl:pr-5 pr-0 3xl:pl-20">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-gray-300 text-left">
                    Exceptional Service, Attention to Detail: Your Satisfaction is Our Priority
                </h1>
                <p className="text-gray-400 text-md lg:text-lg xl:text-xl 2xl:text-2xl text-left pt-5">
                    Experience personalized assistance and seamless support as we go the extra mile to ensure your complete satisfaction
                </p>
            </div>
            <div className="relative flex justify-center w-full xl:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-14">
                    {items.map( item => (
                        <FourthSectionItem key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle}/>
                    ))}
                </div>
                <GradientRadial
                    size="w-1/2 h-1/2"
                    gradient="bg-gradient-to-br from-blue-400/70 to-purple-500/70"
                    blur="blur-[150px]"
                />
            </div>
        </div>
    );
};

export default FourthSection;