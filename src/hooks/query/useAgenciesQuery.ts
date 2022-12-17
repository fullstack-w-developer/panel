import { useQuery } from "react-query";
import { getAgencies } from "@/services/agency";

interface UseAgenciesQuery {
    query?: QueryParams;
    initialData?: FormattedAgencies;
}

const useAgenciesQuery = ({ query, initialData }: UseAgenciesQuery = {}) => {
    return useQuery(["agencies", query], async () => await getAgencies(query), {
        initialData,
        keepPreviousData: Boolean(initialData),
    });
};

export default useAgenciesQuery;
