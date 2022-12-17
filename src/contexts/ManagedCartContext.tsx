import { findCartItem, findCartItemIndex } from "@/helpers/cart";
import useLocalStorage from "@/hooks/common/useLocalStorage";
import produce from "immer";
import {
    createContext,
    FC,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from "react";

type CartStep = number;
interface State {
    cartItems: CartItem[];

    cartItemsSum: number;
    cartItemsDiscount: number;
    cartTotal: number;
    cartShipping: number;
    discountAmountByCode: number;
    discountPercentByCode: number;

    address: UserAddress | null;
    setAddress: (address: UserAddress) => void;
    cartStep: CartStep;
    setCartStep: (step: CartStep) => void;
    addCartItem: (cartItem: CartItem) => void;
    setNewCartState: (state: State) => void;
    updateCartItem: (cartItem: CartItem) => void;
    removeCartItem: (cartItem: CartItem) => void;
    removeDiscountCode: () => void;
}

const initialState: State = {
    cartItems: [],

    cartItemsSum: 0,
    cartItemsDiscount: 0,
    cartTotal: 0,
    cartShipping: 0,
    discountAmountByCode: 0,
    discountPercentByCode: 0,

    address: null,
    setAddress: () => {},
    cartStep: 1,
    setCartStep: () => {},
    addCartItem: () => {},
    setNewCartState: () => {},
    updateCartItem: () => {},
    removeCartItem: () => {},
    removeDiscountCode: () => {},
};

const CartContext = createContext<State>(initialState);

CartContext.displayName = "CartContext";

type Action =
    | {
          type: "REMOVE_DISCOUNT_CODE";
      }
    | {
          type: "ADD_TO_CART";
          payload: CartItem;
      }
    | {
          type: "REMOVE_CART_ITEM";
          payload: CartItem;
      }
    | {
          type: "UPDATE_COUNT";
          payload: CartItem;
      }
    | {
          type: "SET_ADDRESS";
          payload: UserAddress;
      }
    | {
          type: "SET_NEW_STATE";
          payload: State;
      }
    | {
          type: "SET_CART_STEP";
          payload: CartStep;
      };

const calculateAndUpdateCart = (state: State) => {
    let discount = 0;
    let sum = 0;
    state.cartItems.forEach(({ product, count }) => {
        discount += product.offPrice * count;
        sum += product.oldPrice * count;
    });
    let total = sum - discount + state.cartShipping;
    let discountAmountByCode = state.discountAmountByCode;
    if (state.discountPercentByCode > 0) {
        discountAmountByCode = Math.round(
            total * (state.discountPercentByCode / 100)
        );
    }

    state.discountAmountByCode = discountAmountByCode;
    state.cartItemsDiscount = discount;
    state.cartItemsSum = sum;
    state.cartTotal = total - discountAmountByCode;
};

const cartReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_CART_STEP":
            return {
                ...state,
                cartStep: action.payload,
            };
        case "SET_NEW_STATE":
            return {
                ...action.payload,
            };
        case "REMOVE_DISCOUNT_CODE":
            return produce(state, (draft) => {
                draft.discountAmountByCode = 0;
                draft.discountPercentByCode = 0;
                calculateAndUpdateCart(draft);
            });
        case "SET_ADDRESS":
            return {
                ...state,
                address: action.payload,
            };
        case "UPDATE_COUNT":
            return produce(state, (draft) => {
                const payload = action.payload;
                const { cartItems } = draft;
                const found = findCartItem(cartItems, payload.product.id);
                if (found) found.count = payload.count;
                calculateAndUpdateCart(draft);
            });
        case "REMOVE_CART_ITEM":
            return produce(state, (draft) => {
                const payload = action.payload;
                const { cartItems } = draft;
                const index = findCartItemIndex(cartItems, payload.product.id);
                if (index > -1) {
                    cartItems.splice(index, 1);
                }
                calculateAndUpdateCart(draft);
            });
        case "ADD_TO_CART":
            return produce(state, (draft) => {
                const payload = action.payload;
                const { cartItems } = draft;
                const found = findCartItem(cartItems, payload.product.id);

                if (found) {
                    found.count = found.count + payload.count;
                } else {
                    cartItems.push(payload);
                }
                calculateAndUpdateCart(draft);
            });
    }
};

const initializer = (initialValue = initialState) => {
    if (!(typeof window === "undefined")) {
        const localCart = localStorage.getItem("localCart");
        if (localCart) {
            return JSON.parse(localCart);
        }
        return initialValue;
    }
    return initialValue;
};

const CartProvider: FC = (props) => {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState,
        initializer
    );

    const removeDiscountCode = () => dispatch({ type: "REMOVE_DISCOUNT_CODE" });

    const setAddress = (payload: UserAddress) =>
        dispatch({ type: "SET_ADDRESS", payload });

    const addCartItem = (payload: CartItem) =>
        dispatch({ type: "ADD_TO_CART", payload });

    const setNewCartState = (payload: State) =>
        dispatch({ type: "SET_NEW_STATE", payload });

    const setCartStep = (payload: CartStep) =>
        dispatch({ type: "SET_CART_STEP", payload });

    const updateCartItem = (payload: CartItem) =>
        dispatch({ type: "UPDATE_COUNT", payload });

    const removeCartItem = (payload: CartItem) =>
        dispatch({ type: "REMOVE_CART_ITEM", payload });

    const [, setLocalCart] = useLocalStorage<State>("localCart", initialState);

    useEffect(() => {
        setLocalCart(state);
    }, [state]);

    const handleStorageChange = () => {
        if (!(typeof window === "undefined")) {
            const newStateString = localStorage.getItem("localCart");
            if (newStateString) {
                const newState: State = JSON.parse(newStateString);
                setNewCartState(newState);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const value = useMemo(
        () => ({
            ...state,
            setCartStep,
            addCartItem,
            setNewCartState,
            updateCartItem,
            removeCartItem,
            setAddress,
            removeDiscountCode,
        }),
        [state]
    );

    return <CartContext.Provider value={value} {...props} />;
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error(
            `useCartContext must be used within a CartContext.Provider`
        );
    }
    return context;
};

const ManagedCartContext: FC = ({ children }) => {
    return <CartProvider>{children}</CartProvider>;
};

export default ManagedCartContext;
