import { useTranslation } from "next-i18next";
import BaseInput from "@/components/common/BaseInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@/components/common/Button";
import BaseTextarea from "@/components/common/BaseTextarea";
import useRegisterAgencyMutation from "@/hooks/mutations/useRegisterAgencyMutation";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { Collapse } from "@mui/material";
import AlertSnackbar from "@/components/common/AlertSnackbar";
import { AxiosError } from "axios";

const RegisterAgencyForm = () => {
    const { t } = useTranslation("panel", {
        keyPrefix: "dashboard.register_agency_form",
    });
    const { register, handleSubmit } = useForm<RegisterAgencyFormData>();
    const { data, isError, error, isSuccess, mutate, isLoading } =
        useRegisterAgencyMutation();
    return (
        <form onSubmit={handleSubmit((data) => mutate(data))}>
            <p className="pb-4 mb-4 border-b space-i-1">
                <PersonIcon className="fill-current text-primary-main" />
                <span> {t("hint")} </span>
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-y-6 lg:gap-x-12">
                <li className="flex flex-col">
                    <BaseInput
                        id="name"
                        label={t("fields.name")}
                        placeholder={t("fields.name")}
                        {...register("name")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="email"
                        type="email"
                        label={t("fields.email")}
                        placeholder={t("fields.email")}
                        {...register("email")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="phone"
                        type="tel"
                        label={t("fields.phone")}
                        placeholder={t("fields.phone")}
                        {...register("phone")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="address"
                        label={t("fields.address")}
                        placeholder={t("fields.address")}
                        {...register("address")}
                    />
                </li>
                <li className="flex flex-col sm:col-span-2">
                    <BaseTextarea
                        id="description"
                        label={t("fields.cv")}
                        placeholder={t("fields.cv")}
                        {...register("cv")}
                    />
                </li>
            </ul>
            <Collapse in={!isSuccess}>
                <div className="flex items-center justify-center w-full">
                    <Button
                        loading={isLoading}
                        variant="outlined"
                        type="submit"
                        className="!w-full !mx-auto !mt-8 sm:!w-auto"
                        endIcon={<ArrowBackIcon className="icon" />}
                    >
                        {t("submit")}
                    </Button>
                </div>
            </Collapse>
            <Collapse in={isSuccess} className="mt-8">
                <Alert severity="success">{data?.message}</Alert>
            </Collapse>
            <AlertSnackbar open={isError}>
                {(error as AxiosError)?.response?.data.message}
            </AlertSnackbar>
        </form>
    );
};

export default RegisterAgencyForm;
