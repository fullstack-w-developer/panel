import FormattedDate from "@/components/common/FormattedDate";

interface StandardPostMetaProps {
    date: number | Date;
    author: string;
}

const StandardPostMeta = ({ date, author }: StandardPostMetaProps) => {
    return (
        <ul className="standard-blog-meta">
            <li>
                <span>
                    <i className="far fa-user" />
                    {author}
                </span>
            </li>
            <li>
                <span>
                    <i className="far fa-calendar" />
                    <FormattedDate date={date} />
                </span>
            </li>
        </ul>
    );
};

export default StandardPostMeta;
