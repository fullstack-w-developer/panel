import clsx from "clsx";
import { Fragment } from "react";
import Countdown, { CountdownProps } from "react-countdown";
import { useTranslation } from "react-i18next";
import { FormattedNumber } from "react-intl";

const Timer = ({ seconds, minutes }: any) => {
    return (
        <Fragment>
            <span>
                <FormattedNumber value={minutes} />
            </span>
            :
            <span>
                <FormattedNumber value={seconds} />
            </span>
        </Fragment>
    );
};

const ValidationCountdown = ({ className, ...props }: CountdownProps) => {
    const { t } = useTranslation();
    return (
        <Countdown
            renderer={({ completed, minutes, seconds }) => {
                return (
                    <div className={clsx("flex space-i-4", className)}>
                        <span>{t("valid_time")} :</span>
                        <div>
                            {!completed ? (
                                <Timer seconds={seconds} minutes={minutes} />
                            ) : (
                                <span>{t("expired")}</span>
                            )}
                        </div>
                    </div>
                );
            }}
            {...props}
        />
    );
};

export default ValidationCountdown;
