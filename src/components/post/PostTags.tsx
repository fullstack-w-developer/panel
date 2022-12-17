import Link from "next/link";

interface PostTagsProps {
    tags: FormattedPostItem["tags"];
}

const PostTags = ({ tags }: PostTagsProps) => {
    return (
        <div className="blog-details-tags">
            <ul>
                <li className="title">
                    <i className="fas fa-tags" /> برچسب ها :
                </li>
                {tags.map((tag) => (
                    <li key={tag.id}>
                        <Link href="/">
                            <a href="#">{tag.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostTags;
