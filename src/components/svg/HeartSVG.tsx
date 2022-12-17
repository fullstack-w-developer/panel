import clsx from "clsx";
import { SVGProps } from "react-html-props";

const HeartSVG = ({ className, ...props }: SVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("w-full h-full fill-current", className)}
            viewBox="0 0 18.695 16.632"
            {...props}
        >
            <path d="M17.212 1.628A5.027 5.027 0 0013.473 0a4.7 4.7 0 00-2.937 1.014 6.01 6.01 0 00-1.188 1.24 6.006 6.006 0 00-1.188-1.24A4.7 4.7 0 005.223 0a5.027 5.027 0 00-3.74 1.628A5.844 5.844 0 000 5.618a6.958 6.958 0 001.854 4.555A39.538 39.538 0 006.5 14.53c.643.548 1.372 1.169 2.129 1.831a1.1 1.1 0 001.445 0c.757-.662 1.486-1.284 2.13-1.832a39.516 39.516 0 004.641-4.356A6.958 6.958 0 0018.7 5.618a5.843 5.843 0 00-1.483-3.99zm0 0" />
        </svg>
    );
};

export default HeartSVG;
