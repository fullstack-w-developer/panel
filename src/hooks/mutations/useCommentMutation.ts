import { sendUserComment } from "@/services/user";
import { useMutation } from "react-query";

const useCommentMutation = () => {
    return useMutation(async (data: CommentFormData) => {
        return await sendUserComment(data);
    });
};

export default useCommentMutation;
