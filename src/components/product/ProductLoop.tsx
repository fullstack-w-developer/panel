import Pagination from "@/components/common/Pagination";
import LoopWrapper from "@/components/global/LoopWrapper";
import ProductCard from "@/components/product/ProductCard";
import { useProductContext } from "src/contexts/ManagedProductContext";
import { scrollToRef } from "@/helpers/scroll-to-ref";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";
import useProductsQuery from "@/hooks/query/useProductsQuery";
import { useEffect, useRef } from "react";

interface ProductLoopProps {
    initialData: FormattedProducts;
}

const ProductLoop = ({ initialData }: ProductLoopProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setDivRef, divRef, query, setQuery } = useProductContext();
    const { data, isFetching } = useProductsQuery({ query, initialData });
    const update = useUpdateQuery();
    useEffect(() => {
        setDivRef(ref);
    }, [ref]);
    return (
        <LoopWrapper divRef={divRef} isFetching={isFetching}>
            <div className="shop-products-wrap" ref={ref}>
                <div className="row">
                    {data?.data.map((product) => (
                        <div
                            className="mb-4 col-xl-3 col-md-3 col-sm-6"
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                noItem={data?.data.length === 0 && !isFetching}
                page={query.page}
                count={data?.meta?.lastPage}
                onChange={(_, page) => {
                    scrollToRef(divRef);
                    const newQuery = { ...query, page };
                    update({ newQuery, setQuery });
                }}
            />
        </LoopWrapper>
    );
};

export default ProductLoop;
