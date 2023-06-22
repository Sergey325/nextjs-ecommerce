"use client"

import React, {useCallback, useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import MenuItem from "@/app/components/navbar/MenuItem";
import {signOut} from "next-auth/react";

type Props = {
    placeholder?: string
    body?: React.ReactElement
    children?: React.ReactNode
    paddingTopList?: number
    rounded?: boolean
    childContainerStyles?: string
};

const DropDown = ({placeholder, body, children, paddingTopList, rounded, childContainerStyles}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div
            onClick={toggleOpen}
            className={`
                relative
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
                    <div className="flex gap-4 items-center">
                        {placeholder && placeholder}
                        <IoIosArrowDropdown className={`transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} size={26}/>
                    </div>
                )
            }
            {isOpen && (
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
                        `}
                >
                    <div className="flex flex-col cursor-pointer text-md">
                        <>
                            <MenuItem
                                onClick={() => {
                                }}
                                label="Basket"
                            />
                            <MenuItem
                                onClick={() => {
                                }}
                                label="Orders"
                            />
                            <MenuItem
                                onClick={() => {
                                }}
                                label="Favorites"
                            />
                            <hr className="border-slate-500"/>
                            <MenuItem
                                onClick={() => signOut()}
                                label="Logout"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;