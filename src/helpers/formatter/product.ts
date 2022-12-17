import { formatMeta } from "@/helpers/formatter/meta";
import { formatComment } from "@/helpers/formatter/other";

export const formatSingleProduct = ({ data }: SingleProductResponse) => {
    return {
        ...data,
        help: data.guide_file,
        oldPrice: data.old_price,
        categories: data.category,
        gallery: data.gallery.map(({ url }) => url),
        comments: data.comments.map(formatComment),
    };
};

export const formatProducts = (response: ProductListResponse) => {
    const data = formatProductsList(response.data);
    const meta = formatMeta(response.meta);
    return { data, meta };
};

const formatProductsList = (products: ProductListItemResponse[]) => {
    return products.map(formatProduct);
};

const formatProduct = (product: ProductListItemResponse) => {
    return {
        ...product,
        oldPrice: 0,
        categories: product.category,
        gallery: product.gallery.map(({ url }) => url),
        offPercentage: 0,
        offPrice: 0,
    };
};

export const formatUserFavoriteProducts = (
    response: UserFavoriteProductsListResponse
) => {
    return formatProductsList(response.data);
};

export const formatUserAddToFavoriteSuccessResponse = (
    response: UserAddProductToFavoriteSuccessResponse
) => {
    return {
        ...response,
        data: formatProductsList(response.data),
    };
};

export const formatProductCategories = (
    categories: ProductCategoriesResponse
) => {
    return categories;
};
