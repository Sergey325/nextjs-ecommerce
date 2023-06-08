"use client"

type Props = {
    onClick: () => void
    label: string
};

const MenuItem = ({onClick, label}: Props) => {
    return (
        <div onClick={onClick} className="px-4 py-3 hover:bg-slate-500 transition font-semibold">
            {label}
        </div>
    );
};

export default MenuItem;