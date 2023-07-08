import {Filter} from "@/app/types";
import {Product} from "@prisma/client";

export interface IProductsParams {
    category?: string;

    //GPU
    Chipset?: string[],
    VRAM?: string[],
    Overclocked?: string[],
    BusWidth?: string[],
    Connector?: string[],
    PowerConnector?: string[],
    minGPULength?: string,
    maxGPULength?: string,

    //Processor
    ProcessorSocket?: string[], //as well for motherboards
    CPUCores?: string[],
    Threads?: string[],
    L3Cache?: string[],
    Graphicsintegrated?: string[],
    Packaging?: string[]

    //Motherboard
    Formfactor?: string[], //as well for HardDrives, Cases, PSUs
    ChipsetType?: string[],
    RAMSockets?: string[],
    RAMtechnology?: string[],
    M2Slot?: string[],
    WiFi?: string[],
    SLIsupport?: string[]

    //RAM
    RAMTechnology?: string[],
    Capacity?: string[], //as well for HardDrives
    Numberofmodules?: string[],
    RAMSpeed?: string[],
    Illumination?: string[], //as well for CPUCoolers, Cases, PSUs
    CASLatency?: string[],

    //HardDrives
    Interface?: string[],
    NVMe?: string[],

    //CPUCoolers
    CoolerType?: string[],
    CPUSocket?: string[],
    MaxTDP?: string[],
    minInstallationheight?: string,
    maxInstallationheight?: string,
    minmaximumVolume?: string,
    maxmaximumVolume?: string,
    SpeedRange?: string[],

    //Cases
    Maxmotherboardformfactor?: string[],
    minSupportedGPUlength?: string,
    maxSupportedGPUlength?: string,
    minSupportedCPUcoolerheight?: string,
    maxSupportedCPUcoolerheight?: string,
    Color?: string[],
    Installed120mmfans?: string[],
    Installed140mmfans?: string[],
    Installed200mmfans?: string[],
    possible120mmfans?: string[],
    possible140mmfans?: string[],
    possible200mmfans?: string[],

    //PSUs
    Power?: string[],
    PCIe8pinConnectors?: string[],
    PCIe6pinConnectors?: string[],
    SATAConnectors?: string[],
    ActiveCooling?: string[],
    Fansize?: string[],
    Certificate?: string[],
    CableManagement?: string[],
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
        SLIsupport,

        RAMTechnology,
        Capacity,
        Numberofmodules: NumberOfModules,
        RAMSpeed,
        Illumination,
        CASLatency,

        Interface,
        NVMe,

        CoolerType,
        CPUSocket,
        MaxTDP,
        minInstallationheight,
        maxInstallationheight,
        minmaximumVolume,
        maxmaximumVolume,
        SpeedRange,

        Maxmotherboardformfactor: MaxMotherBoardFormFactor,
        minSupportedGPUlength,
        maxSupportedGPUlength,
        minSupportedCPUcoolerheight,
        maxSupportedCPUcoolerheight,
        Color,
        Installed120mmfans,
        Installed140mmfans,
        Installed200mmfans,
        possible120mmfans,
        possible140mmfans,
        possible200mmfans,

        Power,
        PCIe8pinConnectors,
        PCIe6pinConnectors,
        SATAConnectors,
        ActiveCooling,
        Fansize,
        Certificate,
        CableManagement,
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

            filters = [
                {param: RAMTechnology, title: "RAM Technology"},
                {param: Capacity, title: "Capacity"},
                {param: NumberOfModules, title: "Number of modules"},
                {param: RAMSpeed, title: "RAM Speed"},
                {param: RAMtechnology, title: "RAM technology"},
                {param: Illumination, title: "Illumination"},
                {param: CASLatency, title: "CAS Latency"},
            ];

            return isMatching(product, filters)

        case 'Hard Drives':

            filters = [
                {param: Formfactor, title: "Form factor"},
                {param: Interface, title: "Interface"},
                {param: Capacity, title: "Capacity"},
                {param: NVMe, title: "NVMe"},
            ];

            return isMatching(product, filters)

        case 'CPU Coolers':

            const minInstHeight = parseFloat(minInstallationheight ?? "0");
            const maxInstHeight = parseFloat(maxInstallationheight ?? "99999");

            const minVolume = parseFloat(minmaximumVolume ?? "0");
            const maxVolume = parseFloat(maxmaximumVolume ?? "99999");

            filters = [
                {param: CoolerType, title: "Cooler Type"},
                {param: CPUSocket, title: "CPU Socket"},
                {param: MaxTDP, title: "Max. TDP"},
                {param: SpeedRange, title: "Speed Range"},
                {param: Illumination, title: "Illumination"},
            ];

            return isMatching(product, filters) &&
                isInRange(product, minInstHeight, maxInstHeight, "Installation height (mm)") &&
                isInRange(product, minVolume, maxVolume, "maximum Volume (dB)")

        case 'Cases':

            const minSupGpuLen = parseFloat(minSupportedGPUlength ?? "0");
            const maxSupGpuLen = parseFloat(maxSupportedGPUlength ?? "99999");

            const minSupCpuCoolerH = parseFloat(minSupportedCPUcoolerheight ?? "0");
            const maxSupCpuCoolerH = parseFloat(maxSupportedCPUcoolerheight ?? "99999");

            filters = [
                {param: Formfactor, title: "Form factor"},
                {param: MaxMotherBoardFormFactor, title: "Max motherboard form factor"},
                {param: Illumination, title: "Illumination"},
                {param: Color, title: "Color"},
                {param: Installed120mmfans, title: "Installed 120mm fans"},
                {param: Installed140mmfans, title: "Installed 140mm fans"},
                {param: Installed200mmfans, title: "Installed 200mm fans"},
                {param: possible120mmfans, title: "possible 120mm fans"},
                {param: possible140mmfans, title: "possible 140mm fans"},
                {param: possible200mmfans, title: "possible 200mm fans"},
            ];

            return isMatching(product, filters) &&
                isInRange(product, minSupGpuLen, maxSupGpuLen, "Supported GPU length (mm)") &&
                isInRange(product, minSupCpuCoolerH, maxSupCpuCoolerH, "Supported CPU cooler height (mm)")

        case 'PSUs':

            filters = [
                {param: Power, title: "Power"},
                {param: Formfactor, title: "Form factor"},
                {param: PCIe8pinConnectors, title: "PCIe 8pin Connectors"},
                {param: PCIe6pinConnectors, title: "PCIe 6pin Connectors"},
                {param: SATAConnectors, title: "SATA Connectors"},
                {param: ActiveCooling, title: "Active Cooling"},
                {param: Fansize, title: "Fan size"},
                {param: Certificate, title: "Certificate"},
                {param: Illumination, title: "Illumination"},
                {param: CableManagement, title: "Cable Management"},
            ];

            return isMatching(product, filters)

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
