import Categories from "@/app/components/store/Categories";
import Container from "@/app/components/Container";
import React from "react";
import Sorting from "@/app/components/store/Sorting";
import ClientOnly from "@/app/components/ClientOnly";
import DevCreateProductBtn from "@/app/components/store/DevCreateProductBtn";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProductsLayout from "@/app/components/store/ProductsLayout";

export const dynamic = 'force-dynamic'


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
                        <ProductsLayout products={products} currentUser={currentUser}/>
                    </div>
                </div>
            </Container>
        </ClientOnly>
    );
};

export default StorePage;