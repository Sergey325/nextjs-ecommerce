'use client'

import {Toaster} from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster toastOptions={{
            style: {
                background: "#1E293B",
                color: "#D0D4DA"
            }
        }}/>
    )
}

export default ToasterProvider;