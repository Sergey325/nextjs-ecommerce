import getProductById from "@/app/actions/getProductById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ProductClient from "@/app/(pages)/store/product/[productId]/ProductClient";

type Props = {
    productId: string
}




const Home = async ({params}: {params: Props})  => {
    const product = await getProductById(params)

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
            />
        </ClientOnly>
    );
};

export default Home;