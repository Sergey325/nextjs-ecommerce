"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: 'Inter-Tech HiPower SP-550 550 Watt',
            description: "The 550 W version of the HiPower series reliably supplies power-hungry systems with electricity and also saves electricity costs. With an efficiency of over 85%, the power loss is kept low, which is clearly reflected in the power consumption.\n" +
                "With 40 A on the 12 V line, there is more than enough power available for potent hardware, which is protected from damage by the built-in protective circuits (OPP, OVP and SCP) in all cases.\n" +
                "The powerful 120 mm fan reliably ensures proper cooling of the power supply and the multitude of connections round off the overall package.",
            manufacturer: "Inter-Tech",
            price: 32.05,
            category: "PSUs",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689096527/video_image-tCy2lcuzH-removebg-preview_qeqki1.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689096605/video_image-Sh0tkIxYO-removebg-preview_zxsdxe.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689096642/video_image-Btp2EOHiG-removebg-preview_gyjhkv.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1689096690/video_image-kpIYqLlpP-removebg-preview_cgh9ly.png",
            ],
            properties: [
                { title: "Power", value: "550 Watt", primary: true},
                { title: "Form factor", value: "ATX", primary: true},
                { title: "PCIe 16pin (12+4 12VHPWR) connectors", value: "No", primary: false},
                { title: "PCIe 8pin Connectors", value: "No", primary: true},
                { title: "PCIe 6pin Connectors", value: "1", primary: true},
                { title: "Molex Connectors", value: "4", primary: false},
                { title: "SATA Connectors", value: "4", primary: true},
                { title: "Active Cooling", value: "Yes", primary: true},
                { title: "Fans", value: "1", primary: false},
                { title: "Fan size", value: "120mm", primary: true},
                { title: "Certificate", value: "80 PLUS", primary: true},
                { title: "Illumination", value: "No", primary: true},
                { title: "Cable Management", value: "No", primary: true},
                { title: "description", value: "550 Watt, ATX, active PFC"},
                { title: "description", value: "4x SATA, 4x Molex"},
                { title: "description", value: "1x PCIe 6pin"},
                { title: "description", value: "active-cooling, 1x 120 mm fan"},
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