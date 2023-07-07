import prisma from "@/app/libs/prismadb";
import {FilterByProperties} from "@/app/utils/getFiltersByCategory";

export interface IProductsParams {
    category?: string;
    sorting?: string;
    immediatelyAvailable?: string;
    manufacturer?: string[];
    priceMin?: string;
    priceMax?: string;
}

export default async function getProducts(params: IProductsParams) {
    try {
        const {
            category,
            sorting,
            immediatelyAvailable,
            manufacturer,
            priceMin,
            priceMax,
        } = params;

        let orderBy = {};
        let query: any = {};


        const minPrice = parseFloat(priceMin ?? "0");
        const maxPrice = parseFloat(priceMax ?? "99999");

        // Basic Filters
        if (category) {
            query.category = category;
        }
        if (immediatelyAvailable) {
            query.immediatelyAvailable = immediatelyAvailable === "true";
        }
        if (sorting && sorting !== "Featured") {
            orderBy = {price: sorting};
        }
        if (manufacturer && manufacturer.length > 0) {
            query.manufacturer = {in: manufacturer};
        }
        query.price = {
            gte: minPrice,
            lte: maxPrice,
        }
        const filters = FilterByProperties(params)
        // Custom Filters
        // const minGpuLength = parseInt(minGPULength ?? "0");
        // const maxGpuLength = parseInt(maxGPULength ?? "99999");
        //
        // if (VRAM) {
        //     vram = (Array.isArray(VRAM) ? VRAM.map((value) => +value) : [+VRAM])
        // }
        //
        // const filters: Filter[] = [];
        //
        // if (Chipset) {
        //     filters.push({param: Chipset, title: "Chipset"})
        // }
        // if (vram) {
        //     filters.push({param: vram, title: "VRAM"})
        // }
        // if (Overclocked) {
        //     filters.push({param: Overclocked, title: "Overclocked"})
        // }
        // if (BusWidth) {
        //     filters.push({param: BusWidth, title: "Bus Width"})
        // }
        // if (Connector) {
        //     filters.push({param: Connector, title: "Connector"})
        // }
        // if (PowerConnector) {
        //     filters.push({param: PowerConnector, title: "Power Connector"})
        // }
        //
        // filters.forEach((filter) => {
        //     const {param, title} = filter;
        //     if (param && param.length > 0) {
        //         query.properties = {
        //             ...query.properties,
        //             hasSome: Array.isArray(param)
        //                 ? param.map((value) => ({title, value, primary: true}))
        //                 : [{title, value: param, primary: true}],
        //         };
        //     }
        // });

        const products = await prisma.product.findMany({
            where: {
                ...query,
            },
            orderBy,
        });


        return products.filter((product) => {
            const discountedPrice = product.price - (product.price / 100) * product.sale;

            // const gpuLength = (product as any).properties.find((prop: any) => prop.title === "GPU Length (mm)").value
            return (
                discountedPrice >= minPrice &&
                discountedPrice <= maxPrice &&
                // gpuLength >= minGpuLength &&
                // gpuLength <= maxGpuLength &&
                filters.every((filter) => {
                    const {param, title} = filter;
                    if (param && param.length > 0) {
                        const filterValues = Array.isArray(param) ? param : [param];
                        return filterValues.some(
                            (value) =>
                                product.properties.some(
                                    (property: any) =>
                                        property.title === title && property.value === value
                                )
                        );
                    }
                    return true;
                })
            );
        });
    } catch (e: any) {
        throw new Error(e);
    }
}