import AlertBox from "@/components/common/AlertBox";

interface ProductPropertiesProps {
    properties: FormattedSingleProduct["properties"];
}

const ProductProperties = ({ properties }: ProductPropertiesProps) => {
    return (
        <ul className="flex flex-col space-y-2">
            {properties.length > 0 ? (
                properties.map(({ key, value }, i) => (
                    <li key={i} className="grid grid-cols-12 gap-2">
                        <span className="flex items-center col-span-5 p-3 bg-gray-100 md:col-span-3 lg:col-span-2">
                            {key}
                        </span>
                        <span className="flex items-center col-span-7 p-3 bg-gray-100 md:col-span-9 lg:col-span-10">
                            {value}
                        </span>
                    </li>
                ))
            ) : (
                <AlertBox />
            )}
        </ul>
    );
};

export default ProductProperties;
