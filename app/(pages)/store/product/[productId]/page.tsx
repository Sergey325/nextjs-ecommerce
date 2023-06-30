import getProductById from "@/app/actions/getProductById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ProductClient from "@/app/(pages)/store/product/[productId]/ProductClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

type Props = {
    productId: string
}




const Home = async ({params}: {params: Props})  => {
    const product = await getProductById(params)
    const currentUser = await getCurrentUser()

    if(!product){
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ProductClient
                product={product}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default Home;