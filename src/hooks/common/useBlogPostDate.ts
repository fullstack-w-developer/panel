import { useRouter } from "next/router";
import { useMemo } from "react";

const useBlogPostDate = (date: Date | number) => {
    const { locale } = useRouter();
    return useMemo(() => {
        const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(
            date
        );
        const day = new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(
            date
        );
        return [month, day];
    }, [date]);
};

export default useBlogPostDate;
