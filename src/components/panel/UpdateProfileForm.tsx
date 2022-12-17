import { useTranslation } from "next-i18next";
import BaseInput from "@/components/common/BaseInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import useUpdateProfileMutation from "@/hooks/mutations/useUpdateProfileMutation";
import AlertSnackbar from "@/components/common/AlertSnackbar";
import { AxiosError } from "axios";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import { useEffect } from "react";

const UpdateProfileForm = () => {
    const { t } = useTranslation("panel", {
        keyPrefix: "dashboard.profile_update_form",
    });
    const { user } = useAuthContext();
    const { register, handleSubmit, setValue } =
        useForm<UpdateProfileFormData>();
    const { isError, error, isSuccess, mutate, isLoading } =
        useUpdateProfileMutation();
    useEffect(() => {
        if (user) {
            Object.entries(user).forEach(([key, value]) => {
                setValue(key as keyof UpdateProfileFormData, value);
            });
        }
    }, [user]);

    return (
        <form onSubmit={handleSubmit((data) => mutate(data))}>
            <p className="pb-4 mb-4 items-center flex border-b space-i-1">
                <PersonIcon className="fill-current text-primary-main" />
                <span>{t("hint")}</span>
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-y-6 lg:gap-x-12">
                <li className="flex flex-col">
                    <BaseInput
                        id="firstName"
                        label={t("first_name")}
                        placeholder={t("first_name")}
                        {...register("name")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="lastName"
                        label={t("last_name")}
                        placeholder={t("last_name")}
                        {...register("last_name")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="nationalCode"
                        label={t("national_code")}
                        placeholder={t("national_code")}
                        {...register("national_code")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        value={user?.phone}
                        disabled
                        id="mobile"
                        label={t("mobile")}
                        placeholder={t("mobile")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="email"
                        label={t("email")}
                        placeholder={t("email")}
                        {...register("email")}
                    />
                </li>
            </ul>
            <div className="flex items-center justify-center w-full">
                <Button
                    loading={isLoading}
                    type="submit"
                    variant="outlined"
                    className="!w-full !mx-auto !mt-8 sm:!w-auto"
                    endIcon={<ArrowBackIcon className="icon" />}
                >
                    {t("submit")}
                </Button>
            </div>
            <AlertSnackbar open={isError}>
                {(error as AxiosError)?.response?.data.message}
            </AlertSnackbar>
            <AlertSnackbar severity="success" open={isSuccess}>
                اطلاعات کاربری با موفقیت بروزرسانی شد
            </AlertSnackbar>
        </form>
    );
};

export default UpdateProfileForm;
