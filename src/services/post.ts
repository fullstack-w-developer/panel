import { formatPosts, formatSinglePost } from "@/helpers/formatter/post";
import routes, { getRoute } from "@/helpers/routes/server-routes";
import client from "@/services/utils/client";

export const getPosts = async (query?: QueryParams) => {
    const route = getRoute({ route: routes.post.list, query });
    return await client({ ...route }, formatPosts);
};

export const getSinglePost = async (slug: string) => {
    const route = getRoute({ route: routes.post.single, slug });
    return await client({ ...route }, formatSinglePost);
};

export const getPostCategories = async () => {
    const route = getRoute({ route: routes.post.categories });
    return await client<PostCategoriesResponse>({ ...route });
};

export const getPostTags = async () => {
    const route = getRoute({ route: routes.post.tags });
    return await client<PostTagsResponse>({ ...route });
};
