import { useTranslation } from "next-i18next";

type Props = {
    total: number;
    from: number;
    to: number;
};

const LoopInfo = ({ total, from, to }: Props) => {
    const { t } = useTranslation();
    return <span>{t("loop_info", { total, from, to })}</span>;
};

export default LoopInfo;
