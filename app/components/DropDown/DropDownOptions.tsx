"use client"


import MenuItem from "@/app/components/navbar/MenuItem";

type Option = {
    value: string;
    label: string;
    onSelected: () => void
};

type Props = {
    isOpen: boolean;
    options: Option[];
    onSelectOption: (option: Option) => void;
    rounded?: boolean
    childContainerStyles?: string
};

const DropDownOptions = ({ isOpen, options, onSelectOption, rounded, childContainerStyles }: Props) => {
    return (
        <div
            className={`
              absolute
              ${childContainerStyles}
              rounded-${rounded ? "xl" : "none"}
              shadow-md
              w-full
              bg-slate-800
              overflow-hidden
              right-0
              top-7 md:top-9
              text-md
              text-gray-400
              transition-all
                duration-200
                min-h-max
                min-w-max
              ${isOpen ? "translate-y-2 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"}
            `}
        >
            <div className="flex flex-col h-full cursor-pointer text-md">
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        label={option.label}
                        onClick={() => onSelectOption(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DropDownOptions;