import useVerifyAuth from "@/hooks/global/useVerifyAuth";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type Step = "send_code" | "login";

interface State {
    step: Step;
    setStep: Dispatch<SetStateAction<Step>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    userFavorites: FormattedFavoriteProdcuts;
    setUserFavorites: Dispatch<SetStateAction<FormattedFavoriteProdcuts>>;
    user: UserResponse | null;
    setUser: Dispatch<SetStateAction<UserResponse | null>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const initialState: State = {
    step: "send_code",
    setStep: () => {},
    phone: "",
    setPhone: () => {},
    userFavorites: [],
    setUserFavorites: () => {},
    user: null,
    setUser: () => {},
    isLoading: false,
    setIsLoading: () => {},
};

export const AuthContext = createContext<State>(initialState);

export const useAuthContext = () => {
    const context = useContext<State>(AuthContext);
    if (context === undefined) {
        throw new Error(
            `useAuthContext must be used within a AuthContext.Provider`
        );
    }
    return context;
};

interface ManagedAuthContextProps {
    children?: React.ReactNode;
}

const ManagedAuthContext = ({ children }: ManagedAuthContextProps) => {
    const [step, setStep] = useState<Step>("send_code");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState<UserResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userFavorites, setUserFavorites] =
        useState<FormattedFavoriteProdcuts>([]);
    useVerifyAuth(setIsLoading, setUser, setUserFavorites);
    return (
        <AuthContext.Provider
            value={{
                userFavorites,
                setUserFavorites,
                step,
                setStep,
                phone,
                setPhone,
                user,
                setUser,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default ManagedAuthContext;
