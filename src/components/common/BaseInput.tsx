import { InputProps as HTMLInputProps } from "react-html-props";

import InputWrapper, {
    InputWrapperProps,
} from "@/components/common/InputWrapper";
import useInputClassNames from "@/hooks/common/useInputClassNames";
import React from "react";

export type InputProps = HTMLInputProps &
    InputWrapperProps & {
        label?: React.ReactNode;
        hasBorder?: boolean;
        color?: "gray" | "white" | "lightgray";
    };

const BaseInput = React.forwardRef(
    (
        {
            label,
            id,
            wrapperClass = "w-full",
            disabled,
            className = "",
            color = "white",
            hasShadow = undefined,
            hasBorder = true,
            endAdornment = undefined,
            startAdornment = undefined,
            adornmentClass = "",
            type = "text",
            error,
            errorMessage,
            ...rest
        }: InputProps,
        ref: React.ForwardedRef<HTMLInputElement>
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
                <input
                    id={id}
                    disabled={disabled}
                    className={classes}
                    type={type}
                    ref={ref}
                    {...rest}
                />
            </InputWrapper>
        );
    }
);

export default BaseInput;
