import { getPageTitle } from "@/helpers/utils";
import { NextSeo } from "next-seo";

interface SingleSEOProps {
    title: string;
    name: string;
    seo: SEOResponse;
}

const SingleSEO = ({ seo, title, name }: SingleSEOProps) => {
    return (
        <NextSeo
            title={getPageTitle(name, title)}
            canonical={seo.canonical}
            description={seo.description}
            openGraph={{
                description: seo["og:description"],
                url: seo["og:url"],
                title: seo["og:title"],
                type: seo["og:type"],
            }}
            additionalMetaTags={[{ content: seo.keywords, name: "keywords" }]}
        />
    );
};

export default SingleSEO;
