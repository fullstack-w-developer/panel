import axios from "@/services/utils/axios";
import { getUser, getUserFavoriteProducts } from "@/services/user";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const useVerifyAuth = (
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setUser: Dispatch<SetStateAction<UserResponse | null>>,
    setUserFavorites: Dispatch<SetStateAction<FormattedFavoriteProdcuts>>
) => {
    const [cookies] = useCookies(["token"]);
    const { pathname, push } = useRouter();

    useEffect(() => {
        if (pathname.startsWith("/panel/") && !cookies.token) {
            setIsLoading(true);
            push("/").then(() => {
                setIsLoading(false);
            });
            return;
        }
        if (cookies.token) {
            async function verifyUser() {
                setIsLoading(true);
                axios.defaults.headers.common.Authorization = `Bearer ${cookies.token}`;
                try {
                    const [{ data: user }, favorites] = await Promise.all([
                        getUser(),
                        getUserFavoriteProducts(),
                    ]);
                    setUserFavorites(favorites);
                    setUser(user);
                } finally {
                    setIsLoading(false);
                }
            }
            verifyUser();
        }
    }, [cookies.token]);
};

export default useVerifyAuth;
