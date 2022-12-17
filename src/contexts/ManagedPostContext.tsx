import {
    createContext,
    Dispatch,
    LegacyRef,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface State {
    query: QueryParams;
    setQuery: Dispatch<React.SetStateAction<QueryParams>>;
    divRef: LegacyRef<HTMLDivElement>;
    setDivRef: Dispatch<SetStateAction<LegacyRef<HTMLDivElement>>>;
}

const initialState: State = {
    query: {},
    setQuery: () => {},
    divRef: null,
    setDivRef: () => {},
};

export const PostContext = createContext<State>(initialState);

export const usePostContext = () => {
    const context = useContext<State>(PostContext);
    if (context === undefined) {
        throw new Error(
            `usePostContext must be used within a PostContext.Provider`
        );
    }
    return context;
};

interface ManagedPostContextProps {
    initialQuery?: QueryParams;
    children?: React.ReactNode;
}

const ManagedPostContext = ({
    children,
    initialQuery = {},
}: ManagedPostContextProps) => {
    const [divRef, setDivRef] = useState<LegacyRef<HTMLDivElement>>(null);
    const [query, setQuery] = useState<QueryParams>({
        page: initialQuery.page ? +initialQuery.page : 1,
        order: initialQuery.order ?? "desc",
        sort: initialQuery.sort ?? "id",
        categories: initialQuery.categories ?? "",
        tags: initialQuery.tags ?? "",
    });
    return (
        <PostContext.Provider
            value={{
                divRef,
                setDivRef,
                query,
                setQuery,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export default ManagedPostContext;
