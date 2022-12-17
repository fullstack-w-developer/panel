import { useTranslation } from "next-i18next";
import Link from "next/link";
import AlertBox from "@/components/common/AlertBox";
import Button from "@/components/common/Button";
import Image from "next/image";

const CartEmpty = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col items-center justify-center p-4 mx-auto bg-white rounded-lg shadow-lg lg:w-8/12">
            <Image
                src="/media/basket.png"
                className="mx-auto"
                width={400}
                height={300}
            />
            <AlertBox className="mb-4">{t("alerts.empty_cart")}</AlertBox>
            <Link href="/products">
                <Button isGradient className="!mb-8">
                    {t("go_to_shop")}
                </Button>
            </Link>
        </section>
    );
};

export default CartEmpty;
