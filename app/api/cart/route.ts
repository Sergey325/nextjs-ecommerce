import {NextResponse} from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function PATCH(request: Request) {

    const body = await request.json();

    const currentUser = await getCurrentUser()

    if (!currentUser) return NextResponse.error()

    const product = body.product

    if (!product) {
        throw new Error("Invalid Product")
    }

    let cart = [...(currentUser.cart || [])]

    cart.push({product: product, quantity: 1})

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            cart
        }
    })

    return NextResponse.json(user)
}

export async function PUT(request: Request) {
    //DELETE

    const body = await request.json();

    const currentUser = await getCurrentUser()

    if (!currentUser) return NextResponse.error()

    const product = body.product

    const quantity = body.quantity

    if (!product) {
        throw new Error("Invalid Product")
    }

    let cart = [...(currentUser.cart || [])]

    if(!quantity || quantity === 1) {
        cart = cart.filter((item: any) => item.product === product)

        const user = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                cart
            }
        })

        return NextResponse.json(user)
    }

    cart.map((item: any) =>
        item.product === product? { ...item, quantity: quantity-1 } : item
    )

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            cart
        }
    })

    return NextResponse.json(user)
}