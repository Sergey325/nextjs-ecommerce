"use client"

import {useCallback, useEffect, useState} from "react";
import {BiSquareRounded} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import qs from "query-string";
import {useRouter, useSearchParams} from "next/navigation";

type Props = {
    multiplyParameter?: boolean
    urlParameter: string,
    urlValue: string,
    label: string
    colorOnChecked?: string
};

const CheckBox = ({label, urlParameter, urlValue, colorOnChecked, multiplyParameter = true}: Props) => {
    const router = useRouter()
    const params = useSearchParams()

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        const paramValues = params?.getAll(urlParameter) || [];
        setIsChecked(paramValues.includes(urlValue));
    }, [params, urlParameter]);

    const handleAction = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const existingValues = params?.getAll(urlParameter) || [];

        if (existingValues.includes(urlValue)) {
            const updatedQuery = {
                ...currentQuery,
                [urlParameter]: existingValues.filter(value => value !== urlValue),
            };
            const url = qs.stringifyUrl({
                url: "/store",
                query: updatedQuery,
            }, { skipNull: true });
            router.push(url);
        } else {
            let updatedQuery;

            if (multiplyParameter) {
                const updatedValues = [...existingValues, urlValue];
                updatedQuery = {
                    ...currentQuery,
                    [urlParameter]: updatedValues,
                };
            } else {
                updatedQuery = {
                    ...currentQuery,
                    [urlParameter]: urlValue,
                };
            }

            const url = qs.stringifyUrl({
                url: "/store",
                query: updatedQuery,
            }, { skipNull: true });
            router.push(url);
        }
    }, [urlParameter, urlValue, multiplyParameter, params, router]);

    return (
        <div className={`flex items-center gap-1 cursor-pointer group select-none transition ${isChecked ? colorOnChecked : "text-current"}`} onClick={handleAction}>
            <div className={`
                rounded-md 
                relative
            `}>
                <BiSquareRounded size={20} className=""/>
                <BsCheck size={20} className={`absolute top-0 left-0 ${isChecked ? "scale-100" : "scale-0"} transition ${colorOnChecked}`}/>
            </div>
            <span className="text-base">{label}</span>
        </div>
    );
};

export default CheckBox;