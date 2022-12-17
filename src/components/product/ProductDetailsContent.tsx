import ProductCategories from "@/components/product/ProductCategories";
import Rating from "@mui/material/Rating";
import Price from "@/components/common/Price";
import { useSingleProductContext } from "src/contexts/ManagedSingleProductContext";
import ProductAddToFavorite from "@/components/product/ProductAddToFavorite";

const ProductDetailsContent = () => {
    const { product } = useSingleProductContext();
    const {
        help,
        title,
        rating,
        code,
        price,
        categories,
        short_description,
        unit,
        value,
        product_status,
    } = product;
    return (
        <div className="col-lg-5">
            <div className="shop-details-content">
                <h1 className="title">{title}</h1>
                <div className="shop-details-meta">
                    <ul className="flex items-center">
                        <li className="flex items-center gap-1">
                            <Rating size="small" readOnly value={rating} />
                            <span>امتیاز</span>
                        </li>
                        <li>
                            کد محصول : <span>{code}</span>
                        </li>
                        <li>
                            <span>{value}</span> <span>{unit.name}</span>
                        </li>
                    </ul>
                </div>
                <div className="shop-details-price">
                    <h2 className="price">
                        <Price price={price} />
                    </h2>
                    <h5
                        className="stock-status"
                        style={{ color: product_status.color ?? "" }}
                    >
                        - {product_status.name}
                    </h5>
                </div>
                <p className="mb-4 line-clamp-3">{short_description}</p>
                {/* <div className="shop-perched-info">
                    <ProductCounter variant="single" inStock={inStock} />
                    {inStock && (
                        <button type="button" className="btn">
                            افزودن به سبد
                        </button>
                    )}
                </div> */}
                <div className="shop-details-bottom">
                    <h5 className="title">
                        {help && (
                            <a
                                href={help}
                                className="flex font-normal mb-4 items-center gap-2 text-primary-main"
                            >
                                <i className="fas fa-download" />
                                <span>دانلود راهنما</span>
                            </a>
                        )}
                        <ProductAddToFavorite />
                    </h5>
                    <ProductCategories categories={categories} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsContent;
