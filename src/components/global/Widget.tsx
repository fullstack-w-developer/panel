import { DivProps } from "react-html-props";

interface WidgetProps extends DivProps {
    heading?: React.ReactNode;
}

const Widget = ({ heading, children }: WidgetProps) => {
    return (
        <div className="widget">
            {heading && <h4 className="widget-title">{heading}</h4>}
            {children}
        </div>
    );
};

export default Widget;
