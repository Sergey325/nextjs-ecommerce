"use client"

import {useEffect, useState} from "react";
import {DebouncedFunc} from "lodash"
import {useSearchParams} from "next/navigation";

type Props = {
    onChange: DebouncedFunc<(e: any) => void>
    price?: boolean
    placeholder?: string
    id: string
};

const InputNumbers = ({onChange, price = false, placeholder = "", id}: Props) => {
    const params = useSearchParams()
    const [value, setValue] = useState("")

    useEffect(() => {
        const paramValue = params?.get(id);
        setValue(paramValue ?? "")
    }, [params, id]);

    const handleChange = (e: any) => {
        setValue(e.target.value)
        onChange(e)
    }

    return (
        <div className="relative w-full ">
            <input
                id={id}
                placeholder={placeholder}
                type="number"
                min={0}
                value={value}
                className={`
                        ${price ? "pl-5" : "pl-2"}
                        h-[40px]
                        text-base
                        border border-gray-800
                        focus:outline-0 appearance-none
                        bg-slate-950
                        placeholder:text-gray-500
                        w-full
                    `}
                onChange={handleChange}
            />
            {
                price && <label className="absolute top-[7px] left-1">$</label>
            }
        </div>
    );
};

export default InputNumbers;