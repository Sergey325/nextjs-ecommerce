"use client"

import React, {useCallback, useEffect, useRef, useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import DropDownItem from "@/app/components/DropDown/DropDownItem";
import useClickOutside from "@/app/hooks/useClickOutside";

type Option = {
    value: string;
    label: string;
    onSelected: () => void
};

type Props = {
    placeholder?: string
    body?: React.ReactElement
    rounded?: boolean
    mainStyles?: string
    options: Option[]
    childStyle?: string
    hrAfter?: Number[]
    overflowHidden?: boolean
    initialOption?: Option
};

const DropDown = ({placeholder, body, rounded, mainStyles, options, childStyle, hrAfter, overflowHidden = false, initialOption}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const dropDownRef = useRef(null)
    useClickOutside({ ref: dropDownRef, onClickOutside: () => setIsOpen(false) })

    const handleSelectOption = useCallback((option: Option) => {
        if(selectedOption?.value === option.value){
            return
        }
        setSelectedOption(option);
        option.onSelected();
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [selectedOption]);

    useEffect(() => {
        setSelectedOption(initialOption as Option)
    }, [initialOption]);
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
                touch-none
                ${mainStyles}
            `}
            ref={dropDownRef}
        >
            {
                body ? body
                : (
                    <div className="flex items-center justify-between pl-1 md:pl-0.5 w-full min-w-[50px]">
                        {selectedOption ? selectedOption.label : (<p className=" text-center">{placeholder}</p>)}
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
                    overflow-x-hidden
                    right-0
                    top-3/4
                    text-md
                    text-gray-400
                    transition-all
                    duration-300
                    ${overflowHidden ? "max-h-[200px] lg:h-fit": "h-fit"}
                    min-w-min
                    z-50
                    ${isOpen ? `translate-y-2 opacity-100 visible` : "translate-y-[-5] opacity-0 invisible"}
                `}
            >
                <div className="flex flex-col cursor-pointer text-md w-full">
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