import LoopInfo from "@/components/global/LoopInfo";
import ProductSort from "@/components/product/ProductSort";
import { useProductContext } from "src/contexts/ManagedProductContext";

const ProductLoopMeta = () => {
    const { meta } = useProductContext();
    return (
        <div className="mb-30">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <LoopInfo {...meta} />
                <ProductSort />
            </div>
        </div>
    );
};

export default ProductLoopMeta;
