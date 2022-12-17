import ProductBottomTabs from "@/components/product/ProductBottomTabs";
import ProductDetailsContent from "@/components/product/ProductDetailsContent";
import ProductGallery from "@/components/product/ProductGallery";
import { useSingleProductContext } from "src/contexts/ManagedSingleProductContext";

const ProductSingle = () => {
    const { product } = useSingleProductContext();
    const { gallery } = product;
    return (
        <section className="shop-details-area pt-90 pb-90">
            <div className="container">
                <div className="row">
                    <ProductGallery gallery={gallery} />
                    <ProductDetailsContent />
                </div>
                <ProductBottomTabs />
            </div>
        </section>
    );
};

export default ProductSingle;
