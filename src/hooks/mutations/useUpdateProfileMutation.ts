import { useAuthContext } from "src/contexts/ManagedAuthContext";
import { updateUserProfile } from "@/services/user";
import { useMutation } from "react-query";

const useUpdateProfileMutation = () => {
    const { setUser } = useAuthContext();
    return useMutation(
        async (data: UpdateProfileFormData) => {
            return await updateUserProfile(data);
        },
        {
            onSuccess({ data }) {
                setUser(data);
            },
        }
    );
};

export default useUpdateProfileMutation;
