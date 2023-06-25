import Categories from "@/app/components/store/Categories";
import Container from "@/app/components/Container";
import React from "react";
import Sorting from "@/app/components/store/Sorting";
import ClientOnly from "@/app/components/ClientOnly";
import DevCreateProductBtn from "@/app/components/store/DevCreateProductBtn";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";
import ProductCard from "@/app/components/store/ProductCard";
import getCurrentUser from "@/app/actions/getCurrentUser";

type Props = {
    searchParams: IProductsParams
}

const StorePage = async ({searchParams}: Props) => {
    const currentUser = await getCurrentUser()
    const products = await getProducts(searchParams)

    // products.push(products[0])
    // products.push(products[0])
    // products.push(products[0])
    // products.push(products[0])
    // products.push(products[0])

    return (
        <ClientOnly>
            <hr className="border-gray-800"/>
            <Categories/>
            <hr className="border-gray-800"/>
            <Container>
                <div className="flex pt-10 gap-6">
                    <aside className="hidden lg:flex flex-col items-center justify-start p-6 text-xl text-gray-500 border-gray-800 border-2 ">
                        <span className="self-start">Filter By</span>
                        <hr className="border-gray-700 w-full"/>
                        <div className="w-[250px] text-lg pt-4">
                            Availability
                        </div>
                    </aside>
                    <div className="w-full flex-col">
                        <div className="flex justify-between items-center">
                            <Sorting/>
                            {/*<DevCreateProductBtn/>*/}
                        </div>
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
                                        actionLabel="Into cart"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </ClientOnly>
    );
};

export default StorePage;