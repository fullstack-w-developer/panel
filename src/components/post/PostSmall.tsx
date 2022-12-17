import FadeImage from "@/components/common/FadeImage";
import FormattedDate from "@/components/common/FormattedDate";
import { getPostLink } from "@/helpers/utils";
import Link from "next/link";

interface PostSmallProps {
    post: FormattedPostItem;
}

const PostSmall = ({ post }: PostSmallProps) => {
    const { image, slug, title, date } = post;
    const link = getPostLink(slug);
    return (
        <li>
            <div className="rc-post-thumb">
                <Link href={link}>
                    <a>
                        <FadeImage
                            objectFit="cover"
                            src={image}
                            alt={title}
                            width={90}
                            height={80}
                        />
                    </a>
                </Link>
            </div>
            <div className="rc-post-content">
                <h3 className="title line-clamp-2">
                    <Link href={link}>
                        <a>{title}</a>
                    </Link>
                </h3>
                <span className="date">
                    <i className="far fa-calendar-alt" />
                    <FormattedDate date={date} />
                </span>
            </div>
        </li>
    );
};

export default PostSmall;
