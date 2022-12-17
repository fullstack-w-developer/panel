import clsx from "clsx";
import { SVGProps } from "react-html-props";

const UserSVG = ({ className, ...props }: SVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("w-full h-full fill-current", className)}
            viewBox="0 0 14.352 19.145"
            {...props}
        >
            <path d="M4.562 9.451a5.389 5.389 0 005.233 0 7.174 7.174 0 014.557 6.679v.306a10.853 10.853 0 01-14.352 0v-.3a7.177 7.177 0 014.562-6.685zM7.178 0a4.724 4.724 0 11-4.724 4.724A4.724 4.724 0 017.178 0z" />
        </svg>
    );
};

export default UserSVG;
