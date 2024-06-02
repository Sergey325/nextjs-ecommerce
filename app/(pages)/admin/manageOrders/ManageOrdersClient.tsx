"use client"

import {Order} from "@prisma/client";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo} from "react";
import qs from "query-string";
import Container from "@/app/components/Container";
import OrderList from "./components/OrderList";

type Props = {
    orders: Order[]
};

const ManageOrdersClient = ({orders}: Props) => {
    const params = useSearchParams()
    const router = useRouter()

    const status = useMemo(() => {
        return params?.get("status") || "All";
    }, [params])

    const handleClick = useCallback((statusValue: string) => {
        let currentQuery = {}

        if (status === statusValue) return null

        if(params){
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            status: statusValue
        }

        const url = qs.stringifyUrl({
            url: 'admin/manageOrders/',
            query: updatedQuery
        }, {skipNull: true})

        router.push(url)
    }, [params])

    return (
        <Container>
            <div className="text-slate-400">
                <div className='h-full w-full flex flex-col justify-center items-center rounded-t-full '>
                    <div className="bg-slate-800 flex justify-center items-center w-full rounded-t-full cursor-pointer text-xs sm:text-base">
                        <div
                            className={`${status === "All" && "bg-slate-900"} py-2 rounded-tl-full text-center w-full transition hover:bg-slate-900`}
                            onClick={() => handleClick("All")}
                        >
                            All
                        </div>
                        <div
                            className={`${status === "On Process" && "bg-slate-900"} py-2 text-center w-full border-l-2 border-slate-500 transition hover:bg-slate-900`}
                            onClick={() => handleClick("On Process")}
                        >
                            On Process
                        </div>
                        <div
                            className={`${status === "Dispatched" && "bg-slate-900"} py-2 text-center w-full border-l-2 border-slate-500 transition hover:bg-slate-900`}
                            onClick={() => handleClick("Dispatched")}
                        >
                            Dispatched
                        </div>
                        <div
                            className={`${status === "Delivered" && "bg-slate-900"} py-2 rounded-tr-full text-center w-full border-l-2 border-slate-500 transition hover:bg-slate-900`}
                            onClick={() => handleClick("Delivered")}
                        >
                            Delivered
                        </div>
                    </div>
                    <div className="border-slate-800 px-4 pb-4 border-x border-b w-full">
                        <OrderList orders={orders}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ManageOrdersClient;