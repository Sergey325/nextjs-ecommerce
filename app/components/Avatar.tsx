'use client'
import Image from "next/image"

type Props = {
    src: string | null | undefined
};

const Avatar = ({src}: Props) => {
    return (
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="avatar"
            src={src ||  "/images/placeholder.jpg"}
        />
    );
};

export default Avatar;