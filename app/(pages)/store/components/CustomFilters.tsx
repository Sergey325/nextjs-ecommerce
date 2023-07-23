import CheckBox from "@/app/components/inputs/CheckBox";
import React from "react";
import {CategoryFilters} from "@/app/types";
import {Product} from "@prisma/client";
import InputFilter from "@/app/components/inputs/InputFilter";
import {BsDash} from "react-icons/bs";

type Props = {
    customFilters: CategoryFilters,
    allProducts: Product[],
};

const CustomFilters = ({customFilters, allProducts}: Props) => {
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
                            filter.title.includes(" (mm)") || filter.title.includes(" (dB)")
                            ?
                                <div className="flex items-center min-w-min text-gray-400 gap-2">
                                    <InputFilter type={"number"} id={"min" + filter.title.replace(/\s/g, "").slice(0, -4)} placeholder={"min"}/>
                                    <BsDash size={40}/>
                                    <InputFilter type={"number"} id={"max" + filter.title.replace(/\s/g, "").slice(0, -4)} placeholder={"max"}/>
                                </div>
                            :
                                <div className="flex flex-col gap-2 text-base max-h-[130px] overflow-y-auto">
                                    {Array.from(new Set(allProducts.map((product: any) => product.properties.find( (object: any) => object.title === filter.title)["value"]))).map((property: any) =>
                                        <React.Fragment key={property}>
                                            <CheckBox
                                                urlParameter={filter.title.replace(/\s/g, "").replace(".", "")}
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