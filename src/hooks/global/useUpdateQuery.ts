import { updateLocationHistory } from "@/helpers/utils";
import { useRouter } from "next/router";
import { Dispatch, useCallback } from "react";

interface UseUpdateQueryProps {
    newQuery: QueryParams;
    setQuery: Dispatch<React.SetStateAction<QueryParams>>;
    strategy?: "push" | "replace";
    pushPath?: string;
}

const useUpdateQuery = () => {
    const router = useRouter();
    const update = useCallback(
        ({
            newQuery: query,
            setQuery,
            strategy = "replace",
            pushPath,
        }: UseUpdateQueryProps) => {
            if (strategy === "replace") {
                updateLocationHistory(router.pathname, query);
            }
            if (strategy === "push") {
                router.push({ pathname: pushPath, query }, undefined, {
                    scroll: false,
                    shallow: true,
                });
            }
            setQuery(query);
        },
        []
    );
    return update;
};

export default useUpdateQuery;
