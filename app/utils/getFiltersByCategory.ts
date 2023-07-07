// import {Filter} from "@/app/types";
//
//
// export const getFiltersByCategory = (category: string, Chipset:string, VRAM: string, ): Filter[] => {
//     switch (category) {
//         case 'GPUs':
//             return [
//                 { param: 'Chipset', title: 'Chipset' },
//                 { param: 'VRAM', title: 'VRAM' },
//                 { param: 'Overclocked', title: 'Overclocked' },
//                 { param: 'BusWidth', title: 'Bus Width' },
//                 { param: 'Connector', title: 'Connector' },
//                 { param: 'PowerConnector', title: 'Power Connector' },
//             ];
//         // Add more cases for other categories as needed
//         default:
//             [];
//     }
// };

import {Filter} from "@/app/types";
import {Product} from "@prisma/client";

export interface IProductsParams {
    category?: string;

    //GPU
    Chipset?: string[];
    VRAM?: string[];
    Overclocked?: string[];
    BusWidth?: string[];
    Connector?: string[];
    PowerConnector?: string[];
    minGPULength?: string;
    maxGPULength?: string;

    //Processor
    ProcessorSocket?: string[], //as well for motherboards
    CPUCores?: string[],
    Threads?: string[],
    L3Cache?: string[],
    Graphicsintegrated?: string[],
    Packaging?: string[]

    //Motherboard
    Formfactor?: string[],
    ChipsetType?: string[],
    RAMSockets?: string[],
    RAMtechnology?: string[],
    M2Slot?: string[],
    WiFi?: string[],
    SLIsupport?: string[]
}

export const FilterByProperties = (params: IProductsParams, product: Product) => {
    const {
        category,

        Chipset,
        VRAM,
        Overclocked,
        BusWidth,
        Connector,
        PowerConnector,
        minGPULength,
        maxGPULength,

        ProcessorSocket,
        CPUCores,
        Threads,
        L3Cache,
        Graphicsintegrated: GraphicsIntegrated,
        Packaging,

        Formfactor,
        ChipsetType,
        RAMSockets,
        RAMtechnology,
        M2Slot,
        WiFi,
        SLIsupport

    } = params

    let filters: Filter[] = []

    switch (category) {
        case 'Processors':

            filters = [
                {param: ProcessorSocket, title: "Processor Socket"},
                {param: CPUCores, title: "CPU Cores"},
                {param: Threads, title: "Threads"},
                {param: L3Cache, title: "L3 Cache"},
                {param: GraphicsIntegrated, title: "Graphics integrated"},
                {param: Packaging, title: "Packaging"}
            ];

            return isMatching(product, filters)

        case 'Motherboards':

            filters = [
                {param: ProcessorSocket, title: "Processor Socket"},
                {param: Formfactor, title: "Form factor"},
                {param: ChipsetType, title: "Chipset Type"},
                {param: RAMSockets, title: "RAM Sockets"},
                {param: RAMtechnology, title: "RAM technology"},
                {param: M2Slot, title: "M.2 Slot"},
                {param: WiFi, title: "WiFi"},
                {param: SLIsupport, title: "SLI support"},
            ];

            return isMatching(product, filters)

        case 'GPUs':

            const minGpuLength = parseInt(minGPULength ?? "0");
            const maxGpuLength = parseInt(maxGPULength ?? "99999");

            filters = [
                {param: Chipset, title: "Chipset"},
                {param: VRAM, title: "VRAM"},
                {param: Overclocked, title: "Overclocked"},
                {param: BusWidth, title: "Bus Width"},
                {param: Connector, title: "Connector"},
                {param: PowerConnector, title: "Power Connector"}
            ];

            return isMatching(product, filters) && isInRange(product, minGpuLength, maxGpuLength, "GPU Length (mm)")

        case 'RAM':
            return []
        case 'Hard Drives':
            return []
        case 'CPU Coolers':
            return []
        case 'Cases':
            return []
        case 'PSUs':
            return []
        default:
            return true

    }
}

const isMatching = (product: Product, filters: Filter[]) => {
    return filters.every( filter => {
        let {param, title} = filter;
        if(!param) return true
        if(!Array.isArray(param)) {
            param = [param]
        }
        return product.properties.some((property: any) => property.title === title && param?.includes(property.value))
    })
}

const isInRange = (product: Product, min: number, max: number, title: string) => {
    return product.properties.some((property: any) => property.title === title && property.value >= min && property.value <= max)
}
