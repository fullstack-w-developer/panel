import Logo from "@/components/global/Logo";
import clsx from "clsx";
import React from "react";
import { DivProps } from "react-html-props";

const LoginAreaLayout = ({ children, className, ...props }: DivProps) => {
    return (
        <section>
            <div className="container py-10">
                <div className="grid w-full grid-cols-12 mx-auto overflow-hidden bg-white shadow-lg rounded-3xl lg:w-9/12 xxl:w-8/12">
                    <div
                        className={clsx(
                            "flex flex-col items-center justify-center h-full col-span-12 p-8 lg:col-span-7",
                            className
                        )}
                        {...props}
                    >
                        {children}
                    </div>
                    <div
                        className="relative hidden col-span-5 lg:flex"
                        style={{ minHeight: 500 }}
                    >
                        <div className="absolute z-40 flex items-center justify-center w-full top-20">
                            <Logo />
                        </div>
                        <div className="w-full h-full bg-gray-100"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginAreaLayout;
