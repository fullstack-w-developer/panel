import { getLayout } from "@/components/layouts/PanelLayout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpdateProfileForm from "@/components/panel/UpdateProfileForm";
// import UpdatePasswordForm from "@/components/panel/UpdatePasswordForm";

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

const PanelDashboardPage = () => {
    return (
        <div className="flex flex-col space-y-14">
            <UpdateProfileForm />
            {/* <UpdatePasswordForm /> */}
        </div>
    );
};

PanelDashboardPage.getLayout = getLayout;

export default PanelDashboardPage;
