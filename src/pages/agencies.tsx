import AgenciesLoop from "@/components/agency/AgenciesLoop";
import AgenciesMap from "@/components/agency/AgenciesMap";
import { getLayout } from "@/components/layouts/PageLayout";
import ManagedAgencyContext from "src/contexts/ManagedAgenciesContext";
import { getPageTitle } from "@/helpers/utils";
import { getAgencies } from "@/services/agency";
import { getInit, getProvinces } from "@/services/other";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const [agencies, { data: provinces }, init] = await Promise.all([
        getAgencies(),
        getProvinces(),
        getInit(),
    ]);
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            init,
            agencies,
            provinces,
            ...translations,
        },
        revalidate: 60,
    };
};

type AgenciesPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AgenciesPage = ({ provinces, agencies, init }: AgenciesPageProps) => {
    return (
        <ManagedAgencyContext>
            <NextSeo title={getPageTitle(init.name, "نمایندگی ها")} />
            <AgenciesMap provinces={provinces} />
            <AgenciesLoop initialData={agencies} />
        </ManagedAgencyContext>
    );
};

AgenciesPage.getLayout = getLayout;

export default AgenciesPage;
