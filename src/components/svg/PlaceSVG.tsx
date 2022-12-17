import clsx from "clsx";
import { SVGProps } from "react-html-props";

const PlaceSVG = ({ className, ...props }: SVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("w-full h-full fill-current", className)}
            viewBox="0 0 13.808 17.79"
            {...props}
        >
            <path d="M6.904 0a6.693 6.693 0 00-6.9 6.443c0 4.409 6.178 10.881 6.441 11.155a.652.652 0 00.925 0c.263-.273 6.441-6.746 6.441-11.155A6.693 6.693 0 006.904 0zm0 9.684a3.367 3.367 0 01-3.477-3.241 3.482 3.482 0 016.947 0 3.367 3.367 0 01-3.47 3.241z" />
        </svg>
    );
};

export default PlaceSVG;
