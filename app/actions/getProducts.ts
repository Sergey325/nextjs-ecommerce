import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string
    sorting?: string
    immediatelyAvailable?: string
    manufacturer?: string[]
    priceMin?: string
    priceMax?: string
}

export default async function getProducts(params: IProductsParams) {
    try {
        const {
            category,
            sorting,
            immediatelyAvailable,
            manufacturer,
            priceMin,
            priceMax,
        } = params

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

        if (priceMin && priceMax) {
            query.price = {
                gte: parseFloat(priceMin),
                lte: parseFloat(priceMax)
            }
        } else if (priceMin) {
            query.price = {
                gte: parseFloat(priceMin)
            }
        } else if (priceMax) {
            query.price = {
                lte: parseFloat(priceMax)
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