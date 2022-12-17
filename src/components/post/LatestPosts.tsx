import PostCard from "@/components/post/PostCard";

interface LatestPostsProps {
    posts: FormattedPostItem[];
}

const LatestPosts = ({ posts }: LatestPostsProps) => {
    return (
        <section className="blog-area pt-70 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="text-center section-title section-title-two mb-50">
                            <span className="sub-title">
                                همراه واحد آموزش‌پذیر باشید!
                            </span>
                            <h2 className="title">آخرین مقاله‌ها</h2>
                            <p>
                                شما هم می‌توانید مقالات و مطالب خود را اضافه
                                کنید.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {posts.slice(0, 3).map((post) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-9"
                            key={post.id}
                        >
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestPosts;
