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

export interface IProductsParams {
    category?: string;
    Chipset?: string[];
    VRAM?: string[];
    Overclocked?: string[];
    BusWidth?: string[];
    Connector?: string[];
    PowerConnector?: string[];
    minGPULength?: string;
    maxGPULength?: string;
}

export const FilterByProperties = (params: IProductsParams) => {
    const {
        category,
        Chipset,
        VRAM,
        Overclocked,
        BusWidth,
        Connector,
        PowerConnector,
        minGPULength,
        maxGPULength
    } = params

    switch (category) {
        case 'Processors':
            return []
        case 'Motherboards':
            return []
        case 'GPUs':
            const minGpuLength = parseInt(minGPULength ?? "0");
            const maxGpuLength = parseInt(maxGPULength ?? "99999");
            let query: any = {}
            let vram

            if (VRAM) {
                vram = (Array.isArray(VRAM) ? VRAM.map((value) => +value) : [+VRAM])
            }
            const filters: Filter[] = [];
            if (Chipset) {
                filters.push({param: Chipset, title: "Chipset"})
            }
            if (vram) {
                filters.push({param: vram, title: "VRAM"})
            }
            if (Overclocked) {
                filters.push({param: Overclocked, title: "Overclocked"})
            }
            if (BusWidth) {
                filters.push({param: BusWidth, title: "Bus Width"})
            }
            if (Connector) {
                filters.push({param: Connector, title: "Connector"})
            }
            if (PowerConnector) {
                filters.push({param: PowerConnector, title: "Power Connector"})
            }
            filters.forEach((filter) => {
                const {param, title} = filter;
                if (param && param.length > 0) {
                    query.properties = {
                        ...query.properties,
                        hasSome: Array.isArray(param)
                            ? param.map((value) => ({title, value, primary: true}))
                            : [{title, value: param, primary: true}],
                    };
                }
            });

            return filters
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
            return  []

    }

}
