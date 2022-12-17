import clsx from "clsx";
import { Fragment } from "react";

interface ProductCounterProps {
    inStock: boolean;
    variant?: "single" | "list";
}

const ProductCounter = ({ inStock, variant = "list" }: ProductCounterProps) => {
    return (
        <Fragment>
            {inStock ? (
                <div
                    className={clsx(
                        variant === "list" ? "sp-cart-wrap" : "sd-cart-wrap"
                    )}
                >
                    <div className="cart-plus-minus">
                        <input type="text" defaultValue={1} />
                        <button type="button" className="dec qtybutton">
                            -
                        </button>
                        <button type="button" className="inc qtybutton">
                            +
                        </button>
                    </div>
                </div>
            ) : (
                <span className="!text-red-500 product-status mb-4">
                    موجود نیست
                </span>
            )}
        </Fragment>
    );
};

export default ProductCounter;
