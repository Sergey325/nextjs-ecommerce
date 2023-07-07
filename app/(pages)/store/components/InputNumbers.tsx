import React from "react";
import {DebouncedFunc} from "lodash"

type Props = {
    onChange: DebouncedFunc<(e: any) => void>
    price?: boolean
    placeholder?: string
    id: string
};

const InputNumbers = ({onChange, price = false, placeholder = "", id}: Props) => {
    return (
        <div className="relative w-full ">
            <input
                id={id}
                placeholder={placeholder}
                type="number"
                min={0}
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
                onChange={onChange}
            />
            {
                price && <label className="absolute top-[7px] left-1">$</label>
            }
        </div>
    );
};

export default InputNumbers;