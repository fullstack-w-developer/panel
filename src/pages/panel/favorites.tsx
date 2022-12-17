import AlertBox from "@/components/common/AlertBox";
import { getLayout } from "@/components/layouts/PanelLayout";
import ProductCard from "@/components/product/ProductCard";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import useUserFavoriteProductsQuery from "@/hooks/query/useUserFavoriteProductsQuery";
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

const PanelFavoritesPage = () => {
    const { isLoading, data } = useUserFavoriteProductsQuery();
    return (
        <>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {isLoading &&
                    [...Array(6)].map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                {data?.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
            {data?.length === 0 && <AlertBox />}
        </>
    );
};

PanelFavoritesPage.getLayout = getLayout;

export default PanelFavoritesPage;
