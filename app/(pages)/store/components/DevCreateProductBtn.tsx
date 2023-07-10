"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: "AMD Ryzen 7 7700X box without cooler",
            description: "",
            manufacturer: "AMD",
            price: 342.50,
            category: "Processors",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689026138/video_image-HqFWI9Wlu-removebg-preview_ifjrpo.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689026187/video_image-wezLfbpBM-removebg-preview_aoroc8.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689026233/video_image-TKy7vXqRa-removebg-preview_kgbvck.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689026288/video_image-dTMAG3Heo-removebg-preview_wufblf.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689026445/video_image-XBkmgWD-B-removebg-preview_rtrqpb.png",
            ],
            properties: [
                { title: "CPU Series", value: "AMD Ryzen™ 7", primary: false},
                { title: "Processor Socket", value: "Socket AM5", primary: true},
                { title: "CPU performance", value: "Enthusiast", primary: false},
                { title: "CPU Cores", value: "8", primary: true},
                { title: "Threads", value: "16", primary: true},
                { title: "Speed", value: "4.50 GHz", primary: false},
                { title: "CPU Turbo Speed", value: "5.40 GHz", primary: false},
                { title: "L3 Cache", value: "32", primary: true},
                { title: "Graphics integrated", value: "AMD Radeon™ Graphics", primary: true},
                { title: "TDP", value: "105 W", primary: false},
                { title: "Unlocked multiplier", value: "Yes", primary: false},
                { title: "Packaging", value: "Boxed with heatsink", primary: true},
                { title: "description", value: "Enthusiast Octa Core CPU, Boxed (without heatsink)"},
                { title: "description", value: "for Socket AM5, 105 W TDP"},
                { title: "description", value: "8 Cores / 16 Threads, AMD Radeon™ Graphics integrated"},
                { title: "description", value: "Base clock: 4.50 GHz, Turbo clock: 5.40 GHz"},
                { title: "description", value: "32 MB L3 cache, Unlocked multiplier"}
            ],
            sale: 0,
            immediatelyAvailable: true,
        }

        axios.post("api/products", data)
            .then(() => {
                toast.success("Product created!")
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => {

            })
    }

    return (
        <button onClick={createProduct} className="text-white bg-orange-600">Create</button>
    );
};

export default DevCreateProductBtn;