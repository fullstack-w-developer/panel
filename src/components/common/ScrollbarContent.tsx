import ConditionalWrapper from "@/components/common/ConditionalWrapper";
import CustomScrollbar from "@/components/common/CustomScrollbar";
import { useEffect, useRef, useState } from "react";
import { ScrollbarProps } from "react-custom-scrollbars";
import { DivProps } from "react-html-props";

interface ScrollbarContentProps extends DivProps {
    scrollbarProps?: ScrollbarProps;
    defaultHeight?: number;
}

const ScrollbarContent = ({
    scrollbarProps,
    children,
    defaultHeight = 250,
    style,
    ...props
}: ScrollbarContentProps) => {
    const [shouldScroll, setShouldScroll] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            if (ref.current.clientHeight > defaultHeight) {
                setShouldScroll(true);
            }
        }
    }, [ref]);
    return (
        <ConditionalWrapper
            condition={shouldScroll}
            wrap={(child) => {
                return (
                    <CustomScrollbar
                        {...scrollbarProps}
                        style={{ height: defaultHeight, ...style }}
                    >
                        {child}
                    </CustomScrollbar>
                );
            }}
        >
            <div ref={ref} {...props}>
                {children}
            </div>
        </ConditionalWrapper>
    );
};

export default ScrollbarContent;
