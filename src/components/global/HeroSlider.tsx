import HeroSlideItem from "@/components/global/HeroSlideItem";
import useSwiperRef from "@/hooks/common/useSwiperRef";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroSliderProps {
    slides: HeroSlideItemResponse[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
    const [nextEl, navigationNextRef] = useSwiperRef<HTMLButtonElement>();
    const [prevEl, navigationPrevRef] = useSwiperRef<HTMLButtonElement>();
    return (
        <section className="slider-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 section-slider slider-primary">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            onBeforeInit={(swiper) => {
                                if (
                                    typeof swiper.params.navigation !==
                                    "boolean"
                                ) {
                                    const navigation = swiper.params.navigation;
                                    navigation!.prevEl = prevEl;
                                    navigation!.nextEl = nextEl;
                                }
                            }}
                            navigation={{
                                nextEl,
                                prevEl,
                            }}
                            autoplay={{ delay: 5000 }}
                            slidesPerView={1}
                        >
                            {slides.map((slide) => (
                                <SwiperSlide className="!pb-0" key={slide.id}>
                                    <HeroSlideItem slide={slide} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute w-full top-1/2">
                            <button
                                type="button"
                                className="swiper-button-prev"
                                ref={navigationPrevRef}
                            />
                            <button
                                type="button"
                                className="swiper-button-next"
                                ref={navigationNextRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
