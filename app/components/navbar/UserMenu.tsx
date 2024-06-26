'use client'

import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import {useEffect, useMemo, useState} from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {User} from "@prisma/client";
import {signOut} from "next-auth/react";
import DropDown from "@/app/components/DropDown/DropDown";
import Cart from "@/app/components/navbar/Cart";
import {useRouter} from "next/navigation";
import ToolTip from "@/app/components/ToolTip";
import useSupportModal from "@/app/hooks/useSupportModal";
import {getUserMenuHrPositions} from "@/app/utils/getUserMenuHrPositions";

type Props = {
    currentUser?: User | null
}

const UserMenu = ({currentUser}: Props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const supportModal = useSupportModal()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth]);

    const options = useMemo(() => {
        let options
        if(currentUser){
            options = [
                { value: "Cart", label: "Cart", onSelected: () => {router.push("/cart")}},
                { value: "Orders", label: "Orders", onSelected:  () => {router.push("/orders")}},
                { value: "Favorites", label: "Favorites", onSelected: () => {router.push("/favorites")}},
                { value: "Logout", label: "Logout", onSelected: signOut}
            ]
            if (currentUser.role === "admin") {
                options.splice(
                    3,
                    0,
                    { value: "ManageProducts", label: "Manage Products", onSelected:() => {router.push("/admin/manageProducts?tab=AllProducts")}},
                    { value: "ManageOrders", label: "Manage Orders", onSelected: () => {router.push("/admin/manageOrders?status=All")}}
                )
            }
        }
        else {
            options = [
                { value: "Login", label: "Login", onSelected: loginModal.onOpen},
                { value: "Sign up", label: "Sign up", onSelected: registerModal.onOpen},
            ]
        }
        if(windowWidth < 768){
            options = [
                { value: "Store", label: "Store", onSelected: () => {router.push("/store")}},
                { value: "Home", label: "Home", onSelected:  () => {router.push("/")}},
                { value: "Support", label: "Support", onSelected: supportModal.onOpen},...options,
            ]
        }

        return options
    }, [currentUser, windowWidth, router, loginModal.onOpen, registerModal.onOpen])

    const onCartClick = () => {
        if(!currentUser){
            return loginModal.onOpen()
        }
        return router.push("/cart")
    }

    const body = (
        <>
            <AiOutlineMenu size={20}/>
            <div className="hidden md:block">
                <Avatar src={currentUser?.image}/>
            </div>
        </>
    )

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-4 sm:ml-[50px]">
                <ToolTip label="Your cart">
                    <Cart currentUser={currentUser} onClick={onCartClick}/>
                </ToolTip>
                <DropDown
                    body={body}
                    rounded
                    options={options}
                    mainStyles={"text-slate-500 border-slate-500 p-4 z-15"}
                    childStyle={"bg-gray-900 hover:bg-gray-700 font-medium min-w-[150px] text-nowrap"}
                    hrAfter={getUserMenuHrPositions(currentUser, windowWidth, options.length)}
                />
            </div>
        </div>
    );
};

export default UserMenu;