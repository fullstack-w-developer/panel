import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import FadeImage from "@/components/common/FadeImage";

interface ImagesSliderProps {
    slides: CustomerItemResponse[] | BrandItemResponse[];
    title?: React.ReactNode;
}

const ImagesSlider = ({ slides, title }: ImagesSliderProps) => {
    return (
        <section className="blog-area pt-70 pb-50">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="text-center section-title section-title-two mb-50">
                            <h4 className="title2">{title}</h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop={slides.length > 5}
                        centeredSlides
                        slidesPerView={8}
                        spaceBetween={40}
                        className="px-4 lg:px-0 images-slider"
                        breakpoints={{
                            0: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 6,
                            },
                            992: {
                                slidesPerView: 8,
                            },
                        }}
                    >
                        {slides.map(({ url, image, title, id }) => (
                            <SwiperSlide key={id}>
                                <a
                                    href={url}
                                    className="flex items-center justify-center w-24 h-24"
                                >
                                    <FadeImage
                                        src={image}
                                        alt={title}
                                        objectFit="contain"
                                        width={96}
                                        height={96}
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ImagesSlider;
