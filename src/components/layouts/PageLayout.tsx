import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import ScrollToTop from "@/components/global/ScrollToTop";
import React, { ReactElement } from "react";

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export const getLayout = (page: ReactElement) => (
    <PageLayout>{page}</PageLayout>
);

export default PageLayout;
