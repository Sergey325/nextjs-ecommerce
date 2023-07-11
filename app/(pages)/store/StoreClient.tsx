"use client"

import Categories from "@/app/(pages)/store/components/Categories";
import Container from "@/app/components/Container";
import Sorting from "@/app/(pages)/store/components/Sorting";
import {FaFilter} from "react-icons/fa";
import EmptyState from "@/app/components/EmptyState";
import ProductsLayout from "@/app/(pages)/store/components/ProductsLayout";
import {Product, User} from "@prisma/client";
import FilterPanel from "@/app/(pages)/store/components/FilterPanel";
import useFilterModal from "@/app/hooks/useFilterModal";
import {BiSearch} from "react-icons/bi";
import ToolTip from "@/app/components/ToolTip";
import InputFilter from "@/app/components/inputs/InputFilter";
import DevCreateProductBtn from "@/app/(pages)/store/components/DevCreateProductBtn";

type Props = {
    currentUser: User | null,
    products: Product[]
    productsByCategory: Product[]
};

const StoreClient = ({currentUser, products, productsByCategory}: Props) => {
    const filterModal = useFilterModal()

    return (
        <div className="relative">
            <hr className="border-gray-800"/>
            <Categories/>
            <hr className="border-gray-800"/>
            <Container>
                <div className="relative flex pt-10 gap-6">
                    <FilterPanel productsByCategory={productsByCategory}/>
                    <div className="w-full flex-col px-5 sm:px-0">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                            <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center gap-3 order-2 sm:order-1">
                                <Sorting/>
                                <ToolTip label={"Filters"}>
                                    <FaFilter className="block lg:hidden text-gray-400 hover:text-gray-600 transition cursor-pointer" size={24}  onClick={filterModal.onOpen}/>
                                </ToolTip>
                            </div>
                            <div className="flex items-center w-full sm:w-auto hover:drop-shadow-[0_0_5px_rgba(98,143,200,0.25)] transition order-1 pl-1 sm:order-2">
                                <BiSearch className="text-gray-400 -mr-7 z-10" size={24}/>
                                <InputFilter type={"text"} id={"title"} placeholder={"Search"} debounced styles="text-gray-400 outline-none pl-7 py-1.5 rounded-md bg-gray-800 w-full sm:max-w-[180px]"/>
                            </div>
                            {/*<DevCreateProductBtn/>*/}
                        </div>
                        {
                            !products.length
                                ?
                                <EmptyState showReset title="No exact matches" subtitle={"Try changing or removing some of your filters"}/>
                                :
                                <ProductsLayout products={products} currentUser={currentUser}/>
                        }

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StoreClient;