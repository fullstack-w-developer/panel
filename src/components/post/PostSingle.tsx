import FadeImage from "@/components/common/FadeImage";
import HtmlContent from "@/components/common/HtmlContent";
import CommentsSection from "@/components/global/CommentsSection";
import SocialShare from "@/components/global/SocialShare";
import PostTags from "@/components/post/PostTags";
import StandardPostMeta from "@/components/post/StandardPostMeta";
import { getPostFullLink } from "@/helpers/utils";
import { useSinglePostContext } from "src/contexts/ManagedSinglePostContext";

const PostSingle = () => {
    const { post } = useSinglePostContext();
    const { slug, id, comments, author, date, image, title, content, tags } =
        post;
    return (
        <section className="blog-details-area blog-gray-bg">
            <div className="container">
                <div className="container-inner-wrap">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="standard-blog-item mb-50">
                                <div className="blog-thumb">
                                    <FadeImage
                                        objectFit="cover"
                                        src={image}
                                        width={1200}
                                        height={700}
                                    />
                                </div>
                                <div className="standard-blog-content blog-details-content">
                                    <h1 className="title">{title}</h1>
                                    <StandardPostMeta
                                        date={date}
                                        author={author.name}
                                    />
                                    <HtmlContent content={content} />

                                    <div
                                        className="blog-line"
                                        data-background="img/blog/blog_item_line.png"
                                    />
                                    <div className="blog-details-bottom">
                                        <PostTags tags={tags} />
                                        <SocialShare
                                            url={getPostFullLink(slug)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="avatar-post mt-50 mb-50">
                                <div className="post-avatar-img">
                                    <img
                                        width={120}
                                        height={120}
                                        src={author.profile_image}
                                        alt={author.name}
                                    />
                                </div>
                                <div className="post-avatar-content">
                                    <h5>{author.name}</h5>
                                    <SocialShare url={getPostFullLink(slug)} />
                                </div>
                            </div>
                            <CommentsSection
                                id={id}
                                hasRate={false}
                                comments={comments}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostSingle;
