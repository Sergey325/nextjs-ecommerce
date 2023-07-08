import ClientOnly from "@/app/components/ClientOnly";
import getProducts, {IProductsParams} from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getProductsByCategory from "@/app/actions/getProductsByCategory";
import StoreClient from "@/app/(pages)/store/StoreClient";

export const dynamic = 'force-dynamic'


type Props = {
    searchParams: IProductsParams
}

const StorePage = async ({searchParams}: Props) => {
    const currentUser = await getCurrentUser()
    const products = await getProducts(searchParams)
    const productsByCategory = await getProductsByCategory(searchParams)

    return (
        <ClientOnly>
            <StoreClient currentUser={currentUser} products={products} productsByCategory={productsByCategory}/>
        </ClientOnly>
    );
};

export default StorePage;