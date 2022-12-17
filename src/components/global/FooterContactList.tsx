import useInitQuery from "@/hooks/query/useInitQuery";

const FooterContactList = () => {
    const { data } = useInitQuery();
    return (
        <div className="footer-contact-list">
            <ul>
                <li>
                    <div className="icon">
                        <i className="flaticon-place" />
                    </div>
                    <p>{data?.address}</p>
                </li>
                {data?.phones.map(({ title, value }, i) => (
                    <li key={i} className="flex items-center">
                        <div className="icon">
                            <i className="flaticon-telephone-1" />
                        </div>
                        <h5 className="text-sm text-secondary-main relative top-[4px]">
                            <a
                                href={`tel:${value}`}
                                className="flex gap-x-2 items-center"
                            >
                                <span>{title}:</span>
                                <span>{value}</span>
                            </a>
                        </h5>
                    </li>
                ))}
                <li>
                    <div className="icon">
                        <i className="flaticon-mail" />
                    </div>
                    <p>
                        <a href={`mailto:${data?.email}`}>
                            <span>{data?.email}</span>
                        </a>
                    </p>
                </li>
                <li>
                    <div className="icon">
                        <i className="flaticon-wall-clock" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p>شنبه تا چهارشنبه ۹:۰۰ تا ۱۸:۰۰</p>
                        <p>پنج شنبه: ۹:۰۰ تا ۱۳:۰۰</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FooterContactList;
