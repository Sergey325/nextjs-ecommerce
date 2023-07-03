"use client"

import {IconType} from "react-icons";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import qs from "query-string";
import GradientRadial from "@/app/components/GradientRadial";

type Props = {
    icon: IconType
    label: string
    selected?: boolean
};

const CategoryBox = ({icon: Icon, label, selected}: Props) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {

        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: "/store",
            query: updatedQuery
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
                min-w-[110px]
                ${selected ? 'border-b-gray-600' : "border-transparent"}
                ${selected ? 'text-gray-400' : 'text-gray-400'}
            `}
            onClick={handleClick}
        >
            {
                selected && (
                    <GradientRadial
                        size="w-[60px] h-[50px]"
                        gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
                        blur="blur-[45px]"
                        zIndex={"z-5"}
                    />
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