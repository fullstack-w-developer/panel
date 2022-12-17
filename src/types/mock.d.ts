declare global {
    interface MockSinglePostResponse extends FormattedPostItem {}
    interface MockPostsResponse {
        data: FormattedPostItem[];
        meta: FormattedMeta;
    }

    interface MockSingleProductResponse extends FormattedProductItem {}
    interface MockProductsResponse {
        data: FormattedProductItem[];
        meta: FormattedMeta;
    }

    type MockFavoriteProductsResponse = FormattedProductItem[];

    type MockUserOrdersResponse = FormattedOrderListItem[];
}

export default global;
