"use client"

import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";
import debounce from "lodash.debounce";

type Props = {
    price?: boolean
    placeholder?: string
    id: string
    styles?: string
    type: string
    debounced?: boolean
};

const InputFilter = ({price = false, placeholder = "", id, styles, type, debounced = false}: Props) => {
    const params = useSearchParams()
    const router = useRouter()
    const [value, setValue] = useState("")

    useEffect(() => {
        const paramValue = params?.get(id);
        setValue(paramValue ?? "")
    }, [params, id]);

    const changeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    }

    const debouncedChange = debounce((e) => {
        changeUrl(e);
    }, 800);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.includes("-")){
            return setValue("")
        }
        setValue(e.target.value)
        if(debounced) {
            debouncedChange(e)
        }
        else{
            changeUrl(e)
        }
    }

    return (
        <div className="relative w-full">
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                min={0}
                value={value}
                className={`
                        ${price ? "pl-5" : "pl-2"}
                        appearance-none
                        outline-none
                        ${styles ? styles : "h-[40px] text-base border border-gray-800 bg-slate-950 placeholder:text-gray-500 w-full"}
                    `}
                onChange={handleChange}
            />
            {
                price && <label className="absolute top-[7px] left-1">$</label>
            }
        </div>
    );
};

export default InputFilter;