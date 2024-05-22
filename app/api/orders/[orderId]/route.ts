import {NextResponse} from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    orderId?: string
}

export async function PATCH(
    request: Request,
    {params}: { params: IParams }
) {
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role === "customer") return NextResponse.error()

    const {orderId} = params

    const body = await request.json()

    const {status} = body

    if (!orderId || !status) throw new Error("Invalid ID or Status")

    await prisma.order.update({
        where: {
            id: orderId,
        },
        data: {
            status
        }
    })

    return NextResponse.json(null, {status: 200})
}