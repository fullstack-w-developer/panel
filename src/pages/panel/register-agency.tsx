import { getLayout } from "@/components/layouts/PanelLayout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RegisterAgencyForm from "@/components/panel/RegisterAgencyForm";
import { useAuthContext } from "@/contexts/ManagedAuthContext";
import AlreadySubmittedAgencyForm from "@/components/panel/AlreadySubmittedAgencyForm";

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

const PanelRegisterAgencyPage = () => {
    const { user } = useAuthContext();
    return (
        <div className="flex flex-col space-y-14">
            {user?.has_requested ? (
                <AlreadySubmittedAgencyForm />
            ) : (
                <RegisterAgencyForm />
            )}
        </div>
    );
};

PanelRegisterAgencyPage.getLayout = getLayout;

export default PanelRegisterAgencyPage;
