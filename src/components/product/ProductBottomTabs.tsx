import clsx from "clsx";
import { useState } from "react";
import { useSingleProductContext } from "src/contexts/ManagedSingleProductContext";
import HtmlContent from "@/components/common/HtmlContent";
import ProductProperties from "@/components/product/ProductProperties";
import CommentsSection from "@/components/global/CommentsSection";
import Accordions from "@/components/global/Accordions";

const tabs = [
    "توضیحات محصول",
    "مشخصات محصول",
    "دیدگاه کاربران",
    "سوالات متداول",
];

const renderTabContent = (index: number) => {
    const { product } = useSingleProductContext();
    switch (index) {
        case 0:
            return <HtmlContent content={product.description} />;
        case 1:
            return (
                <div className="w-full lg:w-8/12">
                    <ProductProperties properties={product.properties} />
                </div>
            );
        case 2:
            return (
                <CommentsSection id={product.id} comments={product.comments} />
            );
        case 3:
            const accordions = product.questions.map(
                ({ answer, question }) => ({ title: question, details: answer })
            );
            return <Accordions accordions={accordions} />;
        default:
            return undefined;
    }
};

const ProductBottomTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="row">
            <div className="col-12">
                <div className="product-desc-wrap">
                    <ul className="nav nav-tabs">
                        {tabs.map((tab, i) => (
                            <li className="nav-item" key={i}>
                                <button
                                    onClick={() => setActiveTab(i)}
                                    type="button"
                                    className={clsx(
                                        "nav-link",
                                        activeTab === i && "active"
                                    )}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="myTabContentTwo">
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    "tab-pane fade",
                                    activeTab === i && "show active"
                                )}
                            >
                                <div className="product-desc-content">
                                    <h3 className="title">{tab}</h3>
                                    {renderTabContent(i)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBottomTabs;
