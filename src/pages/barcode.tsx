import CheckBarcodeEnd from "@/components/global/CheckBarcodeEnd";
import CheckBarcodeForm from "@/components/global/CheckBarcodeForm";
import { getLayout } from "@/components/layouts/PageLayout";
import ManagedBarcodeContext from "@/contexts/ManagedBarcodeContext";
import { getPageTitle } from "@/helpers/utils";
import { getInit } from "@/services/other";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

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

type BarcodePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const BarcodePage = ({ init }: BarcodePageProps) => {
    return (
        <ManagedBarcodeContext>
            <section>
                <NextSeo title={getPageTitle(init.name, "ضمانت کالا")} />
                <div className="container py-10">
                    <div className="grid w-full grid-cols-12 mx-auto overflow-hidden bg-white shadow-lg rounded-3xl lg:w-9/12 xxl:w-8/12">
                        <div className="flex flex-col items-center justify-center h-full col-span-12 p-8 lg:col-span-7">
                            <h1 className="text-lg text-center">ضمانت کالا</h1>
                            <CheckBarcodeForm />
                        </div>
                        <CheckBarcodeEnd />
                    </div>
                </div>
            </section>
        </ManagedBarcodeContext>
    );
};

BarcodePage.getLayout = getLayout;

export default BarcodePage;
