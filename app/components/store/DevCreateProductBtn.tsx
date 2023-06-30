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
            category: "GPUs",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687612433/ASUS_DUAL_Radeon_RX6700XT_dotlxz.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_1_gkpczx.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_imev4p.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_3_fohlb3.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1687613352/image-removebg-preview_2_qnrlxh.png",
            ],
            properties: [
                { title: "Chipset", value: "AMD Radeon™ RX 6700 XT", primary: true},
                { title: "GPU Base Clock", value: "2321 MHz", primary: false},
                { title: "GPU Boost Clock", value: "2581 MHz", primary: false},
                { title: "Overclocked", value: "No", primary: true},
                { title: "VRAM Type", value: "GDDR6", primary: false},
                { title: "VRAM", value: 12, primary: true},
                { title: "Bus Width", value: "192bit", primary: true},
                { title: "Connector", value: "PCIe 4.0", primary: true},
                { title: "HDMI", value: 1, primary: false},
                { title: "miniHDMI", value: "No", primary: false},
                { title: "DVI", value: "No", primary: false},
                { title: "VGA", value: "No", primary: false},
                { title: "Display Port", value: 2, primary: false},
                { title: "SLI", value: "No", primary: false},
                { title: "Power Connector", value: "8pin + 6pin", primary: true},
                { title: "Recommended power supply", value: "650 W", primary: false},
                { title: "DirectX", value: "12", primary: false},
                { title: "Cooler Width", value: "Tri-Slot", primary: false},
                { title: "GPU Length (mm)", value: 295, primary: true},
                { title: "Illumination", value: "multicoloured (RGB)", primary: false},
                { title: "description", value: "12 GB GDDR6 (192bit), Connection via PCIe 4.0"},
                { title: "description", value: "Active Cooling (Tri-Slot), RGB illuminated"},
                { title: "description", value: "1x HDMI, 2x DisplayPort"},
                { title: "description", value: "Power Supply: 1x 6pin, 1x 8pin, 650 W PSU recommended"},
                { title: "description", value: "Card length approx. 295 mm"}
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