import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string
    sorting?: string
    immediatelyAvailable?: string
    manufacturer?: string[]
}

export default async function getProducts(params: IProductsParams) {
    try {
        const { category, sorting, immediatelyAvailable, manufacturer } = params

        let orderBy = {}

        let query: any = {}

        if (category) {
            query.category = category
        }

        if (immediatelyAvailable) {
            query.immediatelyAvailable = immediatelyAvailable === "true"
        }

        if (sorting && sorting !== "Featured") {
            orderBy = {
                price: sorting
            }
        }

        if (manufacturer && manufacturer.length > 0) {
            query.manufacturer = {
                in: manufacturer
            }
        }

        return await prisma.product.findMany({
            where: query,
            orderBy: orderBy
        })

    } catch (e: any) {
        throw new Error(e)
    }
}