'use client'

import React from 'react';
import {IconType} from "react-icons";

type Props = {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
};

const Button = ({label, onClick, disabled, outline, small, icon: Icon}: Props) => {


    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70 disabled:cursor-not-allowed
                rounded-lg
                transition-all
                duration-300
                w-full
                ${outline ? "bg-slate-800" : "bg-slate-500"}
                ${outline ? "shadow-[0_0_0_1px_rgba(100,116,139,1)]" : "border-slate-500"}
                ${outline ? "hover:shadow-[0_0_0_3px_rgba(100,116,139,1)]" : "hover:drop-shadow-[0_5px_10px_rgba(98,143,200,0.90)]"}
                ${outline ? "text-gray-300" : "text-gray-900"}
                ${small ? "py-1" : "py-3"}
                ${small ? "text-sm" : "text-md"}
                ${small ? "font-light" : "font-semibold"}
                select-none
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                        absolute
                        left-4
                        top-3
                    "
                />
            )}
            {label}
        </button>
    );
};

export default Button;