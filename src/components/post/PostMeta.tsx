interface PostMetaProps {
    author: string;
}

const PostMeta = ({ author }: PostMetaProps) => {
    return (
        <div className="blog-post-meta">
            <ul>
                <li>
                    <span>{author}</span>
                </li>
            </ul>
        </div>
    );
};

export default PostMeta;
