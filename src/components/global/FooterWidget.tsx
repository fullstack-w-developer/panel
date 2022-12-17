import Link from "next/link";

interface FooterWidgetProps {
    title: React.ReactNode;
    children?: React.ReactNode;
    links?: {
        link: string;
        title: string;
    }[];
}

const FooterWidget = ({ links, title, children }: FooterWidgetProps) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-widget mb-50">
                <div className="fw-title">
                    <h5 className="title">{title}</h5>
                </div>
                {links && (
                    <div className="fw-link">
                        <ul>
                            {links.map(({ link, title }, i) => (
                                <li key={i}>
                                    <Link href={link}>
                                        <a>{title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default FooterWidget;
