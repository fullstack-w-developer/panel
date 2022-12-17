import {
    formatUserAddToFavoriteSuccessResponse,
    formatUserFavoriteProducts,
} from "@/helpers/formatter/product";
import routes, { getRoute } from "@/helpers/routes/server-routes";
import { generateFormData } from "@/helpers/utils";
import client from "@/services/utils/client";

export const sendUserCode = async (data: SendCodeFormData) => {
    const route = getRoute({ route: routes.user.auth.sendCode });
    return await client({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};

export const loginUserByCode = async (data: LoginFormData) => {
    const route = getRoute({ route: routes.user.auth.loginByCode });
    return await client<LoginUserSuccessResponse>({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};

export const getUser = async () => {
    const route = getRoute({ route: routes.user.get });
    return await client<GetUserResponse>({ ...route, method: "POST" });
};

export const getUserFavoriteProducts = async () => {
    const route = getRoute({ route: routes.user.favorites.list });
    return await client({ ...route }, formatUserFavoriteProducts);
};

export const addProductToFavorite = async (id: string | number) => {
    const route = getRoute({ route: routes.user.favorites.add });
    return await client(
        {
            ...route,
            method: "POST",
            ...generateFormData({ product_id: id }),
        },
        formatUserAddToFavoriteSuccessResponse
    );
};

export const getUserOrders = async () => {
    const route = getRoute({ route: routes.user.orders.list });
    return await client<MockUserOrdersResponse>({ ...route });
};

export const sendUserComment = async (data: CommentFormData) => {
    const route = getRoute({ route: routes.comment });
    return await client({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};

export const updateUserProfile = async (data: UpdateProfileFormData) => {
    const route = getRoute({ route: routes.user.update });
    return await client<UpdateUserProfileSuccessResponse>({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};
