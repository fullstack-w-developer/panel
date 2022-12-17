import AlertSnackbar from "@/components/common/AlertSnackbar";
import { useSingleProductContext } from "@/contexts/ManagedSingleProductContext";
import useAddToFavorite from "@/hooks/global/useAddToFavorite";
import useIsFavorited from "@/hooks/global/useIsFavorited";
import CircularProgress from "@mui/material/CircularProgress";
import { Fragment } from "react";

const ProductAddToFavorite = () => {
    const { product } = useSingleProductContext();
    const { data, isSuccess, mutate, isLoading } = useAddToFavorite();
    const isFavorited = useIsFavorited(product.id, data?.data);
    return (
        <Fragment>
            <button
                onClick={() => mutate(product.id)}
                disabled={isLoading}
                className="flex items-center gap-2 text-primary-main"
                type="button"
            >
                {isLoading ? (
                    <CircularProgress size={15} />
                ) : (
                    <i className={`${isFavorited ? "fas" : "far"} fa-heart`} />
                )}
                <span>افزودن به علاقه مندیها</span>
            </button>
            {isSuccess && (
                <AlertSnackbar open={isSuccess} severity="success">
                    {data?.message}
                </AlertSnackbar>
            )}
        </Fragment>
    );
};

export default ProductAddToFavorite;
