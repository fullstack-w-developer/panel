import DoubleColumn from "@/components/common/DoubleColumn";
import PageLayout from "@/components/layouts/PageLayout";
import PanelSidebar from "@/components/panel/PanelSidebar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface Props {
    children?: React.ReactNode;
}

const PanelTitle = () => {
    const { pathname } = useRouter();
    const { t } = useTranslation("panel");
    const titles: any = t("titles", { returnObjects: true });
    const path = pathname.replace("/panel/", "");
    return (
        <div className="pb-4 mb-4">
            <h1 className="inline-block pb-2 font-bold border-b-2 border-primary-main text-lg">
                {titles[path]}
            </h1>
        </div>
    );
};

const PanelLayout = ({ children }: Props) => {
    return (
        <section className="bg-gray-50 py-10">
            <DoubleColumn
                className="p-4 pb-8 bg-white rounded-lg shadow-md"
                sidebar={<PanelSidebar />}
            >
                <PanelTitle />
                <>{children}</>
            </DoubleColumn>
        </section>
    );
};

export default PanelLayout;

export const getLayout = (page: ReactElement) => (
    <PageLayout>
        <PanelLayout>{page}</PanelLayout>
    </PageLayout>
);
