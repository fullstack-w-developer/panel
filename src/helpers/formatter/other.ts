export const formatComment = (comment: CommentItemResponse, id: number) => {
    return {
        id,
        author: comment.user.name,
        avatar: comment.user.profile_image,
        date: comment.date,
        email: "",
        rating: comment.rate,
        replies: [],
        text: comment.comment,
    };
};
