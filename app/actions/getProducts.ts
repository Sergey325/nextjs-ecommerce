import prisma from "@/app/libs/prismadb"

export default async function getProducts(){
    try {
        const products = await prisma.product.findMany()

        return products
    } catch (e: any){
        throw new Error(e)
    }
}