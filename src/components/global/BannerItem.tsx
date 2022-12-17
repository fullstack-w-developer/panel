import FadeImage from "@/components/common/FadeImage";
import Link from "next/link";
import React from "react";

interface BannerItemProps {
    banner: BannerItemResponse;
}

const BannerItem = ({ banner }: BannerItemProps) => {
    const { btn_link, btn_title, image, small_title, title } = banner;
    return (
        <div className="col-xl-4 col-lg-6 col-md-8">
            <div className="mb-20 discount-item style-two">
                <div className="discount-thumb">
                    <FadeImage
                        src={image}
                        width={420}
                        height={220}
                        objectFit="cover"
                    />
                </div>
                <div className="discount-content">
                    <span>{small_title}</span>
                    <h4 className="title">
                        <Link href={btn_link}>
                            <a>{title}</a>
                        </Link>
                    </h4>
                    <Link href={btn_link}>
                        <a className="btn">{btn_title}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;
