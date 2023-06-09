'use client'

import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import {useCallback, useState} from "react";
import Search from "@/app/components/navbar/Search";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
    const registerModal = useRegisterModal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <Search/>
                <div
                    onClick={toggleOpen}
                    className="
                            p-4 md:py-1 md:px-2
                            border-[2px] border-slate-500
                            flex flex-row items-center gap-3
                            rounded-full
                            cursor-pointer
                            hover:shadow-md
                            transition
                            text-slate-500
                            text-xl
                        "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={null}/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-36
                        bg-slate-800
                        overflow-hidden
                        right-0
                        top-[52px]
                        text-md
                        text-gray-400
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {isOpen ? (
                            <>
                                <MenuItem
                                    onClick={() => {}}
                                    label="Basket"
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label="Orders"
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label="Favorites"
                                />
                                <hr className="border-slate-500"/>
                                <MenuItem
                                    onClick={() => {}}
                                    label="Logout"
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={() => {}}
                                    label="Login"
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Sign up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;