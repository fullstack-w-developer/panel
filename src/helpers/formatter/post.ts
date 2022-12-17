import { formatMeta } from "@/helpers/formatter/meta";
import { formatComment } from "@/helpers/formatter/other";
import { fixTimestamp } from "@/helpers/utils";

export const formatSinglePost = ({ data }: SinglePostResponse) => {
    return {
        ...data,
        date: fixTimestamp(data.date),
        tags: formatPostTags(data.tags),
        comments: data.comments.map(formatComment),
    };
};

const formatPostTags = (tags: PostTagResponse[]) => {
    return tags.map((tag) => ({
        title: tag.name,
        id: tag.id,
    }));
};

export const formatPosts = (response: PostListResponse) => {
    const data = formatPostsList(response.data);
    const meta = formatMeta(response.meta);
    return { data, meta };
};

const formatPostsList = (posts: PostListItemResponse[]) => {
    return posts.map(formatPost);
};

const formatPost = (post: PostListItemResponse) => {
    return {
        ...post,
        date: fixTimestamp(post.date),
        content: post.short_content,
        description: post.short_content,
        views: post.view,
        rating: 5,
        tags: formatPostTags(post.tags),
        author: {
            description: "",
            image: post.author.profile_image,
            name: post.author.name,
        },
    };
};
