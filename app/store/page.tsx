import Categories from "@/app/components/store/Categories";
import Container from "@/app/components/Container";
import React from "react";
import Sorting from "@/app/components/Sorting";

const StorePage = () => {
    return (
        <div className="">
            <hr className="border-gray-800"/>
            <Categories/>
            <hr className="border-gray-800"/>
            <Container>
                <div className="flex pt-10 gap-6">
                    <aside className="hidden lg:flex flex-col justify-center items-center p-6 text-xl text-gray-500 border-gray-800 border-2 ">
                        <span className="self-start">Filter By</span>
                        <hr className="border-gray-700 w-full"/>
                        <div className="w-[250px] text-lg pt-4">
                            Availability
                        </div>
                    </aside>
                    <div className="w-full flex-col">
                        <div className="flex justify-between items-center">
                            <Sorting/>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default StorePage;