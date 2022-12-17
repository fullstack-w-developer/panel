import { registerAgency } from "@/services/agency";
import { useMutation } from "react-query";

const useRegisterAgencyMutation = () => {
    return useMutation(async (data: RegisterAgencyFormData) => {
        return await registerAgency(data);
    });
};

export default useRegisterAgencyMutation;
