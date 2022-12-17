import { useQuery } from "react-query";
import { getPosts } from "@/services/post";

interface UsePostsQuery {
    query?: QueryParams;
    initialData?: FormattedPosts;
}

const usePostsQuery = ({ query, initialData }: UsePostsQuery = {}) => {
    return useQuery(["posts", query], async () => await getPosts(query), {
        initialData,
        keepPreviousData: Boolean(initialData),
    });
};

export default usePostsQuery;
