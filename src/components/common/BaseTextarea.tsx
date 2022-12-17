import { TextAreaProps as HTMLTextAreaProps } from "react-html-props";

import InputWrapper, {
    InputWrapperProps,
} from "@/components/common/InputWrapper";
import useInputClassNames from "@/hooks/common/useInputClassNames";
import React from "react";

type TextAreaProps = HTMLTextAreaProps &
    InputWrapperProps & {
        label?: React.ReactNode;
        hasBorder?: boolean;
        color?: "gray" | "white" | "lightgray";
        children?: string;
    };

const BaseTextarea = React.forwardRef(
    (
        {
            id,
            label,
            wrapperClass = "w-full",
            disabled,
            className = "",
            color = "white",
            hasShadow = undefined,
            hasBorder = true,
            endAdornment = undefined,
            startAdornment = undefined,
            adornmentClass = "",
            error,
            errorMessage,
            children,
            ...rest
        }: TextAreaProps,
        ref: React.ForwardedRef<HTMLTextAreaElement>
    ) => {
        const classes = useInputClassNames({
            color,
            hasBorder,
            startAdornment,
            endAdornment,
            disabled,
            className,
        });
        return (
            <InputWrapper
                hasShadow={hasShadow}
                wrapperClass={wrapperClass}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                adornmentClass={adornmentClass}
                error={error}
                errorMessage={errorMessage}
            >
                {label && (
                    <label className="block mb-3 font-bold" htmlFor={id}>
                        {label}
                    </label>
                )}
                <textarea
                    id={id}
                    disabled={disabled}
                    className={classes}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </textarea>
            </InputWrapper>
        );
    }
);

export default BaseTextarea;
