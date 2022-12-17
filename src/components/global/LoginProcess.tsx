import clsx from "clsx";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import LoginForm from "@/components/login/LoginForm";
import SendCodeForm from "@/components/login/SendCodeForm";
import { useAuthContext } from "src/contexts/ManagedAuthContext";

interface LoginProcessProps {
    title?: React.ReactNode;
}

const LoginProcess = ({ title }: LoginProcessProps) => {
    const { step } = useAuthContext();
    const [show, setShow] = useState(false);

    useEffect(() => {
        // This will prevent flash of content change
        const timer = setTimeout(() => {
            setShow(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={clsx(
                "transition-all",
                !show ? "invisible opacity-0" : "visible opacity-100"
            )}
        >
            <Collapse in={step === "send_code"}>
                <SendCodeForm title={title} />
            </Collapse>
            <Collapse in={step === "login"}>
                <LoginForm />
            </Collapse>
        </div>
    );
};

export default LoginProcess;
