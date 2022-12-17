import Select from "@/components/common/Select";
import { useProductContext } from "src/contexts/ManagedProductContext";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "next-i18next";
import { useState } from "react";

type SortValue = 0 | 1 | 2 | 3;

const sortItems = [
    { label: "newest", sort: "id", order: "desc", id: 0 },
    { label: "oldest", sort: "id", order: "asc", id: 1 },
    { label: "cheapest", sort: "price", order: "asc", id: 2 },
    { label: "most_expensive", sort: "price", order: "desc", id: 3 },
] as const;

const mapSortOrderToId = (sort: string, order: string) => {
    const found = sortItems.find((item) => {
        return item.sort === sort && item.order === order;
    });
    return found ? found.id : 0;
};

const ProductSort = () => {
    const { query, setQuery } = useProductContext();
    const update = useUpdateQuery();
    const [value, setValue] = useState<SortValue>(
        mapSortOrderToId(query.sort as string, query.order as string)
    );
    const { t } = useTranslation("common", { keyPrefix: "sort" });
    return (
        <div className="flex items-center space-i-2">
            <span>مرتب سازی بر اساس:</span>
            <Select
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value as unknown as SortValue;
                    const item = sortItems.find(({ id }) => id === newValue);
                    if (item) {
                        const { sort, order } = item;
                        const newQuery = { ...query, sort, order, page: 1 };
                        setValue(newValue);
                        update({ newQuery, setQuery });
                    }
                }}
            >
                {sortItems.map(({ label }, i) => (
                    <MenuItem key={label} value={i}>
                        {t(label)}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default ProductSort;
