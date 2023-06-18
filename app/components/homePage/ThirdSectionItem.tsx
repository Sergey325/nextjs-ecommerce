"use client"

import {IconType} from "react-icons";
import {useRouter} from "next/navigation";

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
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-50">
                <div
                    className={`
                        w-[120px] h-[100px] 
                        ${linearGradient}
                        rounded-full 
                        filter blur-[50px] 
                        mt-[-20%] 
                        group-hover:scale-125 
                        transition-all duration-700 bg-in
                        cursor-pointer`}
                    onClick={() => router.push(pushUrl)}
                ></div>
            </div>
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