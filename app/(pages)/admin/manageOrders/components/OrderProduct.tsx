import Link from "next/link";
import {ProductOrder} from "@/app/types";

type Props = {
    product: ProductOrder
};

const OrderProduct = ({product}: Props) => {
    return (
        <div className="flex flex-col sm:flex-row w-full text-gray-400 text-xs md:text-base lg:text-lg justify-between items-center gap-5">
            <Link
                href={{pathname: `/store/product/${product.productId}`}}
                className="flex w-full sm:w-1/2 gap-1 items-center cursor-pointer"
            >
                <span className="text-xs md:text-base">{product.name}</span>
            </Link>
            <span className="hidden md:inline-block md:w-[15%]">${product.price.toFixed(2)}</span>
            <div
                className="flex justify-between items-center w-full sm:w-[45%] md:w-[30%] min-h-max min-w-max">
                <div className="flex items-center text-xs sm:text-base gap-1 min-h-max min-w-max">
                    <span className="inline-block sm:hidden">Quantity: </span>
                    <span className="sm:ml-9">{product.quantity}</span>
                </div>
                <span
                    className="text-xs sm:text-base text-gray-300 inline-block text-right ">${(product.price * product.quantity).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default OrderProduct;