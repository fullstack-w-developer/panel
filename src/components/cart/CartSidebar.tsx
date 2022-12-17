import Link from "next/link";
import { useCartContext } from "src/contexts/ManagedCartContext";
import CartShippingMethods from "@/components/cart/CartShippingMethods";
import Price from "@/components/common/Price";

const CartSidebar = () => {
    const { cartTotal, cartItemsSum } = useCartContext();
    return (
        <div className="shop-cart-total">
            <h3 className="title">مجموع سبد خرید</h3>
            <div className="shop-cart-widget">
                <div>
                    <ul>
                        <li className="sub-total">
                            <span>جمع</span> <Price price={cartItemsSum} />
                        </li>
                        <CartShippingMethods />
                        <li className="cart-total-amount">
                            <span>مجموع کل سبد</span>{" "}
                            <span className="amount">
                                <Price price={cartTotal} />
                            </span>
                        </li>
                    </ul>
                    <Link href="/cart/checkout">
                        <a className="btn">برو به صورتحساب</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
