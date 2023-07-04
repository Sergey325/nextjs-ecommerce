"use client"

import {useState} from "react";
import {BiSquareRounded} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";

type Props = {

};

const CheckBox = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="flex items-center gap-1 cursor-pointer group">
            <div className={`
                rounded-md 
                text-gray-500
                relative
            `}>
                <BiSquareRounded size={20} className=""/>
                <BsCheck size={20} className="absolute top-0 left-0"/>
            </div>
            <span className="text-base">My Filter</span>
        </div>
    );
};

export default CheckBox;