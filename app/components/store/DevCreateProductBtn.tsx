"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: "GIGABYTE GeForce RTX 4070 GAMING OC 12GB",
            description: "",
            manufacturer: "Nvidia",
            price: 719.8,
            category: "GPUs",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315472/video_image-Tf-w_k_bs-removebg-preview_ohdght.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315519/video_image-4wdWWwwq--removebg-preview_suciko.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315579/video_image-EXqD-sCeg-removebg-preview_ht6twp.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315609/video_image-F6CvmwCX_-removebg-preview_dueaji.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315646/video_image-G0S1OsR8z-removebg-preview_orsm3f.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688315677/video_image-f3ZCNR264-removebg-preview_nehayp.png",
            ],
            properties: [
                { title: "Chipset", value: "NVIDIA® GeForce® RTX 4070", primary: true},
                { title: "GPU Boost Clock", value: "2565 MHz", primary: false},
                { title: "Overclocked", value: "Yes", primary: true},
                { title: "VRAM Type", value: "GDDR6X", primary: false},
                { title: "VRAM", value: 12, primary: true},
                { title: "Bus Width", value: "192bit", primary: true},
                { title: "Connector", value: "PCIe 4.0", primary: true},
                { title: "HDMI", value: 1, primary: false},
                { title: "miniHDMI", value: "No", primary: false},
                { title: "DVI", value: "No", primary: false},
                { title: "VGA", value: "No", primary: false},
                { title: "Display Port", value: 2, primary: false},
                { title: "SLI", value: "No", primary: false},
                { title: "Power Connector", value: "1x 16pin (12VHPWR)", primary: true},
                { title: "Recommended power supply", value: "700 W", primary: false},
                { title: "DirectX", value: "12", primary: false},
                { title: "Cooler Width", value: "Tri-Slot", primary: false},
                { title: "GPU Length (mm)", value: 300, primary: true},
                { title: "Illumination", value: "multicoloured (RGB)", primary: false},
                { title: "description", value: "NVIDIA® GeForce® RTX 4070, Overclocked"},
                { title: "description", value: "Active Cooling (Tri-Slot), RGB illuminated"},
                { title: "description", value: "1x HDMI, 2x DisplayPort"},
                { title: "description", value: "Power Supply: 1x 16pin (12VHPWR), 700 W PSU recommended"},
                { title: "description", value: "Card length approx. 300 mm"},
                { title: "description", value: "Ada Lovelace architecture, with ray tracing and DLSS 3"}
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