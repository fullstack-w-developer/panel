import CommentsList from "@/components/global/CommentsList";
import LoginProcess from "@/components/global/LoginProcess";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import useCommentMutation from "@/hooks/mutations/useCommentMutation";
import Rating from "@mui/material/Rating";
import { useForm } from "react-hook-form";

interface CommentsSectionProps {
    id: string | number;
    comments: FormattedCommentItem[];
    hasRate?: boolean;
    type?: "Blog" | "Product";
}

const CommentsSection = ({
    comments,
    id,
    hasRate = true,
    type = "Product",
}: CommentsSectionProps) => {
    const { register, handleSubmit } = useForm<CommentFormData>();
    const { mutate, isLoading } = useCommentMutation();
    const { user } = useAuthContext();
    return (
        <div className="flex flex-col w-full gap-4">
            <CommentsList comments={comments} hasRate={hasRate} />
            {user ? (
                <div className="comment-reply-box">
                    <h5 className="title">ثبت یک دیدگاه</h5>
                    <form
                        onSubmit={handleSubmit((data) =>
                            mutate({
                                ...data,
                                commentable_id: id,
                                commentable_type: `App\\Models\\${type}`,
                            })
                        )}
                        className="comment-reply-form"
                    >
                        <div className="form-grp">
                            <textarea
                                {...register("comment")}
                                placeholder="دیدگاه شما ..."
                            />
                        </div>
                        {hasRate && (
                            <div className="flex gap-2 items-center my-4">
                                <span>امتیاز</span>
                                <Rating />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="btn rounded-btn"
                            disabled={isLoading}
                        >
                            ثبت دیدگاه
                        </button>
                    </form>
                </div>
            ) : (
                <div className="comment-reply-box">
                    <LoginProcess title="جهت ثبت دیدگاه ابتدا وارد شوید" />
                </div>
            )}
        </div>
    );
};

export default CommentsSection;
