"use client"

import ProductCard from "@/app/components/store/ProductCard";
import {Product, User} from "@prisma/client";

type Props = {
    products: Product[]
    currentUser?: User | null
};

const ProductsLayout = ({products, currentUser}: Props) => {
    return (
        <div
            className="
                                pt-5
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                                2xl:grid-cols-5
                                gap-8
                            "
        >
            {products.map((product, index) => {
                return (
                    <ProductCard
                        key={product.id + index}
                        data={product}
                        currentUser={currentUser}
                    />
                )
            })}
        </div>
    );
};

export default ProductsLayout;