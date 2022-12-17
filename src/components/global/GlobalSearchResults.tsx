import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import useProductsSearchQuery from "@/hooks/query/useProductsSearchQuery";
import { useUIContext } from "src/contexts/ManagedUIContext";
import Price from "@/components/common/Price";
import { getProductLink } from "@/helpers/utils";

interface GlobalSearchResultsProps {
    value?: string;
}

const GlobalSearchResults = ({ value }: GlobalSearchResultsProps) => {
    const { push } = useRouter();
    const { t } = useTranslation();
    const { data, isLoading } = useProductsSearchQuery({ value });
    const { setShowGlobalSearch, showGlobalSearch } = useUIContext();
    return (
        <div
            className={clsx(
                "absolute z-30 w-full h-40 p-4 overflow-auto bg-white transition-all shadow-lg rounded-bl-md rounded-br-md",
                showGlobalSearch
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-5 opacity-0"
            )}
            style={{ top: "calc(100% + 2px)" }}
        >
            {!data && !isLoading && (
                <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
                    <SearchIcon className="text-5xl opacity-20" />
                    <span className="text-sm font-light">
                        {t("search_hint")}
                    </span>
                </div>
            )}
            {data && data.data.length === 0 && (
                <div className="flex items-center justify-center w-full h-full">
                    <span className="text-sm font-light">
                        {t("no_results")}
                    </span>
                </div>
            )}
            <div>
                {data?.data.map(({ title, price, slug, image }, i) => (
                    <button
                        key={i}
                        className="flex items-center justify-between w-full p-2 text-sm text-black transition duration-75 rounded-md cursor-pointer text-start group hover:bg-gray-100 hover:bg-opacity-40"
                        onClick={() => {
                            push({ pathname: getProductLink(slug) });
                            setShowGlobalSearch(false);
                        }}
                    >
                        <div className="flex flex-col space-y-1">
                            <strong>{title}</strong>
                            <Price price={price} className="italic" />
                        </div>
                        <img
                            src={image}
                            className="!object-contain w-10 h-10 border rounded-md group-hover:border-gray-300"
                        />
                    </button>
                ))}
            </div>
            {isLoading && (
                <div className="flex items-center justify-center w-full h-full">
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default GlobalSearchResults;
