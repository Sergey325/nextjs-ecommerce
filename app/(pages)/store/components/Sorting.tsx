"use client"

import DropDown from "@/app/components/DropDown/DropDown";
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";

const Sorting = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [value, setValue] = useState("")

    useEffect(() => {
        const paramValue = params?.get("sorting");
        setValue(paramValue ?? "")
    }, [params]);

    const options = [
        { value: "Featured", label: "Featured", onSelected: function() { handleOptionClick(this.value) }},
        { value: "asc", label: "Price, low to high", onSelected: function() { handleOptionClick(this.value)}},
        { value: "desc", label: "Price, high to low", onSelected: function() { handleOptionClick(this.value) }},
    ]

    const handleOptionClick = (sorting: string) => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            sorting: sorting
        }

        const url = qs.stringifyUrl({
            url: '/store',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }

    return (
        <DropDown
            placeholder="Sort By"
            mainStyles="
                hover:shadow-none
                min-w-[180px]
                border-gray-800
                border-[1px]
                text-gray-500
                px-1
                z-10
            "
            childStyle={"bg-slate-900 hover:bg-slate-800 text-md drop-shadow-xl"}
            options={options}
            initialOption={options.find(option => option.value === value)}
        />
    );
};

export default Sorting;