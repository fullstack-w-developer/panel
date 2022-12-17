import { sendContactUs } from "@/services/other";
import { useMutation } from "react-query";

const useContactUsMutation = () => {
    return useMutation(async (data: ContactUsFormData) => {
        return await sendContactUs(data);
    });
};

export default useContactUsMutation;
