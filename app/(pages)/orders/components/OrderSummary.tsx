import {ItemOrder} from "@/app/types";

type Props = {
    order: ItemOrder
};

const OrderSummary = ({order}: Props) => {
    return (
        <div
            className=" rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8 w-full xl:w-[30%] bg-gray-900 text-gray-400 self-start"
        >
            <h2 className="text-xl font-medium ">
                Order summary
            </h2>

            <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-light text-base sm:text-lg text-gray-400 max-w-[60%]">Created at</span>
                    <span className="font-light text-sm sm:text-base text-gray-300 text-right">{order.createdAt}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-light text-base sm:text-lg text-gray-400 max-w-[60%]">Status</span>
                    <span className="font-light text-base sm:text-lg text-gray-300">{order.status}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-light text-base sm:text-lg text-gray-400 max-w-[60%]">Subtotal</span>
                    <span className="font-light text-base sm:text-lg text-gray-300">${order.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-light text-sm sm:text-base text-gray-400 max-w-[60%]">Shipping and handling costs</span>
                    <span className="font-light text-base sm:text-lg text-gray-300">Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base sm:text-lg">
                    <div className="text-sm sm:text-base font-medium">Order total</div>
                    <span className="text-xl sm:text-2xl text-gray-300">${order.totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;