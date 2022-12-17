declare global {
    interface SingleProductResponse {
        data: {
            id: number;
            title: string;
            code: string;
            slug: string;
            price: number;
            old_price: number;
            offPrice: number;
            offPercentage: number;
            description: string;
            short_description: string;
            category: ProductCategoryResponse[];
            image: string;
            inStock: boolean;
            minOrder: number;
            maxOrder: null;
            rating: number;
            gallery: { url: string }[];
            features: ProductFeatureResponse[];
            properties: ProductPropertyResponse[];
            sold: number;
            is_favorite: boolean;
            comments: CommentItemResponse[];
            questions: ProductQuestionAnswerItemResponse[];
            guide_file: string | null;
            value: string;
            unit: ProductUnitResponse;
            product_status: ProductStatusResponse;
            seo: SEOResponse;
        };
    }
    interface ProductStatusResponse {
        id: number;
        name: string;
        color: null;
        active: number;
        created_at: string;
        updated_at: string;
        visible: number;
    }
    interface ProductUnitResponse {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
    }
    interface ProductQuestionAnswerItemResponse {
        question: string;
        answer: string;
    }

    interface ProductCategoriesResponse {
        data: ProductCategoryResponse[];
    }
    interface ProductCategoryResponse {
        id: number;
        title: string;
    }
    interface ProductFeatureResponse {
        key: string;
        value: boolean;
    }
    interface ProductPropertyResponse {
        key: string;
        value: string;
    }
    interface ProductListResponse {
        data: ProductListItemResponse[];
        links: LinksResponse;
        meta: MetaResponse;
    }
    interface ProductListItemResponse {
        id: number;
        title: string;
        slug: string;
        price: number;
        description: string;
        short_description: string;
        category: ProductCategoryResponse[];
        image: string;
        inStock: boolean;
        minOrder: number;
        maxOrder: null;
        rating: number;
        gallery: { url: string }[];
        features: ProductFeatureResponse[];
        properties: ProductPropertyResponse[];
        sold: number;
    }
}
export default global;
