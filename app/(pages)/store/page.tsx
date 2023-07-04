import Categories from "@/app/(pages)/store/components/Categories";
import Container from "@/app/components/Container";
import React from "react";
import Sorting from "@/app/(pages)/store/components/Sorting";
import ClientOnly from "@/app/components/ClientOnly";
import DevCreateProductBtn from "@/app/(pages)/store/components/DevCreateProductBtn";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProductsLayout from "@/app/(pages)/store/components/ProductsLayout";
import CheckBox from "@/app/(pages)/store/components/CheckBox";

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
                        <span className="self-start font-semibold">Filter By</span>
                        <hr className="border-gray-700 w-full"/>
                        <div className="w-[250px] text-base font-semibold pt-4">
                            Availability
                        </div>
                        <CheckBox />
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