import { useAuthContext } from "src/contexts/ManagedAuthContext";
import axios from "@/services/utils/axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useCookies } from "react-cookie";

const useLogout = () => {
    const { setUser, setPhone, setStep } = useAuthContext();
    const router = useRouter();
    const [_1, _2, removeCookies] = useCookies();
    return useCallback(async () => {
        router.push("/login").then(() => {
            delete axios.defaults.headers.Authorization;
            removeCookies("token", { path: "/" });
            setPhone("");
            setStep("send_code");
            setUser(null);
        });
    }, []);
};

export default useLogout;
