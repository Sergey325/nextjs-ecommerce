"use client"

import useSupportModal from "@/app/hooks/useSupportModal";
import {useRouter} from "next/navigation";

type Props = {
    label: string
    linkTo: string
};

const MiddleItem = ({label, linkTo}: Props) => {
    const supportModal = useSupportModal()
    const router = useRouter()

    return (
        <span
            className={`
                text-gray-400 text-xl
                transition-all duration-300
                drop-shadow-none hover:drop-shadow-[0_0_5px_rgba(98,143,200,1)]
                cursor-pointer
                `}
            onClick={() => !linkTo ? supportModal.onOpen() : router.push(linkTo)}
        >
            {label}
        </span>
    );
};

export default MiddleItem;