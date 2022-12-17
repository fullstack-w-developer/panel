import Accordions from "@/components/global/Accordions";
import { useTranslation } from "next-i18next";

const FAQ = () => {
    const { t } = useTranslation();
    const faq = t("faq", { returnObjects: true });
    return (
        <section className="pt-20 pb-24">
            <div className="container">
                <div className="lg:w-8/12 flex justify-center items-center flex-col mx-auto w-full">
                    <h2 className="title2 mb-12">سوالات متداول</h2>
                    <div>
                        <Accordions accordions={faq} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
