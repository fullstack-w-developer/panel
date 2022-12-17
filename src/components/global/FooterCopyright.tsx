import { useTranslation } from "next-i18next";

const FooterCopyright = () => {
    const { t } = useTranslation("common", { keyPrefix: "footer" });
    return (
        <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <div className="copyright-text text-center">
                            <p className="mb-3 border-b border-gray-300 pb-3">
                                {t("copyright_primary")}
                            </p>
                            <a href="https://ultimatesoft.co/">
                                {t("copyright_website")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCopyright;
