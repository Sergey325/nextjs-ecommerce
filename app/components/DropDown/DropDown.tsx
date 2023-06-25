"use client"

import React, {useCallback, useEffect, useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import DropDownItem from "@/app/components/DropDown/DropDownItem";


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
    mainStyles?: string
    options: Option[]
    childStyle?: string
    hrAfter?: Number[]
};

const DropDown = ({placeholder, body, paddingTopList, rounded, mainStyles, options, childStyle, hrAfter}: Props) => {
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
            onClick={() => {setIsOpen((value) => !value)}}
            className={`
                relative
                md:py-1 md:px-2
                border-[2px]
                flex flex-row items-center gap-3
                rounded-${rounded ? "full" : "none"}
                cursor-pointer
                hover:shadow-[0_0_20px_rgba(98,143,200,0.25)]
                transition
                text-md
                group
                select-none
                ${mainStyles}
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
                    rounded-${rounded ? "xl" : "none"}
                    shadow-md
                    w-full
                    overflow-hidden
                    right-0
                    top-7 md:top-9
                    text-md
                    text-gray-400
                    transition-all
                    duration-300
                    min-h-max
                    min-w-max
                    border-current
                    ${isOpen ? `translate-y-${paddingTopList} opacity-100 visible` : "translate-y-0 opacity-0 invisible"}
                `}
            >
                <div className="flex flex-col h-full cursor-pointer text-md border-current ">
                    {options.map((option, key) => (
                        (
                            <div key={key + option.value}>
                                {hrAfter?.includes(key) && (
                                    <hr className="border-gray-600"/>
                                )}
                                <DropDownItem

                                    label={option.label}
                                    onClick={() => handleSelectOption(option)}
                                    childStyle={childStyle}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
};

export default DropDown;