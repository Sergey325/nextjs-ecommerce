import Categories from "@/app/(pages)/store/components/Categories";
import Container from "@/app/components/Container";
import React, {useEffect} from "react";
import Sorting from "@/app/(pages)/store/components/Sorting";
import ClientOnly from "@/app/components/ClientOnly";
import DevCreateProductBtn from "@/app/(pages)/store/components/DevCreateProductBtn";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProductsLayout from "@/app/(pages)/store/components/ProductsLayout";
import Filters from "@/app/(pages)/store/components/Filters";
import getManufacturers from "@/app/actions/getManufacturers";
import getProductsByCategory from "@/app/actions/getProductsByCategory";

export const dynamic = 'force-dynamic'


type Props = {
    searchParams: IProductsParams
}

const StorePage = async ({searchParams}: Props) => {
    const currentUser = await getCurrentUser()
    const products = await getProducts(searchParams)
    const manufacturers = await getManufacturers(searchParams)
    const productsByCategory = await getProductsByCategory(searchParams)

    // useEffect(() => {
    //     console.log(searchParams)
    // }, [searchParams])

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
                    <aside className="hidden lg:flex flex-col items-center justify-start p-6 text-xl text-gray-500 border-gray-800 border-2 max-w-[300px]">
                        <span className="self-start font-semibold">Filter By</span>
                        <hr className="border-gray-700 w-full"/>
                        <Filters manufacturers={manufacturers} allProducts={productsByCategory}/>
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