import { useRouter } from "next/router";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Alert from "@mui/material/Alert";
import Button from "@/components/common/Button";
import LoginAreaLayout from "@/components/layouts/LoginAreaLayout";
import LoginProcess from "@/components/global/LoginProcess";
import { getLayout } from "@/components/layouts/PageLayout";
import { getInit } from "@/services/other";
import { NextSeo } from "next-seo";
import { getPageTitle } from "@/helpers/utils";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    const init = await getInit();
    return {
        props: {
            init,
            ...(await serverSideTranslations(locale as string, ["common"])),
        },
        revalidate: 60,
    };
};

type LoginPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const LoginPage = ({ init }: LoginPageProps) => {
    const { t } = useTranslation("common", { keyPrefix: "login" });
    const { user } = useAuthContext();
    const router = useRouter();

    return (
        <LoginAreaLayout>
            <NextSeo title={getPageTitle(init.name, "ورود")} />
            {user ? (
                <div className="flex flex-col items-center w-full">
                    <Alert severity="success" className="w-full mb-4">
                        {t("already_logged_in")}
                    </Alert>
                    <div className="grid w-full grid-cols-2 gap-4">
                        <Button
                            className="w-full"
                            variant="outlined"
                            onClick={() => router.push("/")}
                        >
                            {t("to_home")}
                        </Button>
                        <Button
                            isGradient
                            className="w-full"
                            onClick={() => router.push("/panel/dashboard")}
                        >
                            {t("to_panel")}
                        </Button>
                    </div>
                </div>
            ) : (
                <LoginProcess />
            )}
        </LoginAreaLayout>
    );
};

LoginPage.getLayout = getLayout;

export default LoginPage;
