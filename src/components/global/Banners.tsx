import BannerItem from "@/components/global/BannerItem";

interface BannersProps {
    banners: BannerItemResponse[];
}

const Banners = ({ banners }: BannersProps) => {
    return (
        <section className="discount-area pt-80">
            <div className="container">
                <div className="row justify-content-center">
                    {banners.map((banner) => (
                        <BannerItem banner={banner} key={banner.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banners;
