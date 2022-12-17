import FadeImage from "@/components/common/FadeImage";
import clsx from "clsx";
import { useState } from "react";

interface ProductGalleryProps {
    gallery: string[];
}

const ProductGallery = ({ gallery }: ProductGalleryProps) => {
    const [active, setActive] = useState(0);
    return (
        <div className="col-lg-7">
            <div className="shop-details-flex-wrap">
                <div className="shop-details-nav-wrap">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {gallery.map((image, i) => (
                            <li
                                className="nav-item"
                                key={i}
                                role="presentation"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActive(i)}
                                    className={clsx(
                                        "nav-link",
                                        i === active && "active"
                                    )}
                                >
                                    <FadeImage
                                        objectFit="cover"
                                        src={image}
                                        width={80}
                                        height={80}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="shop-details-img-wrap">
                    <div className="tab-content" id="myTabContent">
                        {gallery.map((image, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    "tab-pane fade",
                                    active === i && "show active"
                                )}
                            >
                                <div className="shop-details-img">
                                    <FadeImage
                                        src={image}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
