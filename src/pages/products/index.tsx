import { getLayout } from "@/components/layouts/PageLayout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getProductCategories, getProducts } from "@/services/product";
import ManagedProductContext from "src/contexts/ManagedProductContext";
import BreadcrumbArea from "@/components/global/BreadcrumbArea";
import ProductLoopAside from "@/components/product/ProductLoopAside";
import ProductLoopMeta from "@/components/product/ProductLoopMeta";
import ProductLoop from "@/components/product/ProductLoop";
import { getInit } from "@/services/other";
import { NextSeo } from "next-seo";
import { getPageTitle } from "@/helpers/utils";

export const getServerSideProps = async ({
    locale,
    query,
}: GetServerSidePropsContext) => {
    const [products, { data: categories }, { data: mostSoldProducts }, init] =
        await Promise.all([
            getProducts(query),
            getProductCategories(),
            getProducts({ limit: 5 }),
            getInit(),
        ]);
    const translations = await serverSideTranslations(locale as string, [
        "common",
    ]);
    return {
        props: {
            init,
            products,
            categories,
            mostSoldProducts,
            query,
            ...translations,
        },
    };
};

type ProductsArchivePageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

const ProductsArchivePage = ({
    init,
    products,
    query,
    categories,
    mostSoldProducts,
}: ProductsArchivePageProps) => {
    const { from, to, total } = products.meta;
    return (
        <ManagedProductContext
            initialMeta={{ from, to, total }}
            initialQuery={query}
        >
            <NextSeo title={getPageTitle(init.name, "محصولات")} />
            <BreadcrumbArea heading="لیست محصولات" />
            <section className="shop--area pt-90 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <ProductLoopAside
                            sideProducts={mostSoldProducts}
                            categories={categories}
                        />
                        <div className="col-9">
                            <ProductLoopMeta />
                            <ProductLoop initialData={products} />
                        </div>
                    </div>
                </div>
            </section>
        </ManagedProductContext>
    );
};

ProductsArchivePage.getLayout = getLayout;

export default ProductsArchivePage;
