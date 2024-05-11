import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Link from "next/link";
import React from "react";
import GradientRadial from "@/app/components/GradientRadial";

const PaymentCancelled = () => {
    return (
        <Container>
            <div className="flex flex-col h-[60vh] justify-center items-center gap-7 text-gray-500 text-sm sm:text-xl">
                <GradientRadial
                    size="size-[150px] md:size-[200px]"
                    gradient="bg-red-500/70"
                    blur="blur-[100px] md:blur-[150px]"
                    styles=""
                    styleOfContainer="h-min top-80"
                    zIndex="z-0"
                />
                <Heading center title="Ooops something went wrong!" subtitle="Please try to pay again"/>
                <div className="text-gray-300 font-semibold text-base">
                    <Link
                        href={{pathname: "/cart"}}
                        className={`
                            relative
                            block
                            text-center
                            rounded-lg
                            transition-all duration-300
                            w-[250px]
                            bg-slate-900/30
                            shadow-[0_0_0_1px_rgba(100,116,139,1)] hover:shadow-[0_0_0_3px_rgba(100,116,139,1)]
                            select-none
                            py-3`
                        }
                    >
                        Back to Cart
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default PaymentCancelled;