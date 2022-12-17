import { useCookies } from "react-cookie";
import { getUser, loginUserByCode } from "@/services/user";
import { useMutation } from "react-query";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import axios from "@/services/utils/axios";

const useLoginUserMutation = () => {
    const [, setCookies] = useCookies(["token"]);
    const { setUser } = useAuthContext();
    return useMutation(
        async (data: LoginFormData) => {
            return await loginUserByCode(data);
        },
        {
            onSuccess: async function ({ data }) {
                const token = data.token.original.access_token;
                setCookies("token", token, { path: "/" });
                axios.defaults.headers.Authorization = `Bearer ${token}`;
                const { data: user } = await getUser();
                setUser(user);
            },
        }
    );
};

export default useLoginUserMutation;
