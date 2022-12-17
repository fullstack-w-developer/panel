declare global {
    interface LinksResponse {
        first: string;
        last: string;
        prev: null;
        next: null;
    }

    interface MetaResponse {
        current_page: number;
        from: number;
        last_page: number;
        links: MetaLinkResponse[];
        path: string;
        per_page: string;
        to: number;
        total: number;
    }

    interface MetaLinkResponse {
        url: null | string;
        label: string;
        active: boolean;
    }

    interface CommentItemResponse {
        user: CommentItemUserResponse;
        comment: string;
        rate: number;
        date: number | null;
    }

    interface CommentItemUserResponse {
        name: string;
        profile_image: string;
        phone: null;
        national_code: null;
        is_active: boolean;
        register_completed: boolean;
    }

    interface ProvincesListResponse {
        data: ProvinceItemResponse[];
    }

    interface ProvinceItemResponse {
        id: number;
        title: string;
        color: string;
    }

    interface InitResponse {
        name: string;
        logo: string;
        phone: string;
        email: string;
        address: string;
        facebook: string;
        linkedin: string;
        twitter: string;
        instagram: string;
        phones: InitPhoneItem[];
    }
    interface InitPhoneItem {
        title: string;
        value: string;
    }

    interface RegisterAgencySuccessResponse {
        status: boolean;
        message: string;
        data: null;
    }

    interface HeroSlideItemResponse {
        id: number;
        image: string;
        btn_link: string;
        btn_title: string;
        sub_title: string;
        description: string;
        title: string;
    }

    interface CustomerItemResponse {
        id: number;
        title: string;
        url: string;
        image: string;
    }

    interface BrandItemResponse extends CustomerItemResponse {}

    interface BannerItemResponse {
        id: number;
        image: string;
        btn_link: string;
        btn_title: string;
        title: string;
        small_title: string;
    }

    interface AboutUsResponse {
        data: {
            content: string;
        };
    }
    interface CheckBarcodeSuccessResponse {
        status: boolean;
        message: string;
        data: {
            product: SingleProductResponse["data"];
        };
    }

    interface SEOResponse {
        description: string;
        keywords: string;
        "og:title": string;
        "og:image": string;
        "og:description": string;
        "og:url": string;
        "og:type": string;
        "twitter:title": string;
        "twitter:description": string;
        viewport: string;
        canonical: string;
    }
}

export default global;
