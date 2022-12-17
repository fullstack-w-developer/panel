import CheckboxItem from "@/components/global/CheckboxItem";
import { usePostContext } from "src/contexts/ManagedPostContext";
import { addOrRemoveQueryParam, checkDefaultChecked } from "@/helpers/utils";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";

interface PostCategoriesListProps {
    categories: PostCategoryResponse[];
}

const PostCategoriesList = ({ categories }: PostCategoriesListProps) => {
    const { query, setQuery } = usePostContext();
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

export default PostCategoriesList;
