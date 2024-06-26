"use client"

import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {BiDollar} from "react-icons/bi";

type Props = {
    id: string
    label: string
    disabled?: boolean
    formatPrice?: boolean
    required: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    type?: string
    placeholder?: string
    onChange?: (value: string) => void
};

const Input = ({id, label, disabled, formatPrice, required, register, errors, type, placeholder, onChange}: Props) => {

    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar size={24} className="text-neutral-700 absolute top-5 left-2"/>
            )}
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder={placeholder || " "}
                type={type}
                onChange={(e) => onChange?.(e.target.value)}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    text-gray-300
                    bg-slate-800
                    border-2
                    border-slate-700
                    autofill:!bg-slate-700
                    placeholder-transparent
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    focus:placeholder-gray-500
                    ${formatPrice ? "pl-9" : "pl-4"}
                    ${errors[id] ? 'border-rose-500' : "border-neutral-300"}
                    ${errors[id] ? 'focus:border-rose-500' : "focus:drop-shadow-[0_0_10px_rgba(98,143,200,0.4)]"}
                `}
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                `}>
                {label}
            </label>
        </div>
    );
};

export default Input;