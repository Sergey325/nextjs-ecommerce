"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: "ASUS DUAL Radeon RX6700XT DUAL-RX6700XT-12G",
            description: "",
            manufacturer: "AMD",
            price: 386.50,
            category: "GPU",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687612433/ASUS_DUAL_Radeon_RX6700XT_dotlxz.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_1_gkpczx.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_imev4p.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_3_fohlb3.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_2_qnrlxh.png",
            ],
            properties: [
                { title: "Chipset", value: "AMD Radeon™ RX 6700 XT"},
                { title: "VRAM", value: 12},
                { title: "Overclocked", value: false},
                { title: "Bus Width", value: "192bit"},
                { title: "Connector", value: "PCIe 4.0"},
                { title: "Power Connector", value: "8pin + 6pin"},
                { title: "GPU Length (mm)", value: 295},
            ],
            sale: 12,
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