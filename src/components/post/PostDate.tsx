import useBlogPostDate from "@/hooks/common/useBlogPostDate";
import React from "react";

interface BlogPostProps {
    date: Date | number;
}

const PostDate = ({ date }: BlogPostProps) => {
    const [month, day] = useBlogPostDate(date);
    return (
        <div className="blog-post-date">
            {day} <span>{month}</span>
        </div>
    );
};

export default PostDate;
