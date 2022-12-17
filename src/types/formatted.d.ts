import { getProducts } from "@/services/product";
import { getPosts } from "@/services/post";
import {
    formatProducts,
    formatSingleProduct,
    formatUserFavoriteProducts,
} from "@/helpers/formatter/product";
import { formatAgencies } from "@/helpers/formatter/agency";
import { formatPosts, formatSinglePost } from "@/helpers/formatter/post";
import { getAgencies } from "@/services/agency";
import { formatComment } from "@/helpers/formatter/other";
import { ValuesType } from "utility-types";
import { formatMeta } from "@/helpers/formatter/meta";

declare global {
    type OrderStatus =
        | "waiting_for_verification"
        | "verified"
        | "ready_to_send"
        | "sent"
        | "received"
        | "canceled"
        | "unsuccessful";

    interface FormattedOrderListItem {
        id: number;
        code: string;
        status: OrderStatus;
        date: number;
        sum: number;
    }

    interface FormattedOrdersResponse {
        data: FormattedOrderListItem[];
        meta: FormattedMeta;
    }

    type FormattedMeta = ReturnType<typeof formatMeta>;

    type FormattedCommentItem = ReturnType<typeof formatComment>;

    type FormattedProductsList = ReturnType<typeof formatProducts>["data"];
    type FormattedProductItem = ValuesType<FormattedProductsList>;
    type FormattedSingleProduct = ReturnType<typeof formatSingleProduct>;
    type FormattedProducts = Awaited<ReturnType<typeof getProducts>>;
    type FormattedFavoriteProdcuts = ReturnType<
        typeof formatUserFavoriteProducts
    >;

    type FormattedPostsList = ReturnType<typeof formatPosts>["data"];
    type FormattedPostItem = ValuesType<FormattedPostsList>;
    type FormattedSinglePost = ReturnType<typeof formatSinglePost>;
    type FormattedPosts = Awaited<ReturnType<typeof formatPosts>>;

    type FormattedAgencies = Awaited<ReturnType<typeof getAgencies>>;

    type FormattedProvinceItem = ProvinceItemResponse;
}

export default global;
