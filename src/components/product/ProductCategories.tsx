import Link from "next/link";

interface ProductCategoriesProps {
    categories: FormattedProductItem["categories"];
}

const ProductCategories = ({ categories }: ProductCategoriesProps) => {
    return (
        <ul>
            <li>
                <span>دسته بندی ها :</span>
                {categories.map((category, i) => (
                    <Link
                        key={category.id}
                        href={`/products?categories=${category.id}`}
                    >
                        <a>
                            {i > 0 && " , "}
                            {category.title}
                        </a>
                    </Link>
                ))}
            </li>
        </ul>
    );
};

export default ProductCategories;
