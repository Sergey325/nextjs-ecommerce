"use client"

import axios from "axios";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";


const SuccessfulPayment = () => {
    const params = useSearchParams();

    useEffect(() => {
        axios.get("/api/order", {params: {sessionId: params?.get("session_id")}}).then((data: any) => {
            console.log(data.data.user)
            console.log(data.data.order)
        }).catch((e : Error) => {
            // @ts-ignore
            setError(e.response.data)
        })
    }, []);

    return (
        <div className="text-white text-5xl mx-auto">
            Success
        </div>
    );
};

export default SuccessfulPayment;