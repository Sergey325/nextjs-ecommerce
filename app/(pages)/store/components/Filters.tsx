"use client"

import CheckBox from "@/app/(pages)/store/components/CheckBox";
import React from "react";

type Props = {
    manufacturers: string[]
}

const Filters = ({manufacturers}: Props) => {

    return (
        <div className="flex flex-col gap-3 pt-4">
            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Price
                </div>
                <div className="flex justify-between min-w-min text-gray-400 gap-5">
                    <div className="relative w-full ">
                        <input
                            type=""
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
                        />
                        <label className="absolute top-[7px] left-1">$</label>
                    </div>
                    <div className="relative">
                        <input
                            type=""
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
                <CheckBox urlParameter="immediatelyAvailable" urlValue="true" label="In Stock" colorOnChecked={"text-gray-400"}/>
                {/*<CheckBox urlParameter="immediatelyAvailable" urlValue="false" label="Out of Stock" colorOnChecked={"text-gray-400"}/>*/}
            </div>

            <hr className="border-gray-700 w-full"/>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold">
                    Manufacturer
                </div>
                <div className="flex flex-col gap-2 text-base max-h-[100px] overflow-y-auto">
                    {
                        manufacturers.map(manufacturer => (
                            <div key={manufacturer}>
                                <CheckBox urlParameter="manufacturer" urlValue={manufacturer} label={manufacturer} colorOnChecked={"text-gray-400"} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <hr className="border-gray-700 w-full"/>

        </div>
    );
};

export default Filters;