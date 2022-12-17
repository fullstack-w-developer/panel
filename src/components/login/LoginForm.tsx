import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import DialpadIcon from "@mui/icons-material/Dialpad";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import Button from "@/components/common/Button";
import AlertSnackbar from "@/components/common/AlertSnackbar";
import IconInput from "@/components/common/IconInput";
import { useTranslation } from "next-i18next";
import useLoginUserMutation from "@/hooks/mutations/useLoginUserMutation";
import SendCodeCounter from "@/components/login/SendCodeCounter";

const LoginForm = () => {
    const { t } = useTranslation("common", {
        keyPrefix: "login.form.login_form",
    });
    const {
        register,
        handleSubmit,
        reset: formReset,
    } = useForm<LoginFormData>();
    const { phone, setStep } = useAuthContext();
    const { mutate, isLoading, reset, isSuccess, isError, error } =
        useLoginUserMutation();
    return (
        <>
            <form
                onSubmit={handleSubmit((data) => {
                    mutate({
                        ...data,
                        phone,
                    });
                })}
                className="flex flex-col items-center justify-center h-full col-span-12 p-8 lg:col-span-7"
            >
                <strong className="pb-3 mx-auto mb-8 font-serif text-base border-b-2 border-tertiary-200">
                    {t("title")}
                </strong>
                <div className="flex flex-col items-center">
                    <label className="mb-4 text-center" htmlFor="code">
                        {t("code_label")}
                    </label>
                    <IconInput
                        placeholder={t("code_placeholder")}
                        type="tel"
                        id="code"
                        minLength={4}
                        maxLength={4}
                        {...register("code", {
                            required: {
                                message: t("code_required_error"),
                                value: true,
                            },
                        })}
                        icon={<DialpadIcon color="primary" />}
                    />
                    <SendCodeCounter />
                    <div className="flex items-center my-7 space-i-4">
                        <Button
                            variant="outlined"
                            startIcon={
                                <ArrowForwardIcon
                                    className="icon"
                                    fontSize="small"
                                />
                            }
                            onClick={() => {
                                setStep("send_code");
                                reset();
                                formReset();
                            }}
                            disabled={isLoading}
                        >
                            {t("back")}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            loading={isLoading}
                            endIcon={
                                <ArrowBackIcon
                                    className="icon"
                                    fontSize="small"
                                />
                            }
                        >
                            {t("submit")}
                        </Button>
                    </div>
                </div>
                <AlertSnackbar open={isError}>
                    {(error as AxiosError)?.response?.data.message}
                </AlertSnackbar>
                <AlertSnackbar severity="success" open={isSuccess}>
                    {t("success")}
                </AlertSnackbar>
            </form>
        </>
    );
};

export default LoginForm;
