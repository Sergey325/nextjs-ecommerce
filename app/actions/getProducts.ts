import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string
    sorting?: string
}

export default async function getProducts(params: IProductsParams) {
    try {
        const {category, sorting} = params

        let orderBy = {}

        if(sorting && sorting !== "Featured"){
            orderBy = {
                price: sorting
            }
        }

        const products = await prisma.product.findMany({
            where: {
                category: category
            },
            orderBy: orderBy
        })

        return products
    } catch (e: any) {
        throw new Error(e)
    }
}