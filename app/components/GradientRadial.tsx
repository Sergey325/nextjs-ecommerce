type Props = {
    zIndex?: string
    size?: string,
    gradient?: string
    blur?: string
    styles?: string
    overflow?: boolean
    onClick?: () => void
    styleOfContainer?: string
};

const GradientRadial = ({size, gradient, blur, styles, zIndex, onClick, overflow=true, styleOfContainer}: Props) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center ${!overflow && "overflow-hidden"} z-5 ${zIndex} ${styleOfContainer}`}>
            <div
                className={`
                    ${size ? size : "size-[200px] md:size-[300px]"}
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