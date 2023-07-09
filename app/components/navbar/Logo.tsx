import Image from "next/image"
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center text-blue gap-2 cursor-pointer select-none">
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
        </Link>
    );
};

export default Logo;