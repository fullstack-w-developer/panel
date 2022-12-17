import Portal from "@mui/material/Portal";
import clsx from "clsx";
import Loader from "react-loaders";

interface OverlayLoaderProps {
    active: boolean;
}

const OverlayLoader = ({ active }: OverlayLoaderProps) => {
    return (
        <Portal>
            <div
                className={clsx(
                    "fixed top-0 z-10 flex items-center justify-center transition-all w-full h-full bg-gray-50 bg-opacity-75",
                    active ? "opacity-100 visible" : "invisible opacity-0"
                )}
            >
                <Loader active={active} type="ball-pulse" />
            </div>
        </Portal>
    );
};

export default OverlayLoader;
