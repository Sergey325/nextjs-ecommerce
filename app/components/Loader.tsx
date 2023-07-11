"use client"

import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <PuffLoader size={150}  color="#4D38D6"/>
        </div>
    );
};

export default Loader;