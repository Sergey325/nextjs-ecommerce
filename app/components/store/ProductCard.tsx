"use client"

import {Product, User} from "@prisma/client";

type Props = {
    data: Product
    currentUser?: User | null
};

const ProductCard = ({data, currentUser}: Props) => {
    return (
        <div className='text-gray-400 text-md'>
            {data.title}
        </div>
    );
};

export default ProductCard;