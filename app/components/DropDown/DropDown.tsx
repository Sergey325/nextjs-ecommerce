"use client"

import React, {useCallback, useEffect, useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import MenuItem from "@/app/components/navbar/MenuItem";


type Option = {
    value: string;
    label: string;
    onSelected: () => void
};

type Props = {
    placeholder?: string
    body?: React.ReactElement
    paddingTopList?: number
    rounded?: boolean
    childContainerStyles?: string
    options: Option[];
};

const DropDown = ({placeholder, body, paddingTopList, rounded, childContainerStyles, options}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleSelectOption = useCallback((option: Option) => {
        setSelectedOption(option);
        option.onSelected();
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [selectedOption]);
    return (
        <div
            onClick={() => {
                setIsOpen((value) => !value)
            }}
            className={`
                relative
                w-full
                px-1 md:py-1 md:px-2
                border-[2px] border-slate-500
                flex flex-row items-center gap-3
                rounded-${rounded ? "full" : "none"}
                cursor-pointer
                hover:shadow-[0_0_20px_rgba(98,143,200,0.25)]
                transition
                text-slate-500
                text-md
                group
            `}
        >
            {
                body ? body
                    : (
                        <div className="flex items-center justify-between w-full">
                            {selectedOption ? selectedOption.label : (<p>{placeholder}</p>)}
                            <IoIosArrowDropdown
                                className={`transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} size={26}/>
                        </div>
                    )
            }

            <div
                    className={`
                      absolute
                      ${childContainerStyles}
                      rounded-${rounded ? "xl" : "none"}
                      shadow-md
                      w-full
                      bg-slate-800
                      overflow-hidden
                      right-0
                      top-7 md:top-9
                      text-md
                      text-gray-400
                      transition-all
                        duration-100
                        min-h-max
                        min-w-max
                      ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"}
                    `}
                >
                    <div className="flex flex-col h-full cursor-pointer text-md">
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                label={option.label}
                                onClick={() => handleSelectOption(option)}
                            />
                        ))}
                    </div>
                </div>

        </div>
    );
};

export default DropDown;