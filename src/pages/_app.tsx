import "@/styles/css/tailwind.css";
// Theme
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/fontawesome-all.min.css";
import "@/styles/css/flaticon.css";
import "@/styles/css/default.css";
import "@/styles/css/style.css";
import "@/styles/css/responsive.css";
// Custom
import "@/assets/fonts/iran-sans/css/iransans.css";
import "@/assets/fonts/iran-yekan/css/iranyekan.css";
import "@/styles/scss/main.scss";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment, ReactElement, ReactNode } from "react";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import NProgress from "nprogress";

import useHMR from "@/hooks/common/useHMR";
import ThemeWrapper from "@/theme/ThemeWrapper";
import nextI18nConfig from "../../next-i18next.config";

import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import createEmotionCache from "@/theme/createEmotionCache";
import GlobalContextProvider from "src/contexts/GlobalContextProvider";
import { NextPage } from "next";
import useConfigureQueryClient from "@/hooks/common/useCustomQueryClient";
import GlobalLoader from "@/components/common/GlobalLoader";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
};

const clientSideEmotionCache = createEmotionCache();

function App(props: CustomAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        router,
        pageProps,
    } = props;
    const getLayout =
        (Component as any).getLayout || ((page: ReactElement) => page);
    const { locale } = router;
    const queryClient = useConfigureQueryClient();
    useHMR();
    return (
        <Fragment>
            <QueryClientProvider client={queryClient}>
                <GlobalContextProvider>
                    <ThemeWrapper emotionCache={emotionCache} locale={locale}>
                        {getLayout(<Component {...pageProps} />)}
                        <GlobalLoader />
                    </ThemeWrapper>
                    <ReactQueryDevtools
                        panelProps={{ dir: "ltr" }}
                        position="bottom-left"
                        initialIsOpen={false}
                    />
                </GlobalContextProvider>
            </QueryClientProvider>
        </Fragment>
    );
}

export default appWithTranslation(App, nextI18nConfig);
