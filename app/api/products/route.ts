import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()

    const {
        title,
        description,
        manufacturer,
        price,
        category,
        images,
        properties,
        sale,
        immediatelyAvailable
    } = body


    const product = await prisma.product.create({
        data: {
            title,
            description,
            manufacturer,
            price,
            category,
            images,
            properties,
            sale,
            immediatelyAvailable
        }
    })

    return NextResponse.json(product)

}