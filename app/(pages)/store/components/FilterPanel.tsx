"use client"

import Filters from "@/app/(pages)/store/components/Filters";
import {Product} from "@prisma/client";
import {AiOutlineCloseCircle} from "react-icons/ai";
import useFilterModal from "@/app/hooks/useFilterModal";
import {MdFilterAltOff} from "react-icons/md";
import {useRouter} from "next/navigation";
import ToolTip from "@/app/components/ToolTip";

type Props = {
    productsByCategory: Product[]
};

const FilterPanel = ({productsByCategory}: Props) => {
    const router = useRouter()
    const filterModal = useFilterModal()

    return (
        <div className={`
                absolute lg:static top-0 left-0
                ${filterModal.isOpen ? "w-[100%] z-20" : "w-0 z-0"}
                max-w-[100%] lg:min-w-[300px] lg:max-w-[300px]
                bg-gray-950/90 lg:bg-transparent
                z-20
                h-[100%]
                overflow-hidden
            `}
             onClick={filterModal.onClose}
        >
            <aside
                className={`
                flex flex-col items-center w-full
                ${filterModal.isOpen ? "translate-x-0" : "-translate-x-96"}
                transition
                p-6
                text-xl text-gray-500
                border-gray-800 border-2
                w-[297px] lg:h-min
                lg:translate-x-0
                z-20
                bg-slate-950
                `}
                onClick={(e) => {e.stopPropagation()}}
            >
                <div className="flex w-full items-center justify-between">
                    <div className="lg:order-2">
                        <ToolTip label="Clear filters">
                            <MdFilterAltOff className="cursor-pointer hover:text-gray-600 size-[26px] hover:scale-125" onClick={() => {router.push("/store")}}/>
                        </ToolTip>
                    </div>
                    <span className="font-semibold lg:order-1">Filter By</span>
                    <AiOutlineCloseCircle className="block lg:hidden cursor-pointer hover:text-gray-600 lg:order-3" size={26} onClick={filterModal.onClose}/>
                </div>
                <hr className="border-gray-700 w-full mt-3"/>
                <Filters allProducts={productsByCategory}/>
            </aside>
        </div>
    );
};

export default FilterPanel;