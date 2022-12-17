import CartEmpty from "@/components/cart/CartEmpty";
import CartSidebar from "@/components/cart/CartSidebar";
import PageLayout from "@/components/layouts/PageLayout";
import { useCartContext } from "src/contexts/ManagedCartContext";
import { ReactElement } from "react";

interface CartLayoutProps {
    children?: React.ReactNode;
}

const CartLayout = ({ children }: CartLayoutProps) => {
    const { cartItems } = useCartContext();
    return (
        <div className="cart-area pt-90 pb-90">
            <div className="container">
                {cartItems.length > 0 ? (
                    <div className="row justify-content-center">
                        <div className="col-xl-7">{children}</div>
                        <div className="col-xl-5 col-lg-12">
                            <CartSidebar />
                        </div>
                    </div>
                ) : (
                    <CartEmpty />
                )}
            </div>
        </div>
    );
};

export default CartLayout;

export const getLayout = (page: ReactElement) => (
    <PageLayout>
        <CartLayout>{page}</CartLayout>
    </PageLayout>
);
