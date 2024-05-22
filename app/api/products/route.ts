import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    try{
        const currentUser = await getCurrentUser()

        if (!currentUser || currentUser.role === "customer") return NextResponse.error()

        const body = await request.json()

        const {
            id,
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

        if (id) {
            await prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    title: title,
                    description: description,
                    manufacturer: manufacturer,
                    price: price,
                    category: category,
                    images: images,
                    properties: properties,
                    sale: sale,
                    immediatelyAvailable: immediatelyAvailable,
                }
            })
        } else {
            await prisma.product.create({
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
        }

        return NextResponse.json(null, {status: 200})
    } catch (error) {
        return NextResponse.json(error)
    }
}