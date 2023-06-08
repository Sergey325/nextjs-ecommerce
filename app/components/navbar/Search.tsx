'use client'

import {BiSearch} from 'react-icons/bi';
import {useState} from "react";

const Search = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`
                hidden
                sm:flex
                justify-between 
                rounded-xl 
                ${isActive && "bg-slate-800"}
                p-2 
                transition-all 
                duration-300 
                drop-shadow-none hover:drop-shadow-[0_0_10px_rgba(98,143,200,0.25)]
            `}>
            <input
                className={`
                    h-8
                    ${isActive ? "w-full" : "w-0"}
                    bg-transparent
                    outline-none
                    pl-1
                    text-neutral-200
                    placeholder:
                    text-lg
                    placeholder:gray-600/0
                    transition-all
                    duration-500
                    ease-out
                `}
                placeholder={isActive ? "What are you looking for?" : "w-0"}
            />
            <BiSearch
                size={32}
                className="fill-gray-400 cursor-pointer"
                onClick={() => setIsActive(true)}
            />
        </div>
    )
};

export default Search;