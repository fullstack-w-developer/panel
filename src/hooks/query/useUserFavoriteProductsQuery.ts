import { getUserFavoriteProducts } from "@/services/user";
import { useQuery } from "react-query";

const useUserFavoriteProductsQuery = () => {
    return useQuery(
        ["user-favorite-products"],
        async () => await getUserFavoriteProducts()
    );
};

export default useUserFavoriteProductsQuery;
