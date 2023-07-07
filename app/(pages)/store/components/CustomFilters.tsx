import CheckBox from "@/app/(pages)/store/components/CheckBox";
import React from "react";
import {CategoryFilters} from "@/app/types";
import {Product} from "@prisma/client";
import InputNumbers from "@/app/(pages)/store/components/InputNumbers";
import {BsDash} from "react-icons/bs";
import {DebouncedFunc} from "lodash";

type Props = {
    customFilters: CategoryFilters,
    allProducts: Product[],
    onInputChange: DebouncedFunc<(e: any) => void>
};

const CustomFilters = ({customFilters, allProducts, onInputChange}: Props) => {
    return (
        <>
            {(customFilters).map((filter) => (
                <React.Fragment key={filter.title}>
                    <hr className="border-gray-700 w-full" />
                    <div className="flex flex-col gap-1">
                        <div className="text-base font-semibold">
                            {filter.title}
                        </div>
                        {
                            filter.title.includes(" (mm)")
                            ?
                                <div className="flex items-center min-w-min text-gray-400 gap-2">
                                    <InputNumbers id={"min" + filter.title.replace(" ","").replace(" (mm)", "")} onChange={onInputChange} placeholder={"min"}/>
                                    <BsDash size={40}/>
                                    <InputNumbers id={"max" + filter.title.replace(" ","").replace(" (mm)", "")} onChange={onInputChange} placeholder={"max"}/>
                                </div>
                            :
                                <div className="flex flex-col gap-2 text-base max-h-[100px] overflow-y-auto">
                                    {Array.from(new Set(allProducts.map((product: any) => product.properties.find( (object: any) => object.title === filter.title)["value"]))).map((property: any) =>
                                        <React.Fragment key={property}>
                                            <CheckBox
                                                urlParameter={filter.title.replace(" ", "").replace(".", "")}
                                                urlValue={property}
                                                label={property}
                                                multiplyParameter
                                                colorOnChecked={"text-gray-400"}
                                            />
                                        </React.Fragment>
                                    )}
                                </div>
                        }
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default CustomFilters;