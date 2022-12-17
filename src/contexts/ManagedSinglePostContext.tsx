import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

interface State {
    post: FormattedSinglePost;
    setPost: Dispatch<SetStateAction<FormattedSinglePost>>;
}

const initialState: State = {
    //@ts-ignore
    post: {},
    setPost: () => {},
};

export const SinglePostContext = createContext<State>(initialState);

export const useSinglePostContext = () => {
    const context = useContext<State>(SinglePostContext);
    if (context === undefined) {
        throw new Error(
            `useSinglePostContext must be used within a SinglePostContext.Provider`
        );
    }
    return context;
};

interface ManagedSinglePostContextProps {
    initialPost: FormattedSinglePost;
    children?: React.ReactNode;
}

const ManagedSinglePostContext = ({
    children,
    initialPost,
}: ManagedSinglePostContextProps) => {
    const [post, setPost] = useState(initialPost);
    useEffect(() => {
        setPost(initialPost);
    }, [initialPost]);
    return (
        <SinglePostContext.Provider value={{ post, setPost }}>
            {children}
        </SinglePostContext.Provider>
    );
};

export default ManagedSinglePostContext;
