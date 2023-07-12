import Button from "@/app/components/Button";

type Props = {
    totalPrice: number
    onCheckout: () => void
};

const CartSummary = ({totalPrice, onCheckout}: Props) => {

    return (
        <div
            className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 w-full xl:w-[30%] bg-gray-900 text-gray-400 self-start"
        >
            <h2 className="text-xl font-medium ">
                Order summary
            </h2>

            <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-light text-base sm:text-lg text-gray-400 max-w-[60%]">Subtotal</span>
                    <span className="font-light text-base sm:text-lg text-gray-300">${totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-light text-sm sm:text-base text-gray-400 max-w-[60%]">Shipping and handling costs</span>
                    <span className="font-light text-base sm:text-lg text-gray-300">Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base sm:text-lg">
                    <div className="text-sm sm:text-base font-medium">Order total</div>
                    <span className="text-xl sm:text-2xl text-gray-300">${totalPrice}</span>

                </div>
            </div>
            <div className="text-sm sm:text-base pt-5">
                <Button label="Checkout" onClick={onCheckout} gradient/>
            </div>
        </div>
    );
};

export default CartSummary;