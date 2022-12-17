import clsx from "clsx";
import { ElementProps } from "react-html-props";

interface BreadcrumbAreaProps extends ElementProps {
    heading?: React.ReactNode;
}

const BreadcrumbArea = ({
    heading,
    className,
    ...props
}: BreadcrumbAreaProps) => {
    return (
        <section
            className={clsx("breadcrumb-area breadcrumb-bg", className)}
            {...props}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            {heading && <h2 className="title">{heading}</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbArea;
