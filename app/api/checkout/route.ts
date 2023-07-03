import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/app/libs/stripe"
import {BasketItem} from "@/app/types";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    req: Request
) {
    const items = await req.json() as BasketItem[]
    const currentUser = await getCurrentUser()

    if(!items || items.length === 0) {
        return new NextResponse("Products list is empty", {status: 400})
    }

    if (!currentUser || !currentUser?.email) {
        return new NextResponse("User is not logged in", {status: 400})
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    items.forEach(item => {
        line_items.push({
            quantity: item.quantity,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: item.product.title,
                    images: item.product.images,
                    metadata: {
                        productId: item.product.id,
                    },
                },
                unit_amount: +((item.product.price-item.product.price/100*item.product.sale).toFixed(2)) * 100
            }
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        payment_method_types: ["card"],
        success_url: `${process.env.NEXT_AUTH_URL}/successfulPayment?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_AUTH_URL}/paymentCancelled`,
        customer_email: currentUser.email,
        client_reference_id: currentUser?.id,
    })

    return NextResponse.json({ url: session.url })
}