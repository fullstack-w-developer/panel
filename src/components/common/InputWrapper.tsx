import clsx from "clsx";
import Alert from "@mui/material/Alert";
import { useTranslation } from "next-i18next";
import Collapse from "@mui/material/Collapse";

export type InputWrapperProps = {
    wrapperClass?: string;
    hasShadow?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    adornmentClass?: string;
    error?: any;
    errorMessage?: React.ReactNode;
};

const InputWrapper = ({
    error,
    errorMessage,
    wrapperClass = "w-full",
    hasShadow = undefined,
    endAdornment = undefined,
    startAdornment = undefined,
    adornmentClass = "",
    children,
}: InputWrapperProps & { children: React.ReactNode }) => {
    var adornmentClasses =
        "absolute transform -translate-y-1/2 block-start-1/2" +
        " " +
        adornmentClass;
    const { t } = useTranslation();
    return (
        <>
            <div className="relative w-full">
                <div
                    className={clsx(
                        wrapperClass + " rounded-md",
                        hasShadow && "shadow-primary"
                    )}
                >
                    {startAdornment && (
                        <div
                            className={clsx("inline-start-0", adornmentClasses)}
                        >
                            {startAdornment}
                        </div>
                    )}
                    {children}
                    {endAdornment && (
                        <div className={clsx("inline-end-0", adornmentClasses)}>
                            {endAdornment}
                        </div>
                    )}
                </div>
            </div>
            <Collapse in={!!error} className="!mt-0">
                <Alert severity="error" className="mt-4">
                    {errorMessage ? errorMessage : t("alerts.required")}
                </Alert>
            </Collapse>
        </>
    );
};

export default InputWrapper;
