import { getLayout } from "@/components/layouts/PanelLayout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                "common",
                "panel",
            ])),
        },
    };
};

const PanelAddressesPage = () => {
    return <span></span>;
};

PanelAddressesPage.getLayout = getLayout;

export default PanelAddressesPage;
