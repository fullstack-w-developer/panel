import { Fragment, useEffect, useState } from "react";
import ValidationCountdown from "@/components/global/ValidationCountdown";
import { useAuthContext } from "src/contexts/ManagedAuthContext";

const SendCodeCounter = () => {
    const amountOfTime = 2 * 60 * 1000;
    const [validDate, setValidDate] = useState(Date.now() + amountOfTime);

    const { step } = useAuthContext();
    useEffect(() => {
        if (step === "login") {
            setValidDate(Date.now() + amountOfTime);
        }
    }, [step]);

    return (
        <Fragment>
            <ValidationCountdown
                className="text-sm !mt-5"
                date={validDate}
                key={validDate}
            />
        </Fragment>
    );
};

export default SendCodeCounter;
