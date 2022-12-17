import { useAuthContext } from "src/contexts/ManagedAuthContext";
import { sendUserCode } from "@/services/user";
import { useMutation } from "react-query";

const useSendCodeMutation = () => {
    const { setPhone, setStep } = useAuthContext();

    return useMutation(
        async (data: SendCodeFormData) => await sendUserCode(data),
        {
            onSuccess: function (_, variables) {
                setStep("login");
                setPhone(variables.phone);
            },
        }
    );
};

export default useSendCodeMutation;
