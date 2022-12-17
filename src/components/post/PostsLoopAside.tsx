import ScrollbarContent from "@/components/common/ScrollbarContent";
import Widget from "@/components/global/Widget";
import PostCategoriesList from "@/components/post/PostCategoriesList";
import PostSmall from "@/components/post/PostSmall";
import PostTagsList from "@/components/post/PostTagsList";

interface PostsLoopAsideProps {
    asidePosts: FormattedPostItem[];
    categories: PostCategoryResponse[];
    tags: PostTagResponse[];
}

const PostsLoopAside = ({
    asidePosts,
    categories,
    tags,
}: PostsLoopAsideProps) => {
    return (
        <aside className="blog-sidebar">
            <Widget>
                <div className="sidebar-search-form">
                    <form action="#">
                        <input type="text" placeholder="جستجو ..." />
                    </form>
                </div>
            </Widget>
            <Widget heading="دسته بندیها">
                <ScrollbarContent>
                    <PostCategoriesList categories={categories} />
                </ScrollbarContent>
            </Widget>
            <Widget heading="برچسب ها">
                <ScrollbarContent>
                    <PostTagsList tags={tags} />
                </ScrollbarContent>
            </Widget>
            <Widget heading="نوشته های اخیر">
                <div className="rc-post-list">
                    <ul>
                        {asidePosts.slice(0, 5).map((post) => (
                            <PostSmall key={post.id} post={post} />
                        ))}
                    </ul>
                </div>
            </Widget>
        </aside>
    );
};

export default PostsLoopAside;

{
    /* <div className="sidebar-cat-list">
                    <ul>
                        <li>
                            <a href="#">
                                لبنیات و نانوایی{" "}
                                <i className="fas fa-angle-double-left" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                تجارت آنلاین{" "}
                                <i className="fas fa-angle-double-left" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                تنقلات غذایی{" "}
                                <i className="fas fa-angle-double-left" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                برنج و تنقلات غلات{" "}
                                <i className="fas fa-angle-double-left" />
                            </a>
                        </li>
                    </ul>
                </div> */
}

{
    /* <Widget heading="برچسب ها">
                <div className="sidebar-tag-list">
                    <ul>
                        <li>
                            <button type="button">{tag}</button>
                        </li>
                    </ul>
                </div>
            </Widget> */
}
