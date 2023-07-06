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

import {usePathname, useSearchParams} from "next/navigation";
import {CategoryFilters} from "@/app/types";

export const categories = [
    {
        label: 'Processors',
        icon: BsCpuFill,
        properties: [
            { title: "Processor Socket", value: "AM4"},
            { title: "CPU Cores", value: 8},
            { title: "Threads", value: 16},
            { title: "L3 Cache", value: 32},
            { title: "Graphics integrated", value: "AMD Radeon™ Vega 8"},
            { title: "Packaging", value: "tray"},
        ] as CategoryFilters,
    },
    {
        label: 'Motherboards',
        icon: BsMotherboardFill,
        properties: [
            { title: "Processor Socket", value: "AM4"},
            { title: "Form factor", value: "M-ATX"},
            { title: "Chipset Type", value: "AMD B550"},
            { title: "RAM Sockets", value: 4},
            { title: "RAM technology", value: "DDR4"},
            { title: "M.2 Slot", value: true},
            { title: "WiFi", value: true},
            { title: "SLI support", value: true},
            { title: "M.2 Slot", value: true},
        ] as CategoryFilters,
    },
    {
        label: 'GPUs',
        icon: BsGpuCard,
        properties: [
            { title: "Chipset", value: "AMD Radeon™ RX 6700 XT"},
            { title: "VRAM", value: 12},
            { title: "Overclocked", value: false},
            { title: "Bus Width", value: "192bit"},
            { title: "Connector", value: "PCIe 4.0"},
            { title: "Power Connector", value: "8pin + 6pin"},
            { title: "GPU Length (mm)", value: 295},
        ] as CategoryFilters,
    },
    {
        label: 'RAM',
        icon: FaMemory,
        properties: [
            { title: "RAM Technology", value: "DDR4"},
            { title: "VRAM", value: 12},
            { title: "Capacity", value: 16},
            { title: "Number of modules", value: "2x 8GB Kit"},
            { title: "RAM Speed", value: "3200 MHz"},
            { title: "Illumination", value: false},
            { title: "CAS Latency", value: "CL18"},
        ] as CategoryFilters,
    },
    {
        label: 'Hard Drives',
        icon: BsDeviceSsdFill,
        properties: [
            { title: "Form factor", value: "M.2"},
            { title: "Interface", value: "PCI Express 4.0 x4"},
            { title: "Capacity", value: "1TB"},
            { title: "NVMe", value: "true"},
            { title: "Speed", value: "Write speed up to 2800 MB/s, up to 3500 MB/s"},
        ] as CategoryFilters,
    },
    {
        label: 'CPU Coolers',
        icon: BsFan,
        properties: [
            { title: "Cooler Type", value: "Tower"},
            { title: "CPU Socket", value: "AM4"},
            { title: "Max. TDP", value: "150 watts"},
            { title: "Installation height (mm)", value: 120},
            { title: "Illumination", value: true},
            { title: "maximum Volume", value: "26.8 dB"},
            { title: "Speed Range", value: "1500rpm"},
        ] as CategoryFilters,
    },
    {
        label: 'Cases',
        icon: GiAbstract049,
        properties: [
            { title: "Form Factor", value: "Midi-Tower"},
            { title: "Supported mainboard form factors", value: "M-ATX"},
            { title: "Supported GPU length (mm)", value: 230},
            { title: "Supported CPU cooler height (mm)", value: 170},
            { title: "Illumination", value: true},
            { title: "maximum Volume", value: "26.8 dB"},
            { title: "Color", value: "Black"},
            { title: "Installed 120mm fans", value: 0},
            { title: "Installed 140mm fans", value: 1},
            { title: "Installed 200mm fans", value: 0},
            { title: "possible 120mm fans", value: 0},
            { title: "possible 140mm fans", value: 6},
            { title: "possible 200mm fans", value: 0},
        ] as CategoryFilters,
    },
    {
        label: 'PSUs',
        icon: BsFillLightningChargeFill,
        properties: [
            { title: "Power (Watt)", value: 700},
            { title: "Form Factor / Type", value: ""},
            { title: "PCIe 8pin Connectors", value: 2},
            { title: "PCIe 6pin Connectors", value: 2},
            { title: "SATA Connectors", value: 6},
            { title: "Active Cooling", value: true},
            { title: "Fan size", value: "120mm"},
            { title: "80 PLUS Certificate", value: "80 PLUS"},
            { title: "Illumination", value: false},
            { title: "Cable Management", value: false},
        ] as CategoryFilters,
    },
]

const Categories =() => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === "/store"

    if(!isMainPage) {
        return null
    }

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