'use client'

import Image from "next/image";
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";

const HeroSection = () => {
    const router = useRouter()

    return (
        <section className="flex flex-col-reverse md:flex-row items-center gap-4">
            <div className="relative flex items-center justify-center md:w-1/2">
                <Image
                    className=""
                    height={400}
                    width={600}
                    alt="pc"
                    src={"/images/home1.png"}
                    quality={100}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-gradient-to-br from-blue-400/70 to-purple-500/70 rounded-full filter blur-[150px] absolute z-10"></div>
                </div>
            </div>
            <div className=" text-gray-400 flex flex-col gap-4 md:gap-8 md:w-2/5">
                <span className="text-4xl lg:text-5xl xl:text-6xl text-gray-300">Bring Your Dreams to Life: <br/>Build the Perfect PC</span>
                <span className="text-md lg:text-lg xl:text-xl 2xl:text-2xl pl-1">Experience unparalleled performance and customization options with our extensive range of top-tier components, empowering you to craft a truly extraordinary computer that reflects your unique vision and aspirations. Build your dream machine and embark on a journey of limitless possibilities.</span>
                <Button label="Explore Our Store" onClick={router.refresh} gradient/>
            </div>
        </section>
    );
};

export default HeroSection;