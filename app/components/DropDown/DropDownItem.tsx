"use client"

type Props = {
    onClick?: () => void
    label: string
    childStyle?: string
};

const DropDownItem = ({onClick, label, childStyle}: Props) => {
    return (
        <div onClick={onClick} className={`${childStyle} px-4 py-3 w-full text-center hover:bg-slate-500 transition `}>
            {label}
        </div>
    );
};

export default DropDownItem;