import {useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect} from "react";
import qs from "query-string";

type Props = {
    multiplyParameter?: boolean
    urlParameter: string,
    urlValue: string,
    setIsChecked: (value: boolean) => void
}

const useUrlParams = ({urlValue, urlParameter, multiplyParameter, setIsChecked}: Props) => {
    const router = useRouter()
    const params = useSearchParams()

    useEffect(() => {
        const paramValues = params?.getAll(urlParameter) || [];
        setIsChecked(paramValues.includes(urlValue));
    }, [params, urlParameter]);

    const changeUrl = useCallback(() => {
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
    return {
        changeUrl,
    }
}

export default useUrlParams;