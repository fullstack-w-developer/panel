import FadeImage from "@/components/common/FadeImage";
import Link from "next/link";

interface PostThumbProps {
    link: string;
    image: string;
    variant: "primary" | "secondary";
}

const PostThumb = ({ link, image, variant }: PostThumbProps) => {
    return (
        <div className="blog-post-thumb">
            <Link href={link}>
                <a>
                    <FadeImage
                        width={variant === "primary" ? 450 : 790}
                        height={variant === "primary" ? 300 : 360}
                        objectFit="cover"
                        src={image}
                    />
                </a>
            </Link>
        </div>
    );
};

export default PostThumb;
