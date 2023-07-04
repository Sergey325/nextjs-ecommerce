'use client'

import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import {useMemo} from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {User} from "@prisma/client";
import {signOut} from "next-auth/react";
import DropDown from "@/app/components/DropDown/DropDown";
import Cart from "@/app/components/navbar/Cart";
import {useRouter} from "next/navigation";

type Props = {
    currentUser?: User | null
}

const UserMenu = ({currentUser}: Props) => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const onCartClick = () => {
        if(!currentUser){
            return registerModal.onOpen()
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

    const options = useMemo(() =>
    {
        if(currentUser){
            return [
                { value: "Basket", label: "Basket", onSelected: () => {}},
                { value: "Orders", label: "Orders", onSelected:  () => {}},
                { value: "Favorites", label: "Favorites", onSelected: () => {}},
                { value: "Logout", label: "Logout", onSelected: signOut},
            ]
        }
        return [
            { value: "Login", label: "Login", onSelected: loginModal.onOpen},
            { value: "Sign up", label: "Sign up", onSelected: registerModal.onOpen},
        ]
    }, [currentUser])


    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-4">
                <Cart currentUser={currentUser} onClick={onCartClick}/>
                <DropDown
                    body={body}
                    rounded
                    options={options}
                    mainStyles={"text-slate-500 border-slate-500 p-4 z-10"}
                    childStyle={"bg-gray-900 hover:bg-gray-700 border-red-500 font-medium min-w-[150px]"}
                    hrAfter={[3]}
                />
            </div>
        </div>
    );
};

export default UserMenu;