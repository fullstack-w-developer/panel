import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type BarcodeProduct = CheckBarcodeSuccessResponse["data"]["product"];

interface State {
    product: BarcodeProduct | null;
    setProduct: Dispatch<SetStateAction<BarcodeProduct | null>>;
}

const initialState: State = {
    product: null,
    setProduct: () => {},
};

export const BarcodeContext = createContext<State>(initialState);

export const useBarcodeContext = () => {
    const context = useContext<State>(BarcodeContext);
    if (context === undefined) {
        throw new Error(
            `useBarcodeContext must be used within a BarcodeContext.Provider`
        );
    }
    return context;
};

interface ManagedBarcodeContextProps {
    children?: React.ReactNode;
}

const ManagedBarcodeContext = ({ children }: ManagedBarcodeContextProps) => {
    const [product, setProduct] = useState<BarcodeProduct | null>(null);
    return (
        <BarcodeContext.Provider
            value={{
                product,
                setProduct,
            }}
        >
            {children}
        </BarcodeContext.Provider>
    );
};

export default ManagedBarcodeContext;
