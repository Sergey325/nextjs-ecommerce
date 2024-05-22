import {Order} from "@prisma/client";
import {ItemOrder, ProductOrder} from "@/app/types";
import OrderProduct from "@/app/(pages)/admin/manageOrders/components/OrderProduct";
import OrderSummary from "@/app/(pages)/admin/manageOrders/components/OrderSummary";

type Props = {
    orders: Order[] | null;
};

const OrderList = ({orders}: Props) => {

    if (orders?.length === 0) {
        return (
            <div className="mt-4 text-center text-xs sm:text-lg">
                No orders with the specified status found
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3 md:gap-6 text-2xl md:text-4xl py-5 px-3">
            {(orders as Order[])?.map((order) => {
                const orderItem: ItemOrder = {
                    id: order.id,
                    number: order.number,
                    userId: order.userId,
                    products: order.products as ProductOrder[],
                    totalPrice: order.totalPrice,
                    createdAt: order.createdAt,
                    customerEmail: order.customerEmail,
                    customerName: order.customerName,
                    address: order.address,
                    status: order.status,
                };
                return (
                    <div key={orderItem.id}
                         className="text-xs sm:text-base lg:text-lg py-5 md:py-10 px-5 text-gray-400 rounded-xl border-2 border-gray-500">
                        <div className="flex flex-col md:flex-row justify-between gap-1 sm:gap-0">
                            <div className="space-y-1.5">
                                <p className="">{`Order: ${orderItem.number}`}</p>
                                <p className="">{`Address: ${orderItem.address}`}</p>
                            </div>
                            <div className="space-y-1.5 text-left md:text-right">
                                <p className="">{`Name: ${order.customerName}`}</p>
                                <p className="">{`Email: ${order.customerEmail}`}</p>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-5 xl:gap-20 pt-2 items-start">
                            <div className="flex flex-col w-full xl:w-4/6 gap-3">
                                <hr className="hidden sm:inline-block border-gray-500 w-full"/>
                                <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 text-sx sm:text-base">
                                    <span className="">Product</span>
                                    <span className="hidden md:inline-block md:w-[18%] justify-self-end lg:text-center -mr-[28%]">Price</span>
                                    <span className="md:w-[18%] justify-self-end text-center">Quantity</span>
                                    <span className=" justify-self-end text-right">Total</span>
                                </div>
                                {(orderItem.products as ProductOrder[]).map(product => (
                                    <div key={product.productId} className="flex flex-col gap-4">
                                        <hr className="border-gray-500 w-full"/>
                                        <OrderProduct product={product}/>
                                    </div>
                                ))}
                            </div>
                            <OrderSummary order={orderItem}/>
                        </div>
                    </div>)
            })}

        </div>
    );
};

export default OrderList;