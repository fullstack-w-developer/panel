import { getUserOrders } from "@/services/user";
import { useQuery } from "react-query";

const useUserOrdersQuery = () => {
    return useQuery(["user-orders"], () => getUserOrders());
};

export default useUserOrdersQuery;
