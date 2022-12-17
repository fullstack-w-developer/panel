import Link from "next/link";
import { getProductLink } from "@/helpers/utils";
import Price from "@/components/common/Price";

interface CartItemProps {
    cartItem: CartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
    const { product, count } = cartItem;
    const { title, image, price, slug } = product;
    const link = getProductLink(slug);
    return (
        <tr key={product.id}>
            <td className="product-thumbnail">
                <Link href={link}>
                    <a>
                        <img src={image} />
                    </a>
                </Link>
            </td>
            <td className="product-name">
                <h4>
                    <Link href={link}>
                        <a>{title}</a>
                    </Link>
                </h4>
            </td>
            <td className="product-price">
                <Price price={price} />
            </td>
            <td className="product-quantity">
                <div className="cart--plus--minus">
                    <div className="num-block">
                        <input
                            type="text"
                            className="in-num"
                            defaultValue={count}
                        />
                        <div className="qtybutton-box">
                            <span className="plus">
                                <i className="fas fa-angle-up" />
                            </span>
                            <span className="minus dis">
                                <i className="fas fa-angle-down" />
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="product-subtotal">
                <Price price={count * price} />
            </td>
            <td className="product-delete">
                <button type="button">
                    <i className="far fa-trash-alt" />
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
