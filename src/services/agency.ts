import { formatAgencies } from "@/helpers/formatter/agency";
import routes, { getRoute } from "@/helpers/routes/server-routes";
import { generateFormData } from "@/helpers/utils";

import client from "@/services/utils/client";

export const getAgencies = async (query?: QueryParams) => {
    const route = getRoute({ route: routes.agency.list, query });
    return await client({ ...route }, formatAgencies);
};

export const registerAgency = async (data: RegisterAgencyFormData) => {
    const route = getRoute({ route: routes.agency.register });
    return await client<RegisterAgencySuccessResponse>({
        ...route,
        method: "POST",
        ...generateFormData(data),
    });
};
