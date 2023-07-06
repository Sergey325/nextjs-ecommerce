"use client"

import CheckBox from "@/app/(pages)/store/components/CheckBox";
import React, {useCallback, useEffect, useState} from "react";
import qs from "query-string";
import {useRouter, useSearchParams} from "next/navigation";
import {BsDash} from "react-icons/bs";
import debounce from "lodash.debounce"
import {CategoryFilters, ProductItem} from "@/app/types";
import {categories} from "@/app/(pages)/store/components/Categories";
import {Product} from "@prisma/client";
import {log} from "util";
import CustomFilters from "@/app/(pages)/store/components/CustomFilters";

type Props = {
    manufacturers: string[],
    allProducts: Product[]
}

const Filters = ({manufacturers, allProducts}: Props) => {
    const params = useSearchParams()
    const router = useRouter()

    const defineCategoryFilters = useCallback(() => {
        if (params && params.has("category")) {
            const category = params.get("category");
            return categories.find(item => item.label === category)?.properties as CategoryFilters
        }
        return []
    }, [params, categories])

    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            [e.target.id]: e.target.value
        }

        if (!e.target.value) {
            delete updatedQuery[e.target.id];
        }

        const url = qs.stringifyUrl({
            url: "/store",
            query: updatedQuery
        }, {skipNull: true})

        router.push(url)
    }, [params, router])

    const debouncedPrice = debounce((e) => {
        handlePriceChange(e);
    }, 500);

    return (
        <div className="flex flex-col gap-3 pt-4">
            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Price
                </div>
                <div className="flex items-center min-w-min text-gray-400 gap-2">
                    <div className="relative w-full ">
                        <input
                            id={"priceMin"}
                            placeholder="min"
                            className="
                                pl-5
                                h-[40px]
                                text-base
                                border border-gray-800
                                focus:outline-0 appearance-none
                                bg-slate-950
                                placeholder:text-gray-500
                                w-full
                            "
                            onChange={debouncedPrice}
                        />
                        <label className="absolute top-[7px] left-1">$</label>
                    </div>
                    <BsDash size={40}/>
                    <div className="relative">
                        <input
                            id={"priceMax"}
                            placeholder="max"
                            className="
                                pl-5
                                h-[40px]
                                text-base
                                border border-gray-800
                                focus:outline-0 appearance-none
                                bg-slate-950
                                placeholder:text-gray-500
                                w-full
                            "
                            onChange={debouncedPrice}
                        />
                        <label className="absolute top-[7px] left-1">$</label>
                    </div>
                </div>
            </div>

            <hr className="border-gray-700 w-full"/>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Availability
                </div>
                <CheckBox urlParameter="immediatelyAvailable" urlValue="true" label="In Stock"
                          colorOnChecked={"text-gray-400"}/>
                {/*<CheckBox urlParameter="immediatelyAvailable" urlValue="false" label="Out of Stock" colorOnChecked={"text-gray-400"}/>*/}
            </div>

            <hr className="border-gray-700 w-full"/>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Manufacturer
                </div>
                <div className="flex flex-col gap-2 text-base max-h-[100px] overflow-y-auto">
                    {
                        Array.from(new Set(allProducts.map(product => product.manufacturer))).map(manufacturer => (
                            <div key={manufacturer}>
                                <CheckBox urlParameter="manufacturer" urlValue={manufacturer} label={manufacturer} colorOnChecked={"text-gray-400"}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <CustomFilters customFilters={defineCategoryFilters()} allProducts={allProducts}/>

        </div>
    );
};

export default Filters;