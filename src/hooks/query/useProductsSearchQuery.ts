import { getProducts } from "@/services/product";
import { useQuery } from "react-query";

interface UseSearchProducts {
    value?: string;
}

const useProductsSearchQuery = ({ value = "" }: UseSearchProducts) => {
    return useQuery(
        ["search-products", value],
        () => getProducts({ q: value }),
        { enabled: Boolean(value) }
    );
};

export default useProductsSearchQuery;
