import { useQuery } from "react-query";
import { getProducts } from "@/services/product";
import { useProductContext } from "src/contexts/ManagedProductContext";

interface UseProducts {
    query?: QueryParams;
    initialData?: FormattedProducts;
}

const useProductsQuery = ({ query, initialData }: UseProducts = {}) => {
    const { setMeta } = useProductContext();
    return useQuery(["products", query], async () => await getProducts(query), {
        initialData,
        keepPreviousData: Boolean(initialData),
        onSuccess: ({ meta }) => {
            setMeta({ ...meta });
        },
    });
};

export default useProductsQuery;
