const CartApplyDiscountForm = () => {
    return (
        <div className="shop-cart-bottom">
            <div className="cart-coupon">
                <form>
                    <input
                        type="text"
                        placeholder="کد تخفیف را وارد کنید ..."
                    />
                    <button className="btn">اعمال تخفیف</button>
                </form>
            </div>
        </div>
    );
};

export default CartApplyDiscountForm;
