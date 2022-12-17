import CheckboxItem from "@/components/global/CheckboxItem";
import { usePostContext } from "src/contexts/ManagedPostContext";
import { addOrRemoveQueryParam, checkDefaultChecked } from "@/helpers/utils";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";

interface PostTagsListProps {
    tags: PostTagResponse[];
}

const PostTagsList = ({ tags }: PostTagsListProps) => {
    const { query, setQuery } = usePostContext();
    const update = useUpdateQuery();
    return (
        <ul>
            {tags.map((tag) => (
                <CheckboxItem
                    key={tag.id}
                    defaultChecked={checkDefaultChecked(tag.id, query.tags)}
                    onChange={(_, checked) => {
                        const tags = addOrRemoveQueryParam(
                            tag.id,
                            query.tags,
                            checked
                        );
                        const newQuery = { ...query, tags, page: 1 };
                        update({ newQuery, setQuery });
                    }}
                >
                    {tag.name}
                </CheckboxItem>
            ))}
        </ul>
    );
};

export default PostTagsList;
