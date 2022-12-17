import { useTranslation } from "next-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@/components/common/Button";
import BaseInput from "@/components/common/BaseInput";

const UpdatePasswordForm = () => {
    const { t } = useTranslation("panel", {
        keyPrefix: "dashboard.password_update_form",
    });
    return (
        <form>
            <p className="pb-4 mb-4 border-b space-i-1">
                <LockIcon className="fill-current text-primary-main" />
                <span> {t("hint")} </span>
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <li className="flex flex-col">
                    <BaseInput
                        id="oldPassword"
                        label={t("old_password")}
                        type="password"
                        placeholder={t("old_password")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="newPassword"
                        label={t("new_password")}
                        type="password"
                        placeholder={t("new_password")}
                    />
                </li>
                <li className="flex flex-col">
                    <BaseInput
                        id="newPasswordRepeat"
                        label={t("repeat_new_password")}
                        type="password"
                        placeholder={t("repeat_new_password")}
                    />
                </li>
            </ul>
            <div className="flex items-center justify-center w-full">
                <Button
                    variant="outlined"
                    className="!w-full !mx-auto !mt-8 sm:!w-auto"
                    endIcon={<ArrowBackIcon className="icon" />}
                >
                    {t("submit")}
                </Button>
            </div>
        </form>
    );
};

export default UpdatePasswordForm;
