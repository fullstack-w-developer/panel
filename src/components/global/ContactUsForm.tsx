import AlertSnackbar from "@/components/common/AlertSnackbar";
import useContactUsMutation from "@/hooks/mutations/useContactUsMutation";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import { AxiosError } from "axios";
import clsx from "clsx";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
    const { register, handleSubmit } = useForm<ContactUsFormData>();
    const { mutate, isLoading, isSuccess, isError, error, data } =
        useContactUsMutation();
    return (
        <Fragment>
            <Collapse in={!isSuccess}>
                <form
                    className="contact-form"
                    onSubmit={handleSubmit((data) => mutate(data))}
                >
                    <div className="form-grp">
                        <label htmlFor="title">
                            عنوان پیام <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="عنوان پیام"
                            {...register("title", { required: true })}
                        />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="name">
                            نام شما <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="مثال: علی رضایی"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="email">
                            ایمیل شما <span>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="info@exmaple.com"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="message">
                            پیام شما <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            placeholder="پیام شما..."
                            {...register("message", { required: true })}
                        />
                    </div>
                    <div className=" btn-form-contact-us">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={clsx(
                                "btn rounded-btn",
                                isLoading && "pointer-events-none"
                            )}
                        >
                            ارسال پیام
                        </button>
                    </div>
                </form>
            </Collapse>
            <Collapse in={isSuccess}>
                <Alert severity="success">{data?.message}</Alert>
            </Collapse>

            <AlertSnackbar open={isError}>
                {(error as AxiosError)?.response?.data.message}
            </AlertSnackbar>
        </Fragment>
    );
};

export default ContactUsForm;
