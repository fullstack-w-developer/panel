import CheckboxItem from "@/components/global/CheckboxItem";
import { useProductContext } from "src/contexts/ManagedProductContext";
import { addOrRemoveQueryParam, checkDefaultChecked } from "@/helpers/utils";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";

interface ProductCategoriesListProps {
    categories: ProductCategoryResponse[];
}

const ProductCategoriesList = ({ categories }: ProductCategoriesListProps) => {
    const { query, setQuery } = useProductContext();
    const update = useUpdateQuery();
    return (
        <ul>
            {categories.map((category) => (
                <CheckboxItem
                    key={category.id}
                    defaultChecked={checkDefaultChecked(
                        category.id,
                        query.categories
                    )}
                    onChange={(_, checked) => {
                        const categories = addOrRemoveQueryParam(
                            category.id,
                            query.categories,
                            checked
                        );
                        const newQuery = { ...query, categories, page: 1 };
                        update({ newQuery, setQuery });
                    }}
                >
                    {category.title}
                </CheckboxItem>
            ))}
        </ul>
    );
};

export default ProductCategoriesList;
