declare global {
    interface LoginUserSuccessResponse {
        status: boolean;
        message: string;
        data: UserLoginDataResponse;
    }

    interface UserLoginDataResponse {
        user: UserResponse;
        token: UserTokenResponse;
    }

    interface UserTokenResponse {
        headers: {};
        original: {
            access_token: string;
            token_type: string;
            expires_in: number;
            expires_at: number;
        };
        exception: null;
    }

    interface GetUserResponse {
        data: UserResponse;
    }

    interface UpdateUserProfileSuccessResponse {
        status: boolean;
        message: string;
        data: UserResponse;
    }

    interface UserResponse {
        name: string;
        last_name: string;
        full_name: string;
        email: string;
        profile_image: string;
        phone: string;
        national_code: string;
        is_active: boolean;
        register_completed: boolean;
        is_agency: boolean;
        has_requested: boolean;
    }

    interface UserAddProductToFavoriteSuccessResponse {
        status: boolean;
        message: string;
        data: SingleProductResponse["data"][];
    }

    interface UserFavoriteProductsListResponse {
        status: boolean;
        message: string;
        data: ProductListItemResponse[];
    }
}

export default global;
