import Categories from "@/app/components/store/Categories";
import Container from "@/app/components/Container";
import React from "react";
import Sorting from "@/app/components/Sorting";

const StorePage = () => {
    return (
        <div className="gray-800">
            <hr className="border-gray-800"/>
            <Categories/>
            <hr className="border-gray-800"/>
            <Container>
                <div className="flex pt-10 gap-6">
                    <aside className="hidden lg:flex flex-col justify-center items-center p-6 text-xl text-gray-400 border-gray-800 border-2 ">
                        <span className="self-start">Filter By</span>
                        <hr className="border-gray-700 w-full"/>
                        <div className="w-[250px] text-lg pt-4">
                            Availability
                        </div>
                    </aside>
                    <div className="w-full flex-col">
                        <div className="flex justify-between items-center">
                            {/*<select name="sorting" id="sort-select" className="appearance-none bg-gray-800 outline-0 mb-2 shadow-none">*/}
                            {/*    <option className="outline-0 border-0 shadow-none" value="Price Low to High">Price Low to High</option>*/}
                            {/*    <option className="outline-0 border-0 shadow-none" value="Price Hign to Low">Price High to Low</option>*/}
                            {/*    <option className="outline-0 border-0 shadow-none" value="Alphabetically, A-Z">Alphabetically, A-Z</option>*/}
                            {/*    <option className="outline-0 border-0 shadow-none" value="Alphabetically, Z-A">Alphabetically, Z-A</option>*/}
                            {/*</select>*/}
                            <Sorting/>

                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default StorePage;