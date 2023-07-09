import MiddleItem from "@/app/components/navbar/MiddleItem";

const MiddleItems = () => {
    return (
        <div className="hidden md:flex items-center gap-4">
            <MiddleItem label="Store" linkTo="/store"/>
            <MiddleItem label="Home" linkTo="/"/>
            <MiddleItem label="Support" linkTo=""/>
        </div>
    );
};

export default MiddleItems;