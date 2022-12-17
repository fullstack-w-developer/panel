import CommentItem from "@/components/global/CommentItem";
import { Fragment } from "react";

type CommentsListProps = {
    comments: FormattedCommentItem[];
    hasRate: boolean;
};

const CommentsList = ({ hasRate, comments }: CommentsListProps) => {
    return (
        <Fragment>
            {comments.length > 0 && (
                <div className="w-full mx-auto antialiased">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">
                        دیدگاه ها
                    </h3>
                    <div className="space-y-4">
                        {comments.map((comment, i) => (
                            <CommentItem
                                hasRate={hasRate}
                                key={i}
                                comment={comment}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default CommentsList;
