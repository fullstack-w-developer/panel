import Link from "next/link";
import FadeImage from "@/components/common/FadeImage";
import Percentage from "@/components/common/Percentage";

interface ProductThumbProps {
    link: string;
    image: string;
    offPercentage: number;
    title: string;
}

const ProductThumb = ({
    offPercentage,
    link,
    image,
    title,
}: ProductThumbProps) => {
    return (
        <div className="sp-product-thumb">
            {offPercentage > 0 && (
                <span className="batch discount">
                    <Percentage percent={offPercentage} />
                </span>
            )}
            <Link href={link}>
                <a className="aspect-w-1 aspect-h-1">
                    <FadeImage
                        wrapperClassName="w-full h-full !absolute"
                        objectFit="cover"
                        width={300}
                        height={300}
                        src={image}
                        alt={title}
                    />
                </a>
            </Link>
        </div>
    );
};

export default ProductThumb;
