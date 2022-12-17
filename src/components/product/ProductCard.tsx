import Link from "next/link";
import Price from "@/components/common/Price";
import Rating from "@mui/material/Rating";
import { getProductLink } from "@/helpers/utils";
import ProductThumb from "@/components/product/ProductThumb";

interface ProductCardProps {
    product: FormattedProductItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { slug, image, title, rating, inStock, price, offPercentage } =
        product;
    const link = getProductLink(slug);
    return (
        <div className="h-full flex flex-col sp-product-item !mb-0">
            <ProductThumb
                title={title}
                image={image}
                link={link}
                offPercentage={offPercentage}
            />
            <div className="sp-product-content">
                <Rating readOnly value={rating} />
                <h2 className="title">
                    <Link href={link}>
                        <a className="line-clamp-2">{title}</a>
                    </Link>
                </h2>
            </div>
            <div className="mt-auto sp-product-content">
                {inStock && (
                    <span className="product-status">موجود در انبار</span>
                )}
                {/* <ProductCounter inStock={inStock} /> */}
                <p className="flex items-center justify-center text-center">
                    <Price price={price} />
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
