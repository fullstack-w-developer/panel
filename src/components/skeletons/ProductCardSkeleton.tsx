import Skeleton from "@mui/material/Skeleton";

const ProductCardSkeleton = () => {
    return (
        <div className="h-full flex flex-col sp-product-item !mb-0">
            <div className="aspect-w-1 aspect-h-1">
                <Skeleton variant="rectangular" style={{ height: "100%" }} />
            </div>
            <div className="mt-auto sp-product-content">
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
