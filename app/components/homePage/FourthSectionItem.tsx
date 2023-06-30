import {IconType} from "react-icons";

type Props = {
    title: string,
    subtitle: string
    icon: IconType
};

const FourthSectionItem = ({icon: Icon, title, subtitle}: Props) => {
    return (
        <div className="flex items-center gap-2 min-w-[300px]">
            <Icon size={50} className="text-gray-300"/>
            <div className="flex flex-col justify-center">
                <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-left">
                    {title}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg 2xl:text-lg text-gray-400 text-left">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default FourthSectionItem;