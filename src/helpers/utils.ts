import { SITE_URL } from "@/helpers/constants";
import { shouldUseFaker } from "@/helpers/env-variables";

export const shouldUseMock = (useMock: boolean) => {
    if (!(shouldUseFaker === "mixed")) {
        if (shouldUseFaker === true) {
            return true;
        } else {
            return false;
        }
    }
    return useMock;
};

export const getPostLink = (slug: string) => {
    return `/posts/${slug}`;
};

export const getPostFullLink = (slug: string) => {
    return SITE_URL + getPostLink(slug);
};

export const getProductLink = (slug: string) => {
    return `/products/${slug}`;
};

export const updateLocationHistory = (
    pathname: string,
    params: QueryParams
) => {
    if (!(typeof window === "undefined")) {
        const queries = Object.keys(params)
            .map((key) => {
                return (
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(params[key])
                );
            })
            .join("&");
        const newUrl = pathname + "?" + queries;
        window.history.replaceState(
            { ...window.history.state, as: newUrl, url: newUrl },
            "",
            newUrl
        );
    }
};

export const addOrRemoveQueryParam = (
    param: number | string,
    other: string = "",
    selected: boolean
) => {
    const stringParam = param.toString();
    const splitted = other.split(",");
    const found = splitted.find((item) => item === stringParam);
    if (found) {
        if (selected) {
            return other + "," + stringParam;
        }
        const filtered = splitted.filter((item) => item !== found);
        return filtered.join(",");
    }
    if (!!other) {
        return other + "," + stringParam;
    }
    return stringParam;
};

export const checkDefaultChecked = (id: number | string, query: string) => {
    const stringId = id.toString();
    const splitted = query.split(",");
    return splitted.some((item) => item === stringId);
};

export const getPageTitle = (name: string, title: string) => {
    return name + " | " + title;
};

export const generateFormData = (obj: object) => {
    const data = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
        data.append(key, value);
    });
    return { data, headers: { "Content-Type": "multipart/form-data" } };
};

export const fixTimestamp = (timestamp: number) => timestamp * 1000;
