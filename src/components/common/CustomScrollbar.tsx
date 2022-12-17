import { useRouter } from "next/router";
import Scrollbars, { ScrollbarProps } from "react-custom-scrollbars";
import { isRtlLang } from "rtl-detect";

interface CustomScrollbarProps extends ScrollbarProps {}

const getViewStyles = (props: any, isRTL?: boolean) => {
    let styles = { ...props.style };
    if (isRTL) {
        styles = {
            ...props.style,
            marginLeft: props.style.marginRight,
            marginRight: 0,
        };
    }
    return styles;
};

const CustomScrollbar = ({ children, ...props }: CustomScrollbarProps) => {
    const { locale } = useRouter();
    const isRTL = isRtlLang(locale as string);
    return (
        <Scrollbars
            className="custom-scrollbar"
            universal={true}
            renderTrackVertical={(props) => {
                const trackStyle = isRTL
                    ? { left: "2px", right: "auto" }
                    : { right: "2px", left: "auto" };
                return (
                    <div
                        {...props}
                        className="custom-scrollbar__track"
                        style={{
                            ...props.style,
                            bottom: 2,
                            top: 2,
                            borderRadius: 3,
                            ...trackStyle,
                        }}
                    />
                );
            }}
            renderView={(props) => {
                const styles = getViewStyles(props, isRTL);
                return <div {...props} style={styles} />;
            }}
            {...props}
        >
            {children}
        </Scrollbars>
    );
};

export default CustomScrollbar;
