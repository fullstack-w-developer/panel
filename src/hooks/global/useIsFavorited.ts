import { useAuthContext } from "@/contexts/ManagedAuthContext";

const checkFavoriteItem = (
    data: FormattedFavoriteProdcuts,
    favorited: string | number
) => {
    const found = data.find(({ id }) => favorited === id);
    return found ? true : false;
};

const useIsFavorited = (
    favorited: string | number,
    data?: FormattedFavoriteProdcuts
) => {
    const { user, userFavorites } = useAuthContext();
    if (data) {
        return checkFavoriteItem(data, favorited);
    }
    if (userFavorites && user) {
        return checkFavoriteItem(userFavorites, favorited);
    }
    return false;
};

export default useIsFavorited;
