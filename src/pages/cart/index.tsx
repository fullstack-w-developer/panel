import CartItemsTable from "@/components/cart/CartItemsTable";
import { getLayout } from "@/components/layouts/CartLayout";
import { useCartContext } from "src/contexts/ManagedCartContext";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["common"])),
        },
    };
};

const CartPage = () => {
    const { setCartStep, cartStep } = useCartContext();
    useEffect(() => {
        setCartStep(1);
    }, [cartStep]);
    return <CartItemsTable />;
};

CartPage.getLayout = getLayout;

export default CartPage;
