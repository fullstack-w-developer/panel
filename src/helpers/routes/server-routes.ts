import formatUnicorn from "format-unicorn/safe";
import { generateQueries } from "@/helpers/queries";
import { shouldUseMock } from "@/helpers/utils";

const serverRoutes = {
    post: {
        single: {
            url: "/blog/{slug}",
            useMock: false,
            mockUrl: "/posts/{slug}",
        },
        list: {
            url: "/blog",
            useMock: false,
            mockUrl: "/posts",
        },
        tags: {
            url: "/tags",
            useMock: false,
            mockUrl: "/tags",
        },
        categories: {
            url: "/blogs/categories",
            useMock: false,
            mockUrl: "/blogs/categories",
        },
    },
    comment: {
        url: "/comment",
        useMock: false,
        mockUrl: "/comment",
    },
    product: {
        categories: {
            url: "/category",
            useMock: false,
            mockUrl: "/category",
        },
        single: {
            url: "/products/{slug}",
            useMock: false,
            mockUrl: "/products/{slug}",
        },
        list: {
            url: "/products",
            useMock: false,
            mockUrl: "/products",
        },
    },
    agency: {
        list: {
            url: "/agencies",
            useMock: false,
            mockUrl: "/agencies",
        },
        register: {
            url: "/agency/submit_request",
            useMock: false,
            mockUrl: "/agency/submit_request",
        },
    },
    other: {
        init: {
            url: "/init",
            useMock: false,
            mockUrl: "/init",
        },
        provinces: {
            url: "/provinces",
            useMock: false,
            mockUrl: "/provinces",
        },
        contactUs: {
            url: "/contact_us/send_message",
            useMock: false,
            mockUrl: "/contact_us/send_message",
        },
        checkBarcode: {
            url: "/barcode/check?code={code}",
            useMock: false,
            mockUrl: "/check-barcode",
        },
        about: {
            url: "/about_us",
            useMock: false,
            mockUrl: "/about",
        },
        slides: {
            url: "/slides",
            useMock: false,
            mockUrl: "/slides",
        },
        banners: {
            url: "/banners",
            useMock: false,
            mockUrl: "/banners",
        },
        brands: {
            url: "/brands",
            useMock: false,
            mockUrl: "/customers",
        },
        customers: {
            url: "/customers",
            useMock: false,
            mockUrl: "/customers",
        },
    },
    user: {
        update: {
            url: "/user/profile/update",
            useMock: false,
            mockUrl: "/user/profile/update",
        },
        orders: {
            list: {
                url: "/orders",
                useMock: true,
                mockUrl: "/orders",
            },
        },
        favorites: {
            list: {
                url: "/user/favorite_products",
                useMock: false,
                mockUrl: "/user/favorite_products",
            },
            add: {
                url: "/user/favorite_products",
                useMock: false,
                mockUrl: "/user/favorite_products",
            },
        },
        get: {
            url: "/auth/me",
            useMock: false,
            mockUrl: "/user",
        },
        auth: {
            sendCode: {
                url: "/auth/send_sms",
                useMock: false,
                mockUrl: "/auth/otp/send",
            },
            loginByCode: {
                url: "/auth/login_or_register",
                useMock: false,
                mockUrl: "/auth/otp/check",
            },
        },
    },
};

export const getRoute = ({
    route,
    query,
    ...rest
}: GetRouteProps): FormattedRouteUrl => {
    const shouldMock = shouldUseMock(route.useMock);
    let url = shouldMock ? route.mockUrl : route.url;

    if (Object.keys({ ...rest }).length) {
        url = formatUnicorn(url, { ...rest });
    }

    if (query) {
        const queries = generateQueries(query, route.useMock);
        url = url + queries;
    }

    return { url, useMock: shouldMock };
};

export default serverRoutes;
