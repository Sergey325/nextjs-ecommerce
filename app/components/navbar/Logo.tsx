'use client'

import Image from "next/image"
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (

        <div className="hidden md:flex  items-center text-blue gap-2 cursor-pointer select-none">
            <Image
                onClick={() => router.push('/')}
                alt="Logo"
                className=""
                height="64"
                width="64"
                src="/images/logo.png"
            />
            <div className="text-3xl text-gray-400">
                Pc Store
            </div>
        </div>
    );
};

export default Logo;