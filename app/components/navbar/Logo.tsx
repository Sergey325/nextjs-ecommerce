'use client'

import Image from "next/image"
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (

        <div className="flex items-center text-blue gap-2 cursor-pointer select-none" onClick={() => router.push('/')}>
            <Image

                alt="Logo"
                className="h-[64px] w-[64px]"
                height="64"
                width="64"
                src="/images/logo1.png"
            />
            <div className="text-3xl text-gray-400">
                Pc Store
            </div>
        </div>
    );
};

export default Logo;