import {
    createContext,
    Dispatch,
    LegacyRef,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface State {
    activeProvince: string;
    setActiveProvince: Dispatch<React.SetStateAction<string>>;
    query: QueryParams;
    setQuery: Dispatch<React.SetStateAction<QueryParams>>;
    divRef: LegacyRef<HTMLDivElement>;
    setDivRef: Dispatch<SetStateAction<LegacyRef<HTMLDivElement>>>;
}

const initialState: State = {
    activeProvince: "",
    setActiveProvince: () => {},
    query: {},
    setQuery: () => {},
    divRef: null,
    setDivRef: () => {},
};

export const AgencyContext = createContext<State>(initialState);

export const useAgencyContext = () => {
    const context = useContext<State>(AgencyContext);
    if (context === undefined) {
        throw new Error(
            `useAgencyContext must be used within a AgencyContext.Provider`
        );
    }
    return context;
};

interface ManagedAgencyContextProps {
    initialQuery?: QueryParams;
    children?: React.ReactNode;
}

const ManagedAgencyContext = ({
    children,
    initialQuery = {},
}: ManagedAgencyContextProps) => {
    const [activeProvince, setActiveProvince] = useState("");
    const [divRef, setDivRef] = useState<LegacyRef<HTMLDivElement>>(null);
    const [query, setQuery] = useState<QueryParams>({
        page: initialQuery.page ? +initialQuery.page : 1,
        province_id: initialQuery.province_id ?? "",
    });
    return (
        <AgencyContext.Provider
            value={{
                activeProvince,
                setActiveProvince,
                divRef,
                setDivRef,
                query,
                setQuery,
            }}
        >
            {children}
        </AgencyContext.Provider>
    );
};

export default ManagedAgencyContext;
