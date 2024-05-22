import {NextResponse} from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    productId?: string
}

export async function DELETE(
    request: Request,
    {params}: { params: IParams }
) {
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role === "customer") return NextResponse.error()

    const {productId} = params

    if (!productId) {
        throw new Error("Invalid ID")
    }

    await prisma.product.delete({
        where: {
            id: productId,
        },
    })

    return NextResponse.json(null, { status: 200 })
}