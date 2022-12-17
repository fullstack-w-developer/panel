import { getLayout } from "@/components/layouts/PageLayout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPostCategories, getPosts, getPostTags } from "@/services/post";
import ManagedPostContext from "src/contexts/ManagedPostContext";
import BreadcrumbArea from "@/components/global/BreadcrumbArea";
import PostsLoopAside from "@/components/post/PostsLoopAside";
import PostsLoop from "@/components/post/PostsLoop";
import { getInit } from "@/services/other";
import { NextSeo } from "next-seo";
import { getPageTitle } from "@/helpers/utils";

export const getServerSideProps = async ({
    locale,
    query,
}: GetServerSidePropsContext) => {
    const [
        posts,
        { data: latestPosts },
        { data: categories },
        { data: tags },
        init,
    ] = await Promise.all([
        getPosts({ limit: 8, ...query }),
        getPosts({ limit: 5 }),
        getPostCategories(),
        getPostTags(),
        getInit(),
    ]);
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            posts,
            tags,
            categories,
            query,
            latestPosts,
            init,
            ...translations,
        },
    };
};

type PostsArchivePageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

const PostsArchivePage = ({
    init,
    tags,
    posts,
    categories,
    latestPosts,
    query,
}: PostsArchivePageProps) => {
    return (
        <ManagedPostContext initialQuery={query}>
            <NextSeo title={getPageTitle(init.name, "مقالات")} />
            <BreadcrumbArea heading="مقالات" />
            <section className="blog-area blog-gray-bg">
                <div className="container">
                    <div className="container-inner-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-10">
                                <PostsLoopAside
                                    categories={categories}
                                    tags={tags}
                                    asidePosts={latestPosts}
                                />
                            </div>
                            <PostsLoop initialData={posts} />
                        </div>
                    </div>
                </div>
            </section>
        </ManagedPostContext>
    );
};

PostsArchivePage.getLayout = getLayout;

export default PostsArchivePage;
