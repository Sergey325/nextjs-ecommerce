import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string
}

export default async function getProductsByCategory(params: IProductsParams) {
    try {

        const {category} = params

        return await prisma.product.findMany({
            where: {
                category: category
            }
        })

    } catch (e: any) {
        throw new Error(e)
    }
}