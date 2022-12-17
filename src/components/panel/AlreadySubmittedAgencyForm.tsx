import AlertBox from "@/components/common/AlertBox";
import { useTranslation } from "next-i18next";

const AlreadySubmittedAgencyForm = () => {
    const { t } = useTranslation("panel", {
        keyPrefix: "dashboard.register_agency_form",
    });
    return (
        <AlertBox>
            <span>{t("already_requested")}</span>
        </AlertBox>
    );
};

export default AlreadySubmittedAgencyForm;
