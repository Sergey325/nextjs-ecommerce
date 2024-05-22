import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export interface IOrdersParams {
    status?: string,
}

export default async function getOrders(params: IOrdersParams){
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser || currentUser.role === "customer"){
            return []
        }

        const { status} = params;

        const statusQuery = status !== "All" ? { status } : {};

        const orders = await prisma.order.findMany({
            where: statusQuery,
        });

        return orders.reverse();
    } catch (error: any) {
        throw new Error(error)
    }
}