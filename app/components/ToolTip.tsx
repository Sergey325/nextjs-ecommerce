import {useState} from "react";

type Props = {
    children: React.ReactNode
    label: string
};

const ToolTip = ({children, label}: Props) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            {children}
            <span
                className={`
                    absolute 
                    px-1
                    hidden md:inline-block 
                    whitespace-nowrap 
                    left-[50%] -translate-x-[50%] 
                    text-sm text-gray-400
                    bg-gray-600/60
                    cursor-default 
                    ${isShow ? "opacity-100" : "opacity-0"} 
                    transition 
                    rounded-md
                    pointer-events-none
                    `
                }
            >
                {label}
            </span>
        </div>
    );
};

export default ToolTip;