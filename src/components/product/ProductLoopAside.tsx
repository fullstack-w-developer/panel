import ScrollbarContent from "@/components/common/ScrollbarContent";
import ShopWidget from "@/components/global/ShopWidget";
import ProductCategoriesList from "@/components/product/ProductCategoriesList";
import ProductPriceRange from "@/components/product/ProductPriceRange";
import ProductSmall from "@/components/product/ProductSmall";

interface ProductLoopAsideProps {
    categories: ProductCategoryResponse[];
    sideProducts: FormattedProductItem[];
}

const ProductLoopAside = ({
    categories,
    sideProducts,
}: ProductLoopAsideProps) => {
    return (
        <div className="order-2 col-3 order-lg-0">
            <aside className="shop-sidebar">
                <ShopWidget heading="دسته بندی محصولات">
                    <ScrollbarContent>
                        <ProductCategoriesList categories={categories} />
                    </ScrollbarContent>
                </ShopWidget>
                <ShopWidget heading="محدودیت قیمت">
                    <ProductPriceRange />
                </ShopWidget>
                <ShopWidget heading="محصولات جدید">
                    <div className="sidebar-product-list">
                        <ul>
                            {sideProducts.map((product) => (
                                <ProductSmall
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </ul>
                    </div>
                </ShopWidget>
            </aside>
        </div>
    );
};

export default ProductLoopAside;
