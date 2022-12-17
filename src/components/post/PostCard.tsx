import Link from "next/link";
import PostDate from "@/components/post/PostDate";
import PostTitle from "@/components/post/PostTitle";
import PostMeta from "@/components/post/PostMeta";
import PostThumb from "@/components/post/PostThumb";
import clsx from "clsx";
import { getPostLink } from "@/helpers/utils";

interface PostCardProps {
    post: FormattedPostItem;
    variant?: "primary" | "secondary";
}

const PostCard = ({ post, variant = "primary" }: PostCardProps) => {
    const { image, slug, author, title, date } = post;
    const link = getPostLink(slug);
    return (
        <div className="blog-post-item mb-30">
            <PostThumb variant={variant} image={image} link={link} />
            <div className="blog-post-content">
                <PostDate date={date} />
                <PostMeta author={author.name} />
                <PostTitle link={link} title={title} />
                <div className="blog-post-bottom">
                    <ul
                        className={clsx(
                            variant === "secondary" && "flex justify-end"
                        )}
                    >
                        <li className="read-more">
                            <Link href={link}>
                                <a>
                                    بیشتر بدانید{" "}
                                    <i className="fas fa-angle-double-left" />
                                </a>
                            </Link>
                        </li>
                        <li className="share-btn">
                            <button
                                className="text-secondary-main"
                                type="button"
                            >
                                <i className="fas fa-share-alt" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
