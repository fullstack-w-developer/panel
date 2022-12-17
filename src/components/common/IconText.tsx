import clsx from "clsx";
import React from "react";
import { DivProps } from "react-html-props";

interface IconTextProps extends DivProps {
    icon: any;
}

const IconText = ({ icon, className, children, ...props }: IconTextProps) => {
    return (
        <div
            className={clsx("grid grid-cols-[auto,1fr] gap-2", className)}
            {...props}
        >
            <span className="w-5 h-5">
                {React.createElement(icon, { className: "text-primary-main" })}
            </span>
            <span className="line-clamp-1">{children}</span>
        </div>
    );
};

export default IconText;
