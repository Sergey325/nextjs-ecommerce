import {Product} from "@prisma/client";

export type BasketItem = {
    product: Product,
    quantity: number
}

export type CategoryFilters = (
    {
        title: string,
        value: string | number
    }
)[]


export type Filter = {
    param: string[] | string | undefined
    title: string
}

export type ProductOrder = {
    productId: string,
    name: string,
    price: number
    quantity: number
    image: string
}

export type ItemOrder = {
    id: string,
    number: string,
    userId: string
    products: ProductOrder[]
    totalPrice: number
    createdAt: string
    status: string
}