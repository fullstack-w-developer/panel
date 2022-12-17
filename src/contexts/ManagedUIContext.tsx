import { useRouter } from "next/router";
import {
    FC,
    createContext,
    useContext,
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
} from "react";

interface State {
    showGlobalSearch: boolean;
    setShowGlobalSearch: Dispatch<SetStateAction<boolean>>;
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    openAddressDialog: boolean;
    setOpenAddressDialog: Dispatch<SetStateAction<boolean>>;
}

const initialState: State = {
    showGlobalSearch: false,
    setShowGlobalSearch: () => {},
    menuOpen: false,
    setMenuOpen: () => {},
    openAddressDialog: false,
    setOpenAddressDialog: () => {},
};

const UIContext = createContext<State>(initialState);

UIContext.displayName = "UIContext";

export const useUIContext = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error(
            `useUIContext must be used within a UIContext.Provider`
        );
    }
    return context;
};

const ManagedUIContext: FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showGlobalSearch, setShowGlobalSearch] = useState(false);
    const [openAddressDialog, setOpenAddressDialog] = useState(false);
    const { pathname } = useRouter();
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <UIContext.Provider
            value={{
                showGlobalSearch,
                setShowGlobalSearch,
                menuOpen,
                setMenuOpen,
                openAddressDialog,
                setOpenAddressDialog,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

export default ManagedUIContext;
