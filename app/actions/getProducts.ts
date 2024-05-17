import prisma from "@/app/libs/prismadb";
import {FilterByProperties} from "@/app/utils/getFiltersByCategory";

export interface IProductsParams {
    title?: string;
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
            title = ""
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
        if (manufacturer && !Array.isArray(manufacturer)) {
            query.manufacturer = manufacturer
        } else if (manufacturer && manufacturer.length > 1) {
            query.manufacturer = {in: manufacturer}
        }
        query.price = {
            gte: minPrice,
            lte: maxPrice,
        }

        const products = await prisma.product.findMany({
            where: {
                ...query,
            },
            orderBy,
        });

        // Filtering by properties & discount
        return products.filter((product) => {
            const discountedPrice = product.price - (product.price / 100) * product.sale;
            const formattedTitle = title.toLowerCase().replace(/\s/g, "");
            const formattedProductTitle = product.title.toLowerCase().replace(/\s/g, "");

            return (
                discountedPrice >= minPrice &&
                discountedPrice <= maxPrice &&
                formattedProductTitle.includes(formattedTitle) &&
                FilterByProperties(params, product)
            );
        });
    } catch (e: any) {
        throw new Error(e);
    }
}