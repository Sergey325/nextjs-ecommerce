import {Fragment, useState} from "react";
import {AiOutlineCaretDown} from "react-icons/ai";
import {Product} from "@prisma/client";

type Props = {
    product: Product
};

const ProductSpecification = ({product}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div>
            <div id="specs" className={`
                relative
                flex flex-col gap-3
                overflow-y-hidden
                transition-all
                duration-700
                ${isExpanded ? "h-auto" : "h-[560px]"}
                ${isExpanded ? "after:hidden" : "after:absolute"}
                after:content-['']
                after:bottom-0
                after:w-full
                after:h-[150px]
                after:bg-gradient-to-b
                after:from-transparent
                after:to-gray-900
                `}
            >
                Specification
                {product.properties.filter((property: any) => property?.title !== "description").map((property: any) => (
                    <Fragment key={property.value + property.title}>
                        <div className="grid grid-cols-2 justify-between text-sm lg:text-lg text-gray-400 ">
                            <span>
                                {property.title}
                            </span>
                            <span>
                               {property.value}
                           </span>
                        </div>
                        <hr className="border-gray-500 w-full"/>
                    </Fragment>
                ))}
            </div>
            <AiOutlineCaretDown
                size={40}
                className={`mx-auto -mt-3 text-gray-600 hover:text-gray-800 cursor-pointer transition-all ${isExpanded ? "rotate-180" : "rotate-0"}`}
                onClick={() => setIsExpanded(value => !value)}
            />
        </div>
    );
};

export default ProductSpecification;