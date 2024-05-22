"use client"

import {useState} from "react";
import {BiSquareRounded} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import useUrlParams from "@/app/hooks/useUrlParams";

type Props = {
    multiplyParameter?: boolean
    urlParameter?: string,
    urlValue?: string,
    label: string
    colorOnChecked?: string
    onChange?: (isChecked: boolean) => void
    initialValue?: boolean
};

const CheckBox = ({label, urlParameter = "", urlValue = "", colorOnChecked, multiplyParameter = true, initialValue = false, onChange}: Props) => {
    const [isChecked, setIsChecked] = useState(initialValue)
    const {changeUrl} = useUrlParams({urlValue, urlParameter, multiplyParameter, setIsChecked})

    const handleClick = () => {
        if (urlParameter) {
            changeUrl()
        } else {
            onChange?.(!isChecked)
            setIsChecked(!isChecked)
        }
    }

    return (
        <div className={`flex items-center gap-1 cursor-pointer group select-none transition ${isChecked ? colorOnChecked : "text-current"}`} onClick={handleClick}>
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