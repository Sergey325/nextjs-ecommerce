"use client"

import Container from "@/app/components/Container";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Product} from "@prisma/client";
import AllProducts from "@/app/(pages)/admin/manageProducts/components/AllProducts";
import AddProduct from "@/app/(pages)/admin/manageProducts/components/AddProduct";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";


type Props = {
    products: Product[];
};

const ManageProductsClient = ({products}: Props) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const params = useSearchParams()
    const router = useRouter()

    const tab = useMemo(() => {
        return params?.get("tab") || "AllProducts";
    }, [params])

    const handleChangeTab = useCallback((tabTitle: string) => {
        if (tabTitle === "AllProducts") {
            setSelectedProduct(null)
        }

        let currentQuery = {}

        if(params){
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            tab: tabTitle
        }

        const url = qs.stringifyUrl({
            url: 'admin/manageProducts/',
            query: updatedQuery
        }, {skipNull: true})

        router.push(url)
    }, [params])

    const onEditProduct = (product: Product) => {
        setSelectedProduct(product)
        handleChangeTab("AddProduct")
    }

    return (
        <Container>
            <div className="text-slate-400">
                <div className='h-full w-full flex flex-col justify-center items-center rounded-t-full '>
                    <div className="bg-slate-800 flex justify-center items-center w-full rounded-t-full cursor-pointer">
                        <div
                            className={`${tab === "AllProducts" && "bg-slate-900"} py-2 rounded-tl-full text-center w-full transition hover:bg-slate-900`}
                            onClick={() => handleChangeTab("AllProducts")}
                        >
                            All products
                        </div>
                        <div
                            className={`${tab === "AddProduct" && "bg-slate-900"} py-2 rounded-tr-full text-center w-full border-l-2 border-slate-500 transition hover:bg-slate-900`}
                            onClick={() => handleChangeTab("AddProduct")}
                        >
                            Add product
                        </div>
                    </div>
                    <div className="border-slate-800 px-4 pb-4 border-x border-b w-full">
                        {
                            tab === "AllProducts" ? <AllProducts products={products} onEditProduct={onEditProduct}/> : <AddProduct product={selectedProduct || undefined} resetSelectedProduct={() => setSelectedProduct(null)}/>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ManageProductsClient;