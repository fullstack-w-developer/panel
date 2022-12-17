import {
    createContext,
    Dispatch,
    LegacyRef,
    SetStateAction,
    useContext,
    useState,
} from "react";

type Meta = {
    from: number;
    to: number;
    total: number;
};

interface State {
    meta: Meta;
    setMeta: Dispatch<React.SetStateAction<Meta>>;
    query: QueryParams;
    setQuery: Dispatch<React.SetStateAction<QueryParams>>;
    divRef: LegacyRef<HTMLDivElement>;
    setDivRef: Dispatch<SetStateAction<LegacyRef<HTMLDivElement>>>;
}

const initialState: State = {
    meta: { from: 0, to: 0, total: 0 },
    setMeta: () => {},
    query: {},
    setQuery: () => {},
    divRef: null,
    setDivRef: () => {},
};

export const ProductContext = createContext<State>(initialState);

export const useProductContext = () => {
    const context = useContext<State>(ProductContext);
    if (context === undefined) {
        throw new Error(
            `useProductContext must be used within a ProductContext.Provider`
        );
    }
    return context;
};

interface ManagedProductContextProps {
    initialQuery?: QueryParams;
    initialMeta: Meta;
    children?: React.ReactNode;
}

const ManagedProductContext = ({
    children,
    initialMeta,
    initialQuery = {},
}: ManagedProductContextProps) => {
    const [divRef, setDivRef] = useState<LegacyRef<HTMLDivElement>>(null);
    const [meta, setMeta] = useState(initialMeta);
    const [query, setQuery] = useState<QueryParams>({
        page: initialQuery.page ? +initialQuery.page : 1,
        order: initialQuery.order ?? "desc",
        sort: initialQuery.sort ?? "id",
        categories: initialQuery.categories ?? "",
        price_gte: initialQuery.price_gte ?? 0,
        price_lte: initialQuery.price_lte ?? 2000000,
        q: initialQuery.q ?? "",
    });
    return (
        <ProductContext.Provider
            value={{
                meta,
                setMeta,
                divRef,
                setDivRef,
                query,
                setQuery,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ManagedProductContext;
