import { useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import Iran from "@/components/global/iran";

interface MapProps {
    onLocationClick: (province: FormattedProvinceItem) => void;
    provinces: FormattedProvinceItem[];
}

const initialTooltipStyle = {
    display: "none",
    top: 0,
    left: 0,
};

const IranMap = ({ provinces, onLocationClick }: MapProps) => {
    const [pointedProvince, setPointedProvince] = useState("");
    const [tooltipStyle, setTooltipStyle] = useState(initialTooltipStyle);
    const [styles, setStyles] = useState("");

    const generateStyles = () => {
        let style = "";
        provinces.forEach((province) => {
            style += `#id-${province.id}:hover{fill:${province.color};}`;
        });
        return style;
    };

    const getProvince = (e: any) => {
        const foundProvince = provinces.find((province) => {
            const id = e.target.id.replace("id-", "");
            return parseInt(id) === province.id;
        });
        return foundProvince;
    };

    const handleLocationMouseOut = () => {
        setTooltipStyle(initialTooltipStyle);
        setPointedProvince("");
    };

    const handleLocationMouseMove = (event: any) => {
        setTooltipStyle({
            display: "block",
            top: event.clientY - 80,
            left: event.clientX - 100,
        });
    };

    useEffect(() => {
        const generatedStyles = generateStyles();
        setStyles(generatedStyles);
    }, [provinces]);

    return (
        <div className="flex items-center justify-center py-8 mx-auto lg:w-1/2 map-container">
            <style>{styles}</style>
            <SVGMap
                map={Iran}
                onLocationMouseOver={(e) => {
                    const province = getProvince(e);
                    if (province) {
                        setPointedProvince(province.title);
                    }
                }}
                onLocationMouseOut={handleLocationMouseOut}
                onLocationMouseMove={handleLocationMouseMove}
                onLocationClick={(e) => {
                    const province = getProvince(e);
                    if (province) {
                        onLocationClick(province);
                        setTooltipStyle(initialTooltipStyle);
                    }
                }}
            />
            <span
                className="fixed w-48 p-3 text-center bg-white border rounded-lg map-tooltip"
                style={tooltipStyle}
            >
                {pointedProvince}
            </span>
        </div>
    );
};

export default IranMap;
