import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string
}

export default async function getManufacturers(params: IProductsParams) {
    try {
        const { category} = params

        let query: any = {}

        if(category) {
            query.category = category
        }

        const products = await prisma.product.findMany({
            where: query
        })

        return Array.from(new Set(products.map(product => product.manufacturer)))
    } catch (e: any) {
        throw new Error(e)
    }
}