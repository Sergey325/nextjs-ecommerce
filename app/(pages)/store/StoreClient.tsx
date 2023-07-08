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
                        <div className="flex gap-3 items-center">
                            <Sorting/>
                            <FaFilter className="block lg:hidden text-gray-400 hover:text-gray-600 transition cursor-pointer" size={24}  onClick={filterModal.onOpen}/>
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