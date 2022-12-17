import ContactUs from "@/components/global/ContactUs";
import { getLayout } from "@/components/layouts/PageLayout";
import { getPageTitle } from "@/helpers/utils";
import { getInit } from "@/services/other";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { Fragment } from "react";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const init = await getInit();
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            init,
            ...translations,
        },
        revalidate: 60,
    };
};

type ContactUsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ContactUsPage = ({ init }: ContactUsPageProps) => {
    return (
        <Fragment>
            <NextSeo title={getPageTitle(init.name, "تماس با ما")} />
            <ContactUs />
        </Fragment>
    );
};

ContactUsPage.getLayout = getLayout;

export default ContactUsPage;
