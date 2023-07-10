import Container from "@/app/components/Container";
import {BsFillPatchCheckFill} from "react-icons/bs";
import Link from "next/link";
import GradientRadial from "@/app/components/GradientRadial";

const SuccessfulPayment = () => {

    return (
        <Container>
            <div className="flex flex-col h-[60vh] justify-center items-center gap-5 text-gray-500 text-sm sm:text-xl z-5">
                <GradientRadial
                    size="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                    gradient="bg-gradient-to-br from-blue-400/80 to-green-500/70"
                    blur="blur-[100px] md:blur-[150px]"
                    styles=""
                    styleOfContainer="h-min top-64"
                    zIndex="z-0"
                />
                <BsFillPatchCheckFill className="text-green-600" size={150}/>
                <span className="text-gray-400 text-xl sm:text-3xl">Your payment was successful!</span>
                <span className="-mt-2">We will be in contact with more details shortly</span>
                <div className="flex flex-col sm:flex-row justify-between gap-10 text-base font-semibold w-full sm:w-[520px] mt-10 px-10">
                    <Link
                        href={{pathname: "/orders"}}
                        className={`
                            relative
                            block
                            text-center text-gray-300
                            rounded-lg
                            transition-all duration-300
                            bg-slate-900/30
                            shadow-[0_0_0_1px_rgba(100,116,139,1)] hover:shadow-[0_0_0_3px_rgba(100,116,139,1)]
                            select-none
                            py-3
                            w-full
                            `
                        }
                    >
                        Check Orders
                    </Link>
                    <Link
                        href={{pathname: "/store"}}
                        className={`
                            relative
                            disabled:opacity-70 disabled:cursor-not-allowed
                            rounded-lg
                            transition-all
                            duration-300
                            w-full
                            bg-slate-400/70
                            border-slate-400
                            hover:drop-shadow-[0_2px_6px_rgba(98,143,200,0.90)]
                            text-gray-950 text-center
                            py-3
                            select-none
                        `}
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </Container>

    );
};

export default SuccessfulPayment;