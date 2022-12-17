import FadeImage from "@/components/common/FadeImage";
import Price from "@/components/common/Price";
import { getProductLink } from "@/helpers/utils";
import Rating from "@mui/material/Rating";
import Link from "next/link";

interface ProductSmallProps {
    product: FormattedProductItem;
}

const ProductSmall = ({ product }: ProductSmallProps) => {
    const { rating, title, price, slug, image } = product;
    const link = getProductLink(slug);
    return (
        <li>
            <div className="sidebar-product-thumb">
                <Link href={link}>
                    <a>
                        <FadeImage
                            src={image}
                            width={80}
                            height={80}
                            objectFit="cover"
                            alt={title}
                        />
                    </a>
                </Link>
            </div>
            <div>
                <Rating size="small" readOnly value={rating} />
                <h3 className="!text-sm line-clamp-1">
                    <Link href={link}>
                        <a>{title}</a>
                    </Link>
                </h3>
                <Price price={price} className="text-sm" />
            </div>
        </li>
    );
};

export default ProductSmall;
