const CartShippingMethods = () => {
    return (
        <li>
            <span>شیوه ارسال</span>
            <div className="shop-check-wrap">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                    >
                        ارسال رایگان
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                    >
                        وانت محلی: 5.000 تومان
                    </label>
                </div>
            </div>
        </li>
    );
};

export default CartShippingMethods;
