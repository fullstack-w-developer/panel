import { useQuery } from "react-query";
import { getInit } from "@/services/other";

const useInitQuery = () => {
    return useQuery(["init"], async () => await getInit());
};

export default useInitQuery;
