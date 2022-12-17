import Link from "next/link";

interface PostTitleProps {
    link: string;
    title: string;
}

const PostTitle = ({ link, title }: PostTitleProps) => {
    return (
        <h4 className="title line-clamp-2 hover:!text-primary-main">
            <Link href={link}>
                <a>{title}</a>
            </Link>
        </h4>
    );
};

export default PostTitle;
