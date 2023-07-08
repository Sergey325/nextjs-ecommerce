"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: "Thermaltake TR2 S 600 Watt",
            description: "Incorporating various high-quality components, the TR2 S Series saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most demanding requirements. An embedded intelligent cooling fan delivers excellent airflow at an exceptionally low noise level. Additionally, the Single +12V rail design enables non-stop usage with stable and reliable performance.",
            manufacturer: "Thermaltake",
            price: 64.42,
            category: "PSUs",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688821539/video_image-FICztiMZw-removebg-preview_1_vxmmvp.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688821164/video_image-zmvAYyNKC-removebg-preview_u2xlob.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688821210/video_image-rouFo1kH5-removebg-preview_qztw2s.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688821432/video_image-OSy7RMHdI-removebg-preview_1_jz74ly.png",

            ],
            properties: [
                { title: "Power", value: "700 Watt", primary: true},
                { title: "Form factor", value: "ATX", primary: true},
                { title: "PCIe 16pin (12+4 12VHPWR) connectors", value: "No", primary: false},
                { title: "PCIe 8pin Connectors", value: "2", primary: true},
                { title: "PCIe 6pin Connectors", value: "2", primary: true},
                { title: "Molex Connectors", value: "4", primary: false},
                { title: "SATA Connectors", value: "6", primary: true},
                { title: "Active Cooling", value: "Yes", primary: true},
                { title: "Fans", value: "1", primary: false},
                { title: "Fan size", value: "120mm", primary: true},
                { title: "Certificate", value: "80 PLUS", primary: true},
                { title: "Illumination", value: "No", primary: true},
                { title: "Cable Management", value: "No", primary: true},
                { title: "description", value: "700 Watt, ATX, active PFC"},
                { title: "description", value: "5x SATA, 4x Molex"},
                { title: "description", value: "2x PCIe 8pin, 2x PCIe 6pin"},
                { title: "description", value: "active-cooling, 1x 120 mm fan"},
                { title: "description", value: "80 PLUS certificate"},
            ],
            sale: 4,
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