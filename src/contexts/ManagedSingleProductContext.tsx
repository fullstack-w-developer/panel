import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

interface State {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    price: number;
    setPrice: Dispatch<SetStateAction<number>>;
    product: FormattedSingleProduct;
    setProduct: Dispatch<SetStateAction<FormattedSingleProduct>>;
}

const initialState: State = {
    count: 1,
    setCount: () => {},
    price: 0,
    setPrice: () => {},
    //@ts-ignore
    product: {},
    setProduct: () => {},
};

export const SingleProductContext = createContext<State>(initialState);

export const useSingleProductContext = () => {
    const context = useContext<State>(SingleProductContext);
    if (context === undefined) {
        throw new Error(
            `useSingleProductContext must be used within a SingleProductContext.Provider`
        );
    }
    return context;
};

interface ManagedSingleProductContextProps {
    initialProduct: FormattedSingleProduct;
    children?: React.ReactNode;
}

const ManagedSingleProductContext = ({
    children,
    initialProduct,
}: ManagedSingleProductContextProps) => {
    const [price, setPrice] = useState(initialProduct.price);
    const [product, setProduct] = useState(initialProduct);
    const [count, setCount] = useState(1);
    useEffect(() => {
        setProduct(initialProduct);
        setCount(1);
        setPrice(initialProduct.price);
    }, [initialProduct]);
    return (
        <SingleProductContext.Provider
            value={{
                count,
                setCount,
                price,
                setPrice,
                product,
                setProduct,
            }}
        >
            {children}
        </SingleProductContext.Provider>
    );
};

export default ManagedSingleProductContext;
