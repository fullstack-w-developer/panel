import { formatMeta } from "@/helpers/formatter/meta";

export const formatAgencies = (response: AgenciesListResponse) => {
    return {
        data: response.data,
        meta: formatMeta(response.meta),
    };
};
