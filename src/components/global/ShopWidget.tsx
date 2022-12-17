import { DivProps } from "react-html-props";

interface ShopWidgetProps extends DivProps {
    heading?: React.ReactNode;
}

const ShopWidget = ({ heading, children }: ShopWidgetProps) => {
    return (
        <div className="shop-widget">
            {heading && (
                <div className="shop-widget-title">
                    <h3 className="title">{heading}</h3>
                </div>
            )}
            {children}
        </div>
    );
};

export default ShopWidget;
