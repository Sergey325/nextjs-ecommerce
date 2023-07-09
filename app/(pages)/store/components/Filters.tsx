"use client"

import CheckBox from "@/app/(pages)/store/components/CheckBox";
import {useSearchParams} from "next/navigation";
import {BsDash} from "react-icons/bs";
import {CategoryFilters} from "@/app/types";
import {categories} from "@/app/(pages)/store/components/Categories";
import {Product} from "@prisma/client";
import CustomFilters from "@/app/(pages)/store/components/CustomFilters";
import InputFilter from "@/app/(pages)/store/components/InputFilter";

type Props = {
    allProducts: Product[]
}

const Filters = ({allProducts}: Props) => {
    const params = useSearchParams()

    const defineCategoryFilters = () => {
        if (params && params.has("category")) {
            const category = params.get("category");
            return categories.find(item => item.label === category)?.properties as CategoryFilters
        }
        return []
    }

    return (
        <div className="flex flex-col gap-3 pt-4">
            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Price
                </div>
                <div className="flex items-center min-w-min text-gray-400 gap-2">
                    <InputFilter id={"priceMin"} type={"number"} placeholder={"min"} price/>
                    <BsDash size={40}/>
                    <InputFilter id={"priceMax"} type={"number"} placeholder={"max"} price/>
                </div>
            </div>

            <hr className="border-gray-700 w-full"/>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Availability
                </div>
                <CheckBox urlParameter="immediatelyAvailable" urlValue="true" label="In Stock" colorOnChecked={"text-gray-400"}/>
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