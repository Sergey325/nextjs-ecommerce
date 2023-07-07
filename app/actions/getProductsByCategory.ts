import prisma from "@/app/libs/prismadb"

export interface IProductsParams {
    category?: string;
    sorting?: string;
    immediatelyAvailable?: string;
    manufacturer?: string[];
    priceMin?: string;
    priceMax?: string;
    Chipset?: string[];
    VRAM?: string[];
    Overclocked?: string[];
    BusWidth?: string[];
    Connector?: string[];
    PowerConnector?: string[];
    minGPULength?: string;
    maxGPULength?: string;
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