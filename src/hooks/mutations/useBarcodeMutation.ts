import { checkBarcode } from "@/services/other";
import { useMutation } from "react-query";

const useBarcodeMutation = () => {
    return useMutation(async (code: string) => {
        return await checkBarcode(code);
    });
};

export default useBarcodeMutation;
