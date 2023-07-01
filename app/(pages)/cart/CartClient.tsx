import {User} from "@prisma/client";
import Container from "@/app/components/Container";
import CartItem from "@/app/components/store/CartItem";

type Props = {
    currentUser?: User | null
};

const CartClient = ({currentUser}: Props) => {

    return (
        <Container>
            <div className="text-2xl md:text-4xl pt-10 px-5 lg:px-20 text-gray-400">
                Your Shopping Cart
                <div className="flex flex-col w-full lg:w-4/6  pt-10 gap-3">
                    <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 text-sm sm:text-lg">
                        <span className="">Product</span>
                        <span className="hidden md:inline-block md:w-[18%] justify-self-end lg:text-center -mr-[28%]">Price</span>
                        <span className="md:w-[18%] justify-self-end text-center">Quantity</span>
                        <span className=" justify-self-end text-right">Total</span>
                    </div>
                    {currentUser?.cart.map((item: any) => (
                        <div className="flex flex-col gap-4">
                            <hr className="border-gray-500 w-full"/>
                            <CartItem item={item}/>
                            <hr className="border-gray-500 w-full"/>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CartClient;