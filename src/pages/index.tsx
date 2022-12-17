import ImagesSlider from "@/components/global/ImagesSlider";
import ServicesSection from "@/components/global/ServicesSection";
import HeroSlider from "@/components/global/HeroSlider";
import { getLayout } from "@/components/layouts/PageLayout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import Banners from "@/components/global/Banners";
import LatestPosts from "@/components/post/LatestPosts";
import {
    getBanners,
    getBrands,
    getCustomers,
    getInit,
    getSlides,
} from "@/services/other";
import { getPosts } from "@/services/post";
import { NextSeo } from "next-seo";
import { getPageTitle } from "@/helpers/utils";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const [slides, brands, customers, posts, banners, init] = await Promise.all(
        [
            getSlides(),
            getBrands(),
            getCustomers(),
            getPosts({ limit: 3 }),
            getBanners(),
            getInit(),
        ]
    );
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            brands,
            customers,
            slides,
            posts,
            banners,
            init,
            ...translations,
        },
        revalidate: 60,
    };
};

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage = (props: IndexPageProps) => {
    const { slides, brands, customers, posts, banners, init } = props;
    return (
        <Fragment>
            <NextSeo title={getPageTitle(init.name, "صفحه اصلی")} />
            <HeroSlider slides={slides} />
            <section
                className="bg-cover"
                style={{ backgroundImage: `url(/media/bg/slider_area_bg.jpg)` }}
            >
                <ImagesSlider title="برندهای ما" slides={brands} />
                <ServicesSection />
            </section>
            <Banners banners={banners} />
            <ImagesSlider title="همکاران ما" slides={customers} />
            <LatestPosts posts={posts.data} />
        </Fragment>
    );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
