import { getLayout } from "@/components/layouts/PageLayout";
import PostSingle from "@/components/post/PostSingle";
import ManagedSinglePostContext from "src/contexts/ManagedSinglePostContext";
import { getInit } from "@/services/other";
import { getSinglePost } from "@/services/post";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SingleSEO from "@/components/global/SingleSEO";

export const getServerSideProps = async ({
    locale,
    params,
}: GetServerSidePropsContext) => {
    const { slug = "" } = params!;
    const [post, init] = await Promise.all([
        getSinglePost(slug as string),
        getInit(),
    ]);
    return {
        props: {
            post,
            init,
            ...(await serverSideTranslations(locale as string, ["common"])),
        },
    };
};

type PostSinglePageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

const PostSinglePage = ({ post, init }: PostSinglePageProps) => {
    return (
        <ManagedSinglePostContext initialPost={post}>
            <SingleSEO title={post.title} name={init.name} seo={post.seo} />
            <PostSingle />
        </ManagedSinglePostContext>
    );
};

PostSinglePage.getLayout = getLayout;

export default PostSinglePage;
