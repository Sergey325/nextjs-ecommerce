"use client"

type Props = {
    title: string
    subtitle?: string
    center?: boolean
};

const Heading = ({title, subtitle, center}: Props) => {

    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="text-2xl font-bold text-gray-400">
                {title}
            </div>
            <div className="font-light text-gray-400 mt-2">
                {subtitle}
            </div>
        </div>
    );
};

export default Heading;