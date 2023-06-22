'use client'

import Image from "next/image"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {useRouter} from "next/navigation";
import Container from "@/app/components/Container";


const Footer = () => {
    const router = useRouter()

    return (
        <Container>
            <footer className="pb-10 sm:b-20 flex flex-col flex-shrink justify-center items-center">
                <hr className="border-gray-700 w-full "/>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center w-full pt-5 sm:pt-10">
                    <div className="flex flex-col order-3 sm:order-2 lg:order-1 text-gray-500 text-xs md:text-sm lg:text-md">
                        <div className="">
                            Copyright © 2023 PC store
                        </div>
                        <div className="flex justify-between gap-1">
                            All rights reserved |
                            <span className="hover:text-indigo-600 transition cursor-pointer">Privacy</span> |
                            <span className="hover:text-indigo-600 transition cursor-pointer">Terms</span>
                        </div>
                    </div>
                    <div className="flex items-center order-2 sm:order-1 lg:order-2 text-blue gap-2 cursor-pointer select-none">
                        <Image
                            onClick={() => router.push('/')}
                            alt="FooterLogo"
                            className="h-[48px] w-[48px]"
                            height="48"
                            width="48"
                            src="/images/logo1.png"
                        />
                        <div className="text-3xl text-gray-400">
                            Pc Store
                        </div>
                    </div>
                    {/*<Logo/>*/}
                    <div className="flex order-1 sm:order-3 gap-4 lg:w-[300px] justify-end">
                        <AiFillGithub size={40} className="text-gray-500 cursor-pointer hover:text-indigo-700 transition"/>
                        <AiFillLinkedin size={40} className="text-gray-500 cursor-pointer hover:text-indigo-700 transition"/>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;