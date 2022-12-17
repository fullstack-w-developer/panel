import FadeImage from "@/components/common/FadeImage";

interface Props {
    slide: HeroSlideItemResponse;
}

const isEmpty = (str: string) => {
    return !(str === "#");
};

const HeroSlideItem = ({ slide }: Props) => {
    const { image, sub_title, description, title, btn_link, btn_title } = slide;
    return (
        <div className="relative w-full aspect-w-9 aspect-h-4 text-start">
            <FadeImage
                wrapperClassName="!absolute w-full h-full right-0 z-[-1]"
                objectFit="cover"
                src={image}
                layout="fill"
            />
            <div className="slider-content">
                {sub_title && isEmpty(sub_title) && (
                    <h5
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                    >
                        {sub_title}
                    </h5>
                )}

                {title && isEmpty(title) && (
                    <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                    >
                        {title}
                    </h2>
                )}

                {description && isEmpty(description) && (
                    <p data-animation="fadeInUp" data-delay=".6s">
                        {description}
                    </p>
                )}

                {(isEmpty(btn_link) || isEmpty(btn_title)) && (
                    <a
                        href={btn_link}
                        className="btn rounded-btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                    >
                        {btn_title}
                    </a>
                )}
            </div>
        </div>
    );
};

export default HeroSlideItem;
