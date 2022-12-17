import { useState } from "react";
import { useDebounce } from "use-debounce";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import GlobalSearchResults from "@/components/global/GlobalSearchResults";
import { useUIContext } from "src/contexts/ManagedUIContext";
import { useRouter } from "next/router";

const GlobalSearchForm = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [debouncedValue] = useDebounce(value, 300);
    const { setShowGlobalSearch } = useUIContext();
    const { push } = useRouter();
    return (
        <ClickAwayListener onClickAway={() => setShowGlobalSearch(false)}>
            <div className="relative !mb-0 header-search-wrap">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        push({ pathname: "/products", query: { q: value } });
                    }}
                >
                    <input
                        placeholder="جستجوی محصول مورد نظر..."
                        className="pie-14"
                        type="search"
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setShowGlobalSearch(true)}
                    />
                    <button>
                        <i className="flaticon-loupe-1" />
                    </button>
                </form>

                <GlobalSearchResults value={debouncedValue} />
            </div>
        </ClickAwayListener>
    );
};

export default GlobalSearchForm;
