'use client'

import {IconType} from "react-icons";

type Props = {
    label: string
    onClick: (e: any) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
    gradient?: boolean
};

const Button = ({label, onClick, disabled, outline, small, icon: Icon, gradient}: Props) => {
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
                ${outline ? "bg-slate-900" : "bg-slate-400"}
                ${outline ? "shadow-[0_0_0_1px_rgba(100,116,139,1)]" : "border-slate-400"}
                ${outline ? "hover:shadow-[0_0_0_3px_rgba(100,116,139,1)]" : gradient ? "hover:shadow-[0_0_20px_rgba(137,63,237,0.70)]" : "hover:shadow-[0_0_20px_rgba(98,143,200,0.70)]"}
                ${outline ? "text-gray-300" : "text-gray-950"}
                ${gradient && "bg-gradient-to-br from-indigo-500 to-purple-600"}
                ${gradient && ""}
                ${small ? "py-1" : "py-3"}
                ${small ? "text-sm" : "text-base"}
                ${small ? "font-light" : "font-semibold"}
                select-none
            `}
        >
            <div className="flex items-center">
                {Icon && (
                    <Icon
                        size={24}
                        className="w-[30%] pl-2"
                    />
                )}
                <span className="w-full text-center text-nowrap">
                    {label}
                </span>
                {Icon && (
                    <div className="w-[30%]"/>
                )}
            </div>
        </button>
    );
};

export default Button;