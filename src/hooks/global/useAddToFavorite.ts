import { useAuthContext } from "@/contexts/ManagedAuthContext";
import { addProductToFavorite } from "@/services/user";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

const useAddToFavorite = () => {
    const { user } = useAuthContext();
    const router = useRouter();
    return useMutation(async (id: string | number) => {
        if (user) {
            return await addProductToFavorite(id);
        } else {
            router.push("/login");
        }
    });
};

export default useAddToFavorite;
