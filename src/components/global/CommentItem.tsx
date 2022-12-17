import FormattedDate from "@/components/common/FormattedDate";
import Rating from "@mui/material/Rating";

interface CommentItemProps {
    comment: FormattedCommentItem;
    hasRate?: boolean;
}

const CommentItem = ({ comment, hasRate }: CommentItemProps) => {
    const { avatar, author, text, rating, date } = comment;
    return (
        <div className="flex">
            <div className="flex-shrink-0 mie-3">
                <img
                    className="w-8 h-8 mt-2 rounded-full sm:w-10 sm:h-10"
                    src={avatar}
                />
            </div>
            <div className="flex-1 px-4 py-2 leading-relaxed border rounded-lg sm:px-6 sm:py-4">
                <div className="flex items-center justify-between mb">
                    <div className="flex items-center justify-center">
                        <strong>{author}</strong>{" "}
                        {date && (
                            <FormattedDate
                                className="text-xs text-gray-400 pis-2"
                                date={date}
                            />
                        )}
                    </div>
                    {hasRate && <Rating readOnly value={rating} />}
                </div>
                <p className="!mb-0 mt-4">{text}</p>
            </div>
        </div>
    );
};

export default CommentItem;
