import { useState } from "react";
import Button from "@/components/common/Button";
import Slider from "@mui/material/Slider";
import { useProductContext } from "src/contexts/ManagedProductContext";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";
import Price from "@/components/common/Price";
import { useIntl } from "react-intl";

const ProductPriceRange = () => {
    const { formatNumber } = useIntl();
    const { query, setQuery } = useProductContext();
    const [value, setValue] = useState<number[]>([
        query.price_gte,
        query.price_lte,
    ]);
    const update = useUpdateQuery();
    return (
        <div className="px-2 !mt-12">
            <div className="px-2">
                <Slider
                    valueLabelDisplay="auto"
                    valueLabelFormat={(x) => formatNumber(x)}
                    min={0}
                    max={2000000}
                    step={1000}
                    value={value}
                    onChange={(_, newValue) => setValue(newValue as number[])}
                />
            </div>
            <div className="flex items-center justify-between mb-8 text-xs">
                <Price price={value[0]} />
                <Price price={value[1]} />
            </div>
            <Button
                onClick={() => {
                    const price_gte = value[0];
                    const price_lte = value[1];
                    const newQuery = {
                        ...query,
                        price_gte,
                        price_lte,
                        page: 1,
                    };
                    update({ newQuery, setQuery });
                }}
                variant="contained"
                color="primary"
                fullWidth
            >
                اعمال فیلتر قیمت
            </Button>
        </div>
    );
};

export default ProductPriceRange;
