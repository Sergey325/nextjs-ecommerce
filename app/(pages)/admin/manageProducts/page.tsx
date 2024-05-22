import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import {redirect} from "next/navigation";
import ManageProductsClient from "@/app/(pages)/admin/manageProducts/ManageProductsClient";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";

export const dynamic = 'force-dynamic'

type Props = {
    searchParams: IProductsParams
}

const ManageProducts = async ({searchParams}: Props) => {
    const currentUser = await getCurrentUser()
    const products = await getProducts(searchParams)

    if(!currentUser || currentUser?.role === "customer"){
        redirect("/")
    }

    return (
        <ClientOnly>
            <ManageProductsClient products={products}/>
        </ClientOnly>
    );
};

export default ManageProducts;