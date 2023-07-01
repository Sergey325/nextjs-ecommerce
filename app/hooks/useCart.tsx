import axios from "axios";
import {useRouter} from "next/navigation";
import React, {useCallback, useMemo} from "react";
import {toast} from "react-hot-toast"
import useLoginModal from "@/app/hooks/useLoginModal";
import {Product, User} from "@prisma/client";

interface IUseFavorite {
    product: Product
    currentUser?: User | null
    quantity?: number | null
}

const useCart = (
    {
        product,
        currentUser,
    }: IUseFavorite
) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const isInCart = useMemo(() => {
        const cart = currentUser?.cart || []

        return cart.some((item: any) => item.product.id == product.id)
    },[currentUser, product])

    const updateCart = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        if(!currentUser) {
            return loginModal.onOpen()
        }

        try {
            let request

            if(isInCart) {
                request = () => axios.put("/api/cart", {product: product})
            } else {
                request = () => axios.patch("/api/cart", {product: product})
            }

            await request()
            router.refresh()
            toast.success('Success')
        } catch (error) {
            toast.error("Something went wrong")
        }
    }, [currentUser, isInCart, product, loginModal, router])
    return {
        isInCart,
        updateCart
    }
}

export default useCart;