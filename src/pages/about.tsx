import HtmlContent from "@/components/common/HtmlContent";
import { getLayout } from "@/components/layouts/PageLayout";
import { getPageTitle } from "@/helpers/utils";
import { getAboutUs, getInit } from "@/services/other";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const [
        {
            data: { content },
        },
        init,
    ] = await Promise.all([getAboutUs(), getInit()]);
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            content,
            init,
            ...translations,
        },
        revalidate: 60,
    };
};

type AboutUsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AboutUsPage = ({ content, init }: AboutUsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <NextSeo title={getPageTitle(init.name, "درباره ما")} />
            <section className="p-4 my-8 bg-white rounded-lg shadow-lg">
                <h1 className="mb-8 text-2xl font-bold">
                    {t("about_us_title")}
                </h1>
                <HtmlContent content={content} />
            </section>
        </div>
    );
};

AboutUsPage.getLayout = getLayout;

export default AboutUsPage;
