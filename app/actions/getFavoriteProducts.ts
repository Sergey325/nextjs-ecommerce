import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function getFavoriteProducts(){
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser){
            return []
        }

        const favorites = await prisma.product.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        })


        return favorites;
    } catch (error: any) {
        throw new Error(error)
    }
}