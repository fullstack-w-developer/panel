import FadeImage from "@/components/common/FadeImage";
import Price from "@/components/common/Price";
import { useBarcodeContext } from "@/contexts/ManagedBarcodeContext";
import { Fragment } from "react";

const CheckBarcodeEnd = () => {
    const { product } = useBarcodeContext();
    return (
        <Fragment>
            {product ? (
                <div className="flex flex-col col-span-12 p-4 text-center justify-center items-center lg:col-span-5">
                    <img
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                    <h2 className="font-bold text-xl">{product.title}</h2>
                    <Price
                        price={product.price}
                        className="text-secondary-main"
                    />
                </div>
            ) : (
                <div
                    className="relative hidden lg:col-span-5 lg:flex"
                    style={{ minHeight: 500 }}
                >
                    <div className="flex items-center justify-center w-full h-full bg-white">
                        <FadeImage
                            src="/media/vectors/1.png"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default CheckBarcodeEnd;
