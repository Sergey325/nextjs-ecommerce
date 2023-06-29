import prisma from "@/app/libs/prismadb";

interface IParams {
    productId?: string
}

export default async function getProductById(
    params: IParams
){
    try {
        const {productId} = params

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })

        if(!product) return null

        return {...product}
    } catch (error: any) {
        throw new Error(error)
    }
}