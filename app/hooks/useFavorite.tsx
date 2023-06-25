import axios from "axios";
import {useRouter} from "next/navigation";
import React, {useCallback, useMemo} from "react";
import {toast} from "react-hot-toast"
import useLoginModal from "@/app/hooks/useLoginModal";
import {User} from "@prisma/client";

interface IUseFavorite {
    productId: string
    currentUser?: User | null
}

const useFavorite = (
    {
        productId,
        currentUser
    }: IUseFavorite
) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(productId)
    },[currentUser, productId])

    const toggleFavorite = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        if(!currentUser) {
            return loginModal.onOpen()
        }

        try {
            let request

            if(hasFavorited) {
                request = () => axios.delete(`/api/favorites/${productId}`)
            } else {
                request = () => axios.post(`/api/favorites/${productId}`)
            }

            await request()
            router.refresh()
            toast.success('Success')
        } catch (error) {
            toast.error("Something went wrong")
        }
    }, [currentUser, hasFavorited, productId, loginModal, router])
    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite;