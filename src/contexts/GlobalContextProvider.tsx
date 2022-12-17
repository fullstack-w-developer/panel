import { FC } from "react";
import ManagedAuthContext from "src/contexts/ManagedAuthContext";
import ManagedCartContext from "src/contexts/ManagedCartContext";
import ManagedUIContext from "src/contexts/ManagedUIContext";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

const GlobalContextProvider: FC = ({ children }) => {
    const { locale = "fa" } = useRouter();
    return (
        <IntlProvider locale={locale} defaultLocale="fa">
            <ManagedAuthContext>
                <ManagedUIContext>
                    <ManagedCartContext>{children}</ManagedCartContext>
                </ManagedUIContext>
            </ManagedAuthContext>
        </IntlProvider>
    );
};

export default GlobalContextProvider;
