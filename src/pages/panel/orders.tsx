import { getLayout } from "@/components/layouts/PanelLayout";
import OrdersTable from "@/components/panel/OrdersTable";
import useUserOrdersQuery from "@/hooks/query/useUsersOrdersQuery";
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

const PanelOrdersPage = () => {
    const { data, isLoading } = useUserOrdersQuery();
    return <OrdersTable isLoading={isLoading} orders={data} />;
};

PanelOrdersPage.getLayout = getLayout;

export default PanelOrdersPage;
