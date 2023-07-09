import {IconType} from "react-icons";
import GradientRadial from "@/app/components/GradientRadial";
import Link from "next/link";

type Props = {
    icon: IconType
    iconColor: string
    label: string
    linearGradient: string
    category: string
    size?: number
};

const ThirdSectionItem = ({label, icon: Icon, linearGradient, category, iconColor , size=80}: Props) => {
    return (
        <div className="relative flex flex-col items-center group flex-[32%] px-4 pb-14" >
            <Link href={{pathname: "/store", query:{ category: category },}}>
                <GradientRadial
                    size="w-[120px] h-[100px]"
                    gradient={linearGradient}
                    blur="blur-[50px]"
                    overflow={false}
                    zIndex="z-20"
                    styles="mt-[-20%] group-hover:scale-125 cursor-pointer"

                />
            </Link>
            <div className="flex z-50 translate-y-0 group-hover:translate-y-[-15px] transition-all duration-700 cursor-pointer">
                <Link href={{pathname: "/store", query:{ category: category },}}>
                    <Icon size={size} color={iconColor}/>
                </Link>
            </div>
            <div className="text-gray-300 text-xl text-center min-w-[250px] pt-4 font-medium">
                {label}
            </div>
        </div>
    );
};

export default ThirdSectionItem;