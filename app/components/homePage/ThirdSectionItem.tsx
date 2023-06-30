"use client"

import {IconType} from "react-icons";
import {useRouter} from "next/navigation";
import GradientRadial from "@/app/components/GradientRadial";

type Props = {
    icon: IconType
    iconColor: string
    label: string
    linearGradient: string
    pushUrl: string
    size?: number
};

const ThirdSectionItem = ({label, icon: Icon, linearGradient, pushUrl, iconColor , size=80}: Props) => {
    const router = useRouter()

    return (
        <div className="relative flex flex-col items-center group flex-[32%] px-4 pb-14" >
            <GradientRadial
                size="w-[120px] h-[100px]"
                gradient={linearGradient}
                blur="blur-[50px]"
                overflow={false}
                zIndex="z-20"
                styles="mt-[-20%] group-hover:scale-125 cursor-pointer"
                onClick={() => router.push(pushUrl)}
            />
            <div className="flex z-50 translate-y-0 group-hover:translate-y-[-15px] transition-all duration-700 cursor-pointer">
                <Icon size={size} color={iconColor} onClick={() => router.push(pushUrl)}/>
            </div>
            <div className="text-gray-300 text-xl text-center min-w-[250px] pt-4 font-medium">
                {label}
            </div>
        </div>
    );
};

export default ThirdSectionItem;