import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function getOrdersByCurrentUser(){
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser){
            return []
        }

        const orders = await prisma.order.findMany({
            where: {
                userId: currentUser.id
            }
        })


        return orders.reverse();
    } catch (error: any) {
        throw new Error(error)
    }
}