import CartApplyDiscountForm from "@/components/cart/CartApplyDiscountForm";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "src/contexts/ManagedCartContext";
import { Fragment } from "react";

const CartItemsTable = () => {
    const { cartItems } = useCartContext();
    return (
        <Fragment>
            <div className="cart-wrapper">
                <div className="table-responsive">
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th className="product-thumbnail" />
                                <th className="product-name">نام محصول</th>
                                <th className="product-price">قیمت</th>
                                <th className="product-quantity">تعداد</th>
                                <th className="product-subtotal">جمع</th>
                                <th className="product-delete" />
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <CartItem
                                    key={cartItem.product.id}
                                    cartItem={cartItem}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <CartApplyDiscountForm />
        </Fragment>
    );
};

export default CartItemsTable;
