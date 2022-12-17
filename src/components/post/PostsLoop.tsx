import Pagination from "@/components/common/Pagination";
import PostCard from "@/components/post/PostCard";
import { usePostContext } from "src/contexts/ManagedPostContext";
import { scrollToRef } from "@/helpers/scroll-to-ref";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";
import usePostsQuery from "@/hooks/query/usePostsQuery";
import { useEffect, useRef } from "react";

interface PostsLoopProps {
    initialData: FormattedPosts;
}

const PostsLoop = ({ initialData }: PostsLoopProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setDivRef, divRef, query, setQuery } = usePostContext();
    const { data, isFetching } = usePostsQuery({ query, initialData });
    const update = useUpdateQuery();
    useEffect(() => {
        setDivRef(ref);
    }, [ref]);
    return (
        <div className="col-lg-8 col-md-10" ref={ref}>
            {data?.data.map((post) => (
                <PostCard key={post.id} variant="secondary" post={post} />
            ))}
            <Pagination
                noItem={data?.data.length === 0 && !isFetching}
                page={query.page}
                count={data?.meta?.lastPage}
                onChange={(_, page) => {
                    scrollToRef(divRef);
                    const newQuery = { ...query, page };
                    update({ newQuery, setQuery });
                }}
            />
        </div>
    );
};

export default PostsLoop;
