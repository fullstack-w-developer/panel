interface Props {
    service: {
        icon: string;
        title: string;
        badge: string;
        description: string;
        link: string;
    };
}

const ServiceItem = ({ service }: Props) => {
    const { badge, description, icon, link, title } = service;
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
            <div className="services-item">
                <a href={link} className="services-link" />
                <div className="icon">
                    <i className={icon} />
                </div>
                <div className="content">
                    <h5>
                        {title}
                        {badge && <span className="new">{badge}</span>}
                    </h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
