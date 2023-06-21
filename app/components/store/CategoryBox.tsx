"use client"

import {IconType} from "react-icons";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import qs from "query-string";

type Props = {
    icon: IconType
    label: string
    selected?: boolean
    gradient: string
};

const CategoryBox = ({icon: Icon, label, selected, gradient}: Props) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        const query  = {
            category: label
        }

        const url = qs.stringifyUrl({
            url: "/store",
            query: query
        }, {skipNull: true})

        router.push(url)
    }, [label, params, router])

    return (
        <div
            className={`
                relative
                flex flex-col
                items-center justify-center
                gap-2
                p-3
                border-b-2
                hover:text-gray-600
                transition
                cursor-pointer
                ${selected ? 'border-b-gray-600' : "border-transparent"}
                ${selected ? 'text-gray-400' : 'text-gray-400'}
            `}
            onClick={handleClick}
        >
            {
                selected && (
                    <div className="absolute inset-0 flex items-center justify-center z-50">
                        <div
                            className={`
                            w-[60px] h-[50px] 
                            ${gradient}
                            rounded-full 
                            filter blur-[45px] 
                            transition-all duration-700 bg-in
                            cursor-pointer`}
                        ></div>
                    </div>
                )
            }

            <Icon size={30}/>
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;