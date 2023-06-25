import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?:string
}

export default async function getProducts(params: IProductsParams){
    try {
        const { category } = params

        const products = await prisma.product.findMany({
            where:{
                category: category
            }
        })

        return products
    } catch (e: any){
        throw new Error(e)
    }
}