import { getLayout } from "@/components/layouts/PageLayout";
import ProductSingle from "@/components/product/ProductSingle";
import ManagedSingleProductContext from "src/contexts/ManagedSingleProductContext";
import { getInit } from "@/services/other";
import { getSingleProduct } from "@/services/product";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SingleSEO from "@/components/global/SingleSEO";

export const getServerSideProps = async ({
    locale,
    params,
}: GetServerSidePropsContext) => {
    const { slug = "" } = params!;
    const [product, init] = await Promise.all([
        getSingleProduct(slug as string),
        getInit(),
    ]);
    return {
        props: {
            product,
            init,
            ...(await serverSideTranslations(locale as string, ["common"])),
        },
    };
};

type ProductSinglePageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

const ProductSinglePage = ({ product, init }: ProductSinglePageProps) => {
    return (
        <ManagedSingleProductContext initialProduct={product}>
            <SingleSEO
                title={product.title}
                name={init.name}
                seo={product.seo}
            />
            <ProductSingle />
        </ManagedSingleProductContext>
    );
};

ProductSinglePage.getLayout = getLayout;

export default ProductSinglePage;
