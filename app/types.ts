import {Product} from "@prisma/client";

export type BasketItem = {
    product: Product,
    quantity: number
}