"use client"

import axios from "axios";
import toast from "react-hot-toast";
import React from "react";

const DevCreateProductBtn = () => {
    const createProduct = () => {
        const data = {
            title: "ASUS TUF GAMING B550M-E WIFI",
            description: "",
            manufacturer: "ASUS",
            price: 121.50,
            category: "Motherboards",
            images: [
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688762142/908294988548BAEF81C14D57AABF425E-removebg-preview_kkmu46.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688762265/video_image-s65hxkztz-removebg-preview_gdwper.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688762346/video_image-lAEQDOI4U-removebg-preview_ijnq9d.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688762404/video_image-9HbyMI0Lg-removebg-preview_imhzfq.png",
                "https://res.cloudinary.com/dnoxhtgef/image/upload/v1688762441/90829498961F37E3FBB0474CA958DCB0-removebg-preview_i2ux6g.png",
            ],
            properties: [
                { title: "Processor Socket", value: "AM4", primary: true},
                { title: "integrated CPU", value: "No", primary: false},
                { title: "Form factor", value: "M-ATX", primary: true},
                { title: "Chipset Type", value: "AMD B550", primary: true},
                { title: "RAM Sockets", value: "4", primary: true},
                { title: "RAM technology", value: "DDR4", primary: true},
                { title: "Max. RAM", value: "128 GB", primary: false},
                { title: "PCIe x16 Slots", value: "1", primary: false},
                { title: "Max. PCIe x16 Version", value: "4.0", primary: false},
                { title: "PCIe x1 Slots", value: "2", primary: false},
                { title: "SATA3 Connectors", value: "2", primary: false},
                { title: "SATA3 RAID", value: "Yes", primary: false},
                { title: "Total no. of M.2 ports", value: "2", primary: false},
                { title: "M.2 Slot", value: "Yes", primary: true},
                { title: "USB Typ C ports", value: "1x USB 3.1 Gen1 Type C", primary: false},
                { title: "USB 3.1 Gen2 connectors (USB3.1)", value: "2", primary: false},
                { title: "USB 3.1 Gen1 connectors (USB3.0)", value: "3", primary: false},
                { title: "USB 2.0 Connectors", value: "4", primary: false},
                { title: "Ethernet", value: "GB-LAN", primary: false},
                { title: "WiFi", value: "Yes", primary: true},
                { title: "SLI support", value: "No", primary: true},
                { title: "Sound Onboard", value: "Yes", primary: false},
                { title: "description", value: "M-ATX, Socket AM4"},
                { title: "description", value: "AMD B550, 4x DDR4 up to 128 GB"},
                { title: "description", value: "1x PCIe (x16), 2x PCIe (x1)"},
                { title: "description", value: "4x SATA3, 2x M.2, WiFi, GB-LAN"},
                { title: "description", value: "1x USB 3.1 Gen1 Typ C, 2x USB 3.1 Gen2, 3x USB 3.1 Gen1, 4x USB2.0"},
                { title: "description", value: "HDMI, 1x DisplayPort 1.2, Bluetooth"}
            ],
            sale: 0,
            immediatelyAvailable: false,
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