import Stripe from "stripe"
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/app/libs/stripe";
import prisma from "@/app/libs/prismadb";

async function getOrderItems(lineItems: any, stripe: any) {
    return new Promise((resolve, reject) => {
        let items: any = [];

        lineItems?.data?.forEach(async (item: any) => {
            const product = await stripe.products.retrieve(item.price.product);
            const productId = product.metadata.productId;

            items.push({
                productId,
                name: product.name,
                price: item.price.unit_amount_decimal / 100,
                quantity: item.quantity,
                image: product.images[0],
            });

            if (items.length === lineItems?.data.length) {
                resolve(items);
            }
        });
    });
}

export async function POST(req: Request) {
    const body = await req.text()

    const signature = headers().get("Stripe-Signature") as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new NextResponse(`Webhook error: ${error.message}`, {status: 400})
    }

    const session = event.data.object as Stripe.Checkout.Session

    if(event.type === "checkout.session.completed") {
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const orderItems = await getOrderItems(lineItems, stripe)

        const date = new Date(session.created * 1000);
        const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;
        const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        const dateTime = `${formattedTime}, ${formattedDate}`;

        //creating order
        await prisma.order.create({
            data: {
                userId: session.client_reference_id as string,
                products: orderItems as any,
                totalPrice: Number(session.amount_total) / 100,
                createdAt: dateTime
            }
        })

        //clear cart
        await prisma.user.update({
            where: {
                id: session.client_reference_id as string
            },
            data: {
                cart: {
                    set: []
                }
            }
        })
    }

    return new NextResponse(null, { status: 200 })
}