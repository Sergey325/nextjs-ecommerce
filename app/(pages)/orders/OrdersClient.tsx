import {Order} from "@prisma/client";
import {ItemOrder, ProductOrder} from "@/app/types";
import Container from "@/app/components/Container";
import OrderProduct from "@/app/(pages)/orders/components/OrderProduct";
import OrderSummary from "@/app/(pages)/orders/components/OrderSummary";

type Props = {
    orders: Order[]
};

const OrdersClient = ({orders}: Props) => {
    return (
        <Container>
            <div className="flex flex-col gap-10 text-2xl md:text-4xl py-10 px-5 text-gray-400">
                Your Orders
                {(orders as Order[]).map((order) => {
                    const orderItem: ItemOrder = {
                        id: order.id,
                        number: order.number,
                        userId: order.userId,
                        products: order.products as ProductOrder[],
                        totalPrice: order.totalPrice,
                        createdAt: order.createdAt,
                        status: order.status,
                    };
                    return (
                        <div className="text-base sm:text-lg md:text-xl lg:text-2xl py-5 md:py-10 px-5 text-gray-400 rounded-xl border-2 border-gray-500">
                            <div className="flex flex-col sm:flex-row justify-between gap-3">
                                <span className="">{`Order: ${orderItem.number}`}</span>
                                <span className="sm:text-right">{orderItem.createdAt}</span>
                            </div>

                            <div className="flex flex-col xl:flex-row gap-5 xl:gap-20 pt pt-5 sm:pt-10 items-start">
                                <div className="flex flex-col w-full xl:w-4/6 gap-3">
                                    <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 text-sm sm:text-lg">
                                        <span className="">Product</span>
                                        <span
                                            className="hidden md:inline-block md:w-[18%] justify-self-end lg:text-center -mr-[28%]">Price</span>
                                        <span className="md:w-[18%] justify-self-end text-center">Quantity</span>
                                        <span className=" justify-self-end text-right">Total</span>
                                    </div>
                                    <hr className="border-gray-500 w-full"/>
                                    {(orderItem.products as ProductOrder[]).map(product => (
                                        <div key={product.productId} className="flex flex-col gap-4">
                                            <OrderProduct product={product}/>
                                            <hr className="border-gray-500 w-full"/>
                                        </div>
                                    ))}
                                </div>

                                <OrderSummary order={orderItem}/>
                            </div>
                        </div>)
                })}
            </div>
        </Container>
    );
};

export default OrdersClient;