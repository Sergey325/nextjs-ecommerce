import CheckBox from "@/app/(pages)/store/components/CheckBox";
import React from "react";
import {CategoryFilters} from "@/app/types";
import {Product} from "@prisma/client";

type Props = {
    customFilters: CategoryFilters,
    allProducts: Product[]
};

const CustomFilters = ({customFilters, allProducts}: Props) => {
    return (
        <>
            {(customFilters).map((filter, index) => (
                <>
                    {console.log(filter)}
                    <hr className="border-gray-700 w-full" />
                    <div className="flex flex-col gap-1">
                        <div className="text-base font-semibold">
                            {filter.title}
                        </div>
                        <div className="flex flex-col gap-2 text-base max-h-[100px] overflow-y-auto">
                            {allProducts.map( (product: any) => {
                                const propValue = product.properties.find( (object: any) => object.title === filter.title)["value"]
                                //сделать уникальные значения
                                return <React.Fragment key={propValue}>
                                    <div key={propValue}>
                                        <CheckBox
                                            urlParameter={filter.title}
                                            urlValue={propValue}
                                            label={propValue}
                                            colorOnChecked={"text-gray-400"}
                                        />
                                    </div>
                                </React.Fragment>
                            })}
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};

export default CustomFilters;