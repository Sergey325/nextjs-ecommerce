import {NextResponse} from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import {BasketItem} from "@/app/types";

export async function PATCH(request: Request) {
    const body = await request.json();

    const currentUser = await getCurrentUser()

    if (!currentUser) return NextResponse.error()

    const product = body.product

    const quantity = body.quantity

    if (!product) {
        throw new Error("Invalid Product")
    }

    let cart = [...(currentUser.cart || [])] as BasketItem[]

    if (quantity) {
        cart = cart.map((item: BasketItem) => {
            if (item.product.id === product.id) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
    }
    else {
        cart.push({ product: product, quantity: 1 });
    }

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

    const productId = body.productId

    if (!productId) {
        throw new Error("Invalid Product ID")
    }

    let cart = [...(currentUser.cart || [])]

    cart = cart.filter((item: any) => item.product.id !== productId)

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