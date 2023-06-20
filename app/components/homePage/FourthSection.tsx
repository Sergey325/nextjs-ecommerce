"use client"

import {RiRefund2Line, RiTruckFill} from "react-icons/ri";
import {FaCoins} from "react-icons/fa";
import {TbDiscount} from "react-icons/tb";
import React from "react";

const FourthSection = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-[80%] gap-10 xl:gap-0">
            <div className="w-full xl:w-1/2 xl:pr-5 pr-0 3xl:pl-20">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-gray-300 text-left">
                    Exceptional Service, Attention to Detail: Your Satisfaction is Our Priority
                </h1>
                <p className="text-gray-400 text-md lg:text-lg xl:text-xl 2xl:text-2xl text-left pt-5">
                    Experience personalized assistance and seamless support as we go the extra mile to ensure your complete satisfaction
                </p>
            </div>
            <div className="relative flex justify-center w-full xl:w-1/2">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-12">
                    <div className="flex items-center gap-4 min-w-[300px]">
                        <RiTruckFill size={58} className="text-gray-300"/>
                        <div className="flex flex-col justify-center ">
                            <h3 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-left">
                                Free Delivery
                            </h3>
                            <p className="text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-400 text-left">
                                Free shipping on all
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 min-w-[300px]">
                        <FaCoins size={58} className="text-gray-300"/>
                        <div className="flex flex-col justify-center ">
                            <h3 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-left">
                                Money Return
                            </h3>
                            <p className="text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-400 text-left">
                                Back guarantee in 7 days
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 min-w-[300px]">
                        <TbDiscount size={58} className="text-gray-300"/>
                        <div className="flex flex-col justify-center ">
                            <h3 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-left">
                                Member Discount
                            </h3>
                            <p className="text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-400 text-left">
                                On every order over $130.00
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 min-w-[300px]">
                        <RiRefund2Line size={58} className="text-gray-300"/>
                        <div className="flex flex-col justify-center ">
                            <h3 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-left">
                                Return Policy
                            </h3>
                            <p className="text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-400 text-left">
                                Support 24 hours a day
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="
                        w-1/2 h-1/2
                        bg-gradient-to-br from-blue-400/70 to-purple-500/70
                        rounded-full
                        filter blur-[150px]
                        absolute
                        z-10
                    ">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;