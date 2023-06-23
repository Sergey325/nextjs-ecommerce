"use client"

import DropDown from "@/app/components/DropDown/DropDown";
import React from "react";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";


const Sorting = () => {
    const router = useRouter();
    const params = useSearchParams();

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

        if (params?.get('sorting') === sorting) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/store',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }

    return (
        <DropDown placeholder="Filter By" paddingTopList={0} childContainerStyles="bg-gray-800 text-black" options={options}/>
    );
};

export default Sorting;