"use client"

type Props = {
    label: string
    action: () => void
};

const MiddleItem = ({label, action}: Props) => {
    return (
        <div
            onClick={action}
            className="
                text-gray-400 text-xl
                transition-all duration-300
                drop-shadow-none hover:drop-shadow-[0_0_5px_rgba(98,143,200,1)]
                cursor-pointer
            "
        >
            {label}
        </div>
    );
};

export default MiddleItem;