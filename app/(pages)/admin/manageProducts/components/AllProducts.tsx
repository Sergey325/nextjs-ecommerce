"use client"

import {Product} from "@prisma/client";
import Image from "next/image";
import ToolTip from "@/app/components/ToolTip";
import {BsFillTrashFill} from "react-icons/bs";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import {BiSearch} from "react-icons/bi";
import InputFilter from "@/app/components/inputs/InputFilter";
import Sorting from "@/app/(pages)/store/components/Sorting";
import {RiFileEditFill} from "react-icons/ri";

type Props = {
    products: Product[];
    onEditProduct: (product: Product) => void;
};


const AllProducts = async ({products, onEditProduct}: Props) => {
    const router = useRouter()

    const handleDelete = (productId: string) => {
        axios.delete(`/api/products/${productId}`)
            .then(() => {
                toast.success("Product deleted successfully!");
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div className="w-full sm:max-w-[280px] order-2 sm:order-1">
                    <Sorting baseUrl="/admin/manageProducts"/>
                </div>
                <div
                    className="relative flex items-center w-full sm:w-auto hover:drop-shadow-[0_0_5px_rgba(98,143,200,0.25)] transition order-1 sm:order-2">
                    <BiSearch className="absolute left-2 text-gray-400 z-10" size={24}/>
                    <InputFilter
                        type={"text"}
                        id={"title"}
                        placeholder={"Search"}
                        debounced
                        baseUrl="/admin/manageProducts"
                        styles="text-gray-400 outline-none pl-9 py-1.5 rounded-md bg-gray-800 w-full sm:max-w-[280px]"
                    />
                </div>
            </div>
            <div className="flex text-slate-400 flex-col xl:flex-row gap-10 xl:gap-20 items-start w-full">
                <div className="flex flex-col w-full pt-4 gap-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-lg">
                        <span className="">Product</span>
                        <span className="hidden sm:inline-block text-end">Price</span>
                        <span className="text-end pr-8">Action</span>
                    </div>
                    <hr className="border-gray-500 w-full"/>
                    {(products).map((product) => (
                        <div key={product.id} className="flex flex-col gap-4">
                            <div
                                className="flex flex-row w-full text-gray-400 text-sm md:text-lg justify-between items-center gap-5">
                                <div
                                    className="flex w-full sm:w-1/2 gap-2 items-center cursor-pointer"
                                    onClick={() => router.push(`/store/product/${product.id}`)}
                                >
                                    <Image src={product.images[0]} alt="productImage" height={100} width={100}
                                           className="size-[80px] md:size-[100px]"/>
                                    <span className="text-xs sm:text-sm md:text-base">{product.title}</span>
                                </div>
                                <span
                                    className="hidden sm:inline-block sm:w-[16%]">${product.price}
                                </span>
                                <div className="flex gap-6 pr-4">
                                    <ToolTip label={"Edit product"}>
                                        <RiFileEditFill
                                            className="text-gray-400 hover:text-gray-500 transition cursor-pointer"
                                            size={24}
                                            onClick={() => onEditProduct(product)}
                                        />
                                    </ToolTip>
                                    <ToolTip label={"Delete product"}>
                                        <BsFillTrashFill
                                            className="text-gray-400 hover:text-gray-500 transition cursor-pointer"
                                            size={24}
                                            onClick={() => handleDelete(product.id)}
                                        />
                                    </ToolTip>
                                </div>
                            </div>
                            <hr className="border-gray-500 w-full"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default AllProducts;