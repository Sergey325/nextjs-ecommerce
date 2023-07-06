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
        //change checkbox to input depending on property, mb add another field to properties
        <>
            {(customFilters).map((filter) => (
                <React.Fragment key={filter.title}>
                    <hr className="border-gray-700 w-full" />
                    <div className="flex flex-col gap-1">
                        <div className="text-base font-semibold">
                            {filter.title}
                        </div>
                        <div className="flex flex-col gap-2 text-base max-h-[100px] overflow-y-auto">
                            {Array.from(new Set(allProducts.map((product: any) => product.properties.find( (object: any) => object.title === filter.title)["value"]))).map((property: any) =>
                                <React.Fragment key={property}>
                                    <CheckBox
                                        urlParameter={filter.title}
                                        urlValue={property}
                                        label={property}
                                        colorOnChecked={"text-gray-400"}
                                    />
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default CustomFilters;