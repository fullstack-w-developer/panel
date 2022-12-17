declare global {
    interface PostListResponse {
        data: PostListItemResponse[];
        links: LinksResponse;
        meta: MetaResponse;
    }
    interface SinglePostResponse {
        data: {
            id: number;
            author: PostAuthorResponse;
            title: string;
            slug: string;
            content: string;
            image: string;
            tags: PostTagResponse[];
            category: PostCategoryResponse[];
            view: number;
            comments: CommentItemResponse[];
            date: number;
            seo: SEOResponse;
        };
    }
    interface PostListItemResponse {
        id: number;
        title: string;
        author: PostAuthorResponse;
        slug: string;
        short_content: string;
        image: string;
        tags: PostTagResponse[];
        category: PostCategoryResponse[];
        view: number;
        date: number;
    }
    interface PostAuthorResponse {
        name: string;
        profile_image: string;
    }
    interface PostTagResponse {
        id: number;
        name: string;
    }
    interface PostCategoryResponse {
        id: number;
        title: string;
    }

    interface PostCategoriesResponse {
        data: PostCategoryResponse[];
    }

    interface PostTagsResponse {
        data: PostTagResponse[];
    }
}
export default global;
