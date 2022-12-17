import { useTranslation } from "next-i18next";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import PhoneIcon from "@mui/icons-material/Phone";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import AlertSnackbar from "@/components/common/AlertSnackbar";
import IconInput from "@/components/common/IconInput";
import Button from "@/components/common/Button";
import useSendCodeMutation from "@/hooks/mutations/useSendCodeMutation";

interface SendCodeFormProps {
    title?: React.ReactNode;
}

const SendCodeForm = ({ title }: SendCodeFormProps) => {
    const { t } = useTranslation("common", {
        keyPrefix: "login.form.send_code",
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SendCodeFormData>();
    const { mutate, isLoading, isError, error } = useSendCodeMutation();
    return (
        <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="flex flex-col items-center justify-center h-full col-span-12 p-8 lg:col-span-7"
        >
            <strong className="pb-3 mx-auto mb-8 font-serif text-base border-b-2 border-tertiary-200">
                {t("phone_label")}
            </strong>
            <div className="flex flex-col items-center">
                <label className="mb-4 text-center" htmlFor="code">
                    {!!title ? title : t("title")}
                </label>
                <IconInput
                    placeholder={t("phone_placeholder")}
                    type="tel"
                    id="phone"
                    {...register("phone", {
                        required: {
                            message: t("phone_required_error"),
                            value: true,
                        },
                    })}
                    icon={<PhoneIcon color="primary" />}
                />
                <Collapse className="w-full mt-3" in={!!errors.phone}>
                    <Alert severity="error">{errors?.phone?.message}</Alert>
                </Collapse>
                <Button
                    variant="outlined"
                    className="!px-8 !mt-8"
                    color="primary"
                    type="submit"
                    loading={isLoading}
                >
                    {t("submit")}
                </Button>
            </div>
            <AlertSnackbar open={isError}>
                {(error as AxiosError)?.response?.data.message}
            </AlertSnackbar>
        </form>
    );
};

export default SendCodeForm;
