interface SocialShareProps {
    url: string;
}

const SocialShare = ({ url }: SocialShareProps) => {
    return (
        <div className="blog-details-social">
            <ul>
                <li>
                    <a href={"https://facebook.com/sharer.php?u=" + url}>
                        <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a href={"https://twitter.com/intent/tweet/?url=" + url}>
                        <i className="fab fa-twitter" />
                    </a>
                </li>
                <li>
                    <a
                        href={
                            "https://www.linkedin.com/sharing/share-offsite/?url=" +
                            url
                        }
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialShare;
