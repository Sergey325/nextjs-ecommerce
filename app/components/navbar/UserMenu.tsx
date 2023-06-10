'use client'

import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import {useCallback, useState} from "react";
import Search from "@/app/components/navbar/Search";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {User} from "@prisma/client";
import {signOut} from "next-auth/react";

type Props = {
    currentUser?: User | null
}

const UserMenu = ({currentUser}: Props) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

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
                            hover:shadow-[0_0_20px_rgba(98,143,200,0.25)]
                            transition
                            text-slate-500
                            text-xl
                        "
                >
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
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
                        {currentUser ? (
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
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
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