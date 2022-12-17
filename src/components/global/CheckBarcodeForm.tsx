import { useTranslation } from "next-i18next";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import DialpadIcon from "@mui/icons-material/Dialpad";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@/components/common/Button";
import IconInput from "@/components/common/IconInput";
import useBarcodeMutation from "@/hooks/mutations/useBarcodeMutation";
import { Alert, Collapse } from "@mui/material";
import { useEffect } from "react";
import { useBarcodeContext } from "@/contexts/ManagedBarcodeContext";

const CheckBarcodeForm = () => {
    const { t } = useTranslation("common", { keyPrefix: "barcode.form" });
    const { setProduct } = useBarcodeContext();
    const { register, handleSubmit } = useForm<CheckBarcodeFormData>();
    const { data, mutate, isLoading, isSuccess, isError, error } =
        useBarcodeMutation();

    useEffect(() => {
        if (isSuccess && data) {
            setProduct(data.data.product);
        }
        if (isError) {
            setProduct(null);
        }
    }, [isSuccess, isError]);

    return (
        <form
            onSubmit={handleSubmit(({ code }) => mutate(code))}
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
                    icon={<DialpadIcon color="primary" />}
                    {...register("code", { required: true })}
                />
                <div className="flex items-center my-7 space-i-4">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        loading={isLoading}
                        endIcon={
                            <ArrowBackIcon className="icon" fontSize="small" />
                        }
                    >
                        {t("submit")}
                    </Button>
                </div>
                <div className="flex flex-col gap-3">
                    <Collapse in={isSuccess} className="w-full">
                        <Alert severity="success">{t("success")}</Alert>
                    </Collapse>
                    <Collapse in={isError} className="w-full">
                        <Alert severity="error">
                            {(error as AxiosError)?.response?.data.message}
                        </Alert>
                    </Collapse>
                </div>
            </div>
        </form>
    );
};

export default CheckBarcodeForm;
