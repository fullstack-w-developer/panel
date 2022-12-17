import routes, { getRoute } from "@/helpers/routes/server-routes";
import { generateFormData } from "@/helpers/utils";

import client from "@/services/utils/client";

export const getInit = async () => {
    const route = getRoute({ route: routes.other.init });
    return await client<InitResponse>({ ...route });
};

export const getSlides = async () => {
    const route = getRoute({ route: routes.other.slides });
    return await client<HeroSlideItemResponse[]>({ ...route });
};

export const getProvinces = async () => {
    const route = getRoute({ route: routes.other.provinces });
    return await client<ProvincesListResponse>({ ...route });
};

export const getCustomers = async () => {
    const route = getRoute({ route: routes.other.customers });
    return await client<CustomerItemResponse[]>({ ...route });
};

export const getBrands = async () => {
    const route = getRoute({ route: routes.other.brands });
    return await client<BrandItemResponse[]>({ ...route });
};

export const getBanners = async () => {
    const route = getRoute({ route: routes.other.banners });
    return await client<BannerItemResponse[]>({ ...route });
};

export const getAboutUs = async () => {
    const route = getRoute({ route: routes.other.about });
    return await client<AboutUsResponse>({ ...route });
};

export const checkBarcode = async (code: string) => {
    const route = getRoute({ route: routes.other.checkBarcode, code });
    return await client<CheckBarcodeSuccessResponse>({ ...route });
};

export const sendContactUs = async (data: ContactUsFormData) => {
    const route = getRoute({ route: routes.other.contactUs });
    return await client<any>({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};
