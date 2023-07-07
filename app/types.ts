import {Product} from "@prisma/client";

export type BasketItem = {
    product: Product,
    quantity: number
}

export type CategoryFilters = (
    {
        title: string,
        value: string
    } | {
        title: string,
        value: number
    }
)[]

export type ProductItem = {
    id: string;
    title: string;
    description: string;
    manufacturer: string;
    price: number;
    category: string;
    images: string[];
    properties: Record<string, string | number>[]; // Индексная сигнатура
    sale: number;
    immediatelyAvailable: boolean;
};

export type Filter = {
    param: string[] | string | number[] | undefined
    title: string
}