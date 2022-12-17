import ServiceItem from "@/components/global/ServiceItem";

const services = [
    {
        icon: "flaticon-return",
        title: "ضمانت اصالت کالا",
        badge: "",
        description: "قابلیت رهگیری اصالت کالا در کوتاه‌ترین زمان",
        link: "/",
    },
    {
        icon: "flaticon-return",
        title: "۷ روز هفته/۲۴ ساعته",
        badge: "",
        description: "پشتیبان و پاسخگوی سوالات شما در تمامی ساعات",
        link: "/",
    },
    {
        icon: "flaticon-return",
        title: "تعهد و تخصص",
        badge: "",
        description: "تعهد به کیفیت با فرمولاسیون ارتقا یافته در کانادا",
        link: "/",
    },
];

const ServicesSection = () => {
    return (
        <div className="container custom-container">
            <div className="slider-category-wrap">
                <div className="row justify-content-center">
                    {services.map((service, i) => (
                        <ServiceItem key={i} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
