import {
    formatProductCategories,
    formatProducts,
    formatSingleProduct,
} from "@/helpers/formatter/product";
import routes, { getRoute } from "@/helpers/routes/server-routes";
import client from "@/services/utils/client";

export const getProducts = async (query?: QueryParams) => {
    const route = getRoute({ route: routes.product.list, query });
    return await client({ ...route }, formatProducts);
};

export const getSingleProduct = async (slug: string) => {
    const route = getRoute({ route: routes.product.single, slug });
    return await client({ ...route }, formatSingleProduct);
};

export const getProductCategories = async () => {
    const route = getRoute({ route: routes.product.categories });
    return await client({ ...route }, formatProductCategories);
};
