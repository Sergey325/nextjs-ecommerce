"use client"

import {
    BsCpuFill,
    BsDeviceSsdFill,
    BsFan,
    BsFillLightningChargeFill,
    BsGpuCard,
    BsMotherboardFill
} from "react-icons/bs";
import {FaMemory} from "react-icons/fa";
import {GiAbstract049} from "react-icons/gi";

import CategoryBox from "@/app/(pages)/store/components/CategoryBox";

import {useSearchParams} from "next/navigation";
import {CategoryFilters} from "@/app/types";

export const categories = [
    {
        label: 'Processors',
        icon: BsCpuFill,
        properties: [
            { title: "CPU Series", value: "AMD Ryzen™ 7", primary: false},
            { title: "Processor Socket", value: "AM4", primary: true},
            { title: "CPU performance", value: "High End", primary: false},
            { title: "CPU Cores", value: 8, primary: true},
            { title: "Threads", value: 16, primary: true},
            { title: "Speed", value: "3.40 GHz", primary: false},
            { title: "CPU Turbo Speed", value: "4.60 GHz", primary: false},
            { title: "L3 Cache", value: 36, primary: true},
            { title: "Graphics integrated", value: "no integrated GPU", primary: true},
            { title: "TDP", value: "65 W", primary: false},
            { title: "Unlocked multiplier", value: "Yes", primary: false},
            { title: "Packaging", value: "tray", primary: true},
            { title: "description", value: "High End Octa Core CPU, Boxed (without heatsink)"},
            { title: "description", value: "for Socket AM4, 65 W TDP"},
            { title: "description", value: "8 Cores / 16 Threads"},
            { title: "description", value: "Base clock: 3.40 GHz, Turbo clock: 4.60 GHz"},
            { title: "description", value: "36 MB L3 cache, Unlocked multiplier"}
        ] as CategoryFilters,
    },
    {
        label: 'Motherboards',
        icon: BsMotherboardFill,
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
        ] as CategoryFilters,
    },
    {
        label: 'GPUs',
        icon: BsGpuCard,
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
        ] as CategoryFilters,
    },
    {
        label: 'RAM',
        icon: FaMemory,
        properties: [
            { title: "RAM Technology", value: "DDR4", primary: true},
            { title: "Capacity", value: "16", primary: true},
            { title: "Number of modules", value: "2x 8GB Kit", primary: true},
            { title: "RAM Speed", value: "3200 MHz", primary: true},
            { title: "Type", value: "DIMM 288 Pin", primary: false},
            { title: "CAS Latency", value: "CL16", primary: true},
            { title: "ECC", value: "No", primary: false},
            { title: "Registered", value: "No", primary: false},
            { title: "Illumination", value: "No", primary: true},
            { title: "Colour", value: "gray", primary: false},
            { title: "Special Features", value: "Intel XMP 2.0 certified", primary: false},
            { title: "description", value: "16 GB RAM, 2x 8 GB Kit"},
            { title: "description", value: "DDR4, 3200 MHz (PC4-25600U)"},
            { title: "description", value: "DIMM 288 Pin, CL16"},
            { title: "description", value: "gray"},
            { title: "description", value: "Intel XMP 2.0 certified"}
        ] as CategoryFilters,
    },
    {
        label: 'Hard Drives',
        icon: BsDeviceSsdFill,
        properties: [
            { title: "Form factor", value: "M.2", primary: true},
            { title: "Interface", value: "PCI Express 4.0 x4", primary: true},
            { title: "NVMe", value: "Yes", primary: true},
            { title: "Capacity", value: "1TB", primary: true},
            { title: "Installation height", value: "3.5 mm", primary: false},
            { title: "Technology", value: "3D-NAND QLC", primary: false},
            { title: "Reading Speed", value: "3500 MB/s", primary: false},
            { title: "Writing Speed", value: "2100 MB/s", primary: false},
            { title: "Hardware encryption", value: "No", primary: false},
            { title: "Heatsink", value: "M.2 without heat sink", primary: false},
            { title: "description", value: "1.0 TB SSD, Connection via PCI Express 4.0 x4 (NVMe)"},
            { title: "description", value: "Form factor M.2 (2280), installation height 3.5 mm, without heat sink"},
            { title: "description", value: "Write speed up to 2100 MB/s, up to 3500 MB/s"},
            { title: "description", value: "3D-NAND QLC Storage Cells"},
        ] as CategoryFilters,
    },
    {
        label: 'CPU Coolers',
        icon: BsFan,
        properties: [
            { title: "Cooler Type", value: "Tower", primary: true},
            { title: "Product Type", value: "Heatsink with fan", primary: false},
            { title: "CPU Socket", value: "AM4", primary: true},
            { title: "Max. TDP", value: "150 watts", primary: true},
            { title: "Fan size", value: "120 mm", primary: false},
            { title: "Installed fans", value: "1", primary: false},
            { title: "Speed Range", value: "500-1800rpm", primary: true},
            { title: "maximum Volume (dB)", value: 26.8, primary: true},
            { title: "Max. airflow", value: "61 cfm (103.6 m³/h)", primary: false},
            { title: "Illumination", value: "multicolored", primary: true},
            { title: "Installation height (mm)", value: 140, primary: true},
            { title: "description", value: "Tower cooler up to 150 Watt TDP, 14.0 cm Installation height"},
            { title: "description", value: "1x 120 mm fan (PWM)"},
            { title: "description", value: "500 - 1800 rpm, max. 61 cfm (103.6 m³/h) @ 25.6 dB"},
            { title: "description", value: "compatible sockets: 115x / 1200, 1700, AM2 (+) / AM3 (+) / FM1 / FM2 (+), AM4, AM5"},
        ] as CategoryFilters,
    },
    {
        label: 'Cases',
        icon: GiAbstract049,
        properties: [
            { title: "Form factor", value: "Midi-Tower", primary: true},
            { title: "Max motherboard form factor", value: "ATX", primary: true},
            { title: "Supported GPU length (mm)", value: 317, primary: true},
            { title: "Supported CPU cooler height (mm)", value: 157, primary: true},
            { title: '2.5" Expansion Bays (internal)', value: "2", primary: false},
            { title: '3.5" Expansion Bays (internal)', value: "2", primary: false},
            { title: '3.5" Expansion Bays (external)', value: "No", primary: false},
            { title: '5.25" Expansion Bays (external)', value: "No", primary: false},
            { title: "Installed 120mm fans", value: 0, primary: true},
            { title: "Installed 140mm fans", value: 1, primary: true},
            { title: "Installed 200mm fans", value: 0, primary: true},
            { title: "possible 120mm fans", value: 0, primary: true},
            { title: "possible 140mm fans", value: 6, primary: true},
            { title: "possible 200mm fans", value: 0, primary: true},
            { title: "USB Type C ports", value: "No", primary: false},
            { title: "USB 3.1 Gen 2 connectors (USB 3.1)", value: "0", primary: false},
            { title: "USB 3.1 Gen 1 connectors (USB 3.0)", value: "2", primary: false},
            { title: "USB 2.0 Connectors", value: "1", primary: false},
            { title: "Material", value: "Plastic, steel, tempered glass", primary: false},
            { title: "Illumination", value: true, primary: true},
            { title: "Color", value: "Black", primary: true},
            { title: "description", value: "Midi tower with glass window, illuminated in multiple colors"},
            { title: "description", value: "supports ATX, mATX, mini-ITX Boards"},
            { title: "description", value: "Internal: 2x 2.5, 2x 3.5"},
            { title: "description", value: "1x 120 mm fan"},
            { title: "description", value: "2x USB3.1 Gen 1, 1x USB2.0"},
            { title: "description", value: "CPU cooler height up to 157 mm, GPU up to ~ 317 mm"}
        ] as CategoryFilters,
    },
    {
        label: 'PSUs',
        icon: BsFillLightningChargeFill,
        properties: [
            { title: "Power", value: "700 Watt", primary: true},
            { title: "Form factor", value: "ATX", primary: true},
            { title: "PCIe 16pin (12+4 12VHPWR) connectors", value: "No", primary: false},
            { title: "PCIe 8pin Connectors", value: 2, primary: true},
            { title: "PCIe 6pin Connectors", value: 2, primary: true},
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
            { title: "description", value: "80 PLUS certificate"}
        ] as CategoryFilters,
    },
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')

    return (
        <div className="
            flex items-center justify-between
            mx-auto
            w-full
            lg:w-[90%]
            lg:px-20
            overflow-y-hidden overflow-x-auto
            "
        >
            {categories.map(item => (
                <CategoryBox
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    selected={category === item.label}
                />
            ))}
        </div>
    );
};

export default Categories;