import Link from "next/link";

type Props = {
    label: string
    linkTo: string
};

const MiddleItem = ({label, linkTo}: Props) => {

    return (
        <Link
            href={linkTo}
            className={`
                text-gray-400 text-xl
                transition-all duration-300
                drop-shadow-none hover:drop-shadow-[0_0_5px_rgba(98,143,200,1)]
                cursor-pointer
                `}
        >
            {label}
        </Link>
    );
};

export default MiddleItem;