type Props = {
    zIndex?: string
    size?: string,
    gradient?: string
    blur?: string
    styles?: string
    overflow?: boolean
    onClick?: () => void
};

const GradientRadial = ({size, gradient, blur, styles, zIndex, onClick, overflow=true}: Props) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center ${!overflow && "overflow-hidden"} z-10 ${zIndex}`}>
            <div
                className={`
                    ${size ? size : "w-[200px] h-[200px] md:w-[300px] md:h-[300px]"}
                    ${gradient ? gradient : "bg-gradient-to-br from-blue-400/70 to-purple-500/70"}
                    rounded-full 
                    ${blur ? blur : "blur-[200px] md:blur-[300px] "}
                    filter
                    transition-all duration-700 bg-in
                    ${styles}
                `}
                onClick={onClick}
            ></div>
        </div>
    );
};

export default GradientRadial;