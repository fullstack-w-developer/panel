import PanelSidebarLink from "@/components/panel/PanelSidebarLink";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import useLogout from "@/hooks/global/useLogout";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect, useState } from "react";

const PanelSidebar = () => {
    const { t } = useTranslation("panel");
    const [isAgency, setIsAgency] = useState(false);
    const titles = t("titles", { returnObjects: true });
    const { user } = useAuthContext();
    const logout = useLogout();
    useEffect(() => {
        console.log(user);
        if (user?.is_agency) {
            setIsAgency(true);
        }
    }, [user]);

    return (
        <div className="h-full overflow-hidden rounded-lg shadow-md bg-opacity-70 lg:pb-64 bg-white">
            <div className="flex flex-col items-center justify-center p-4 mt-8">
                <img
                    src={
                        user?.profile_image
                            ? user.profile_image
                            : "/media/avatar.png"
                    }
                    className="object-cover w-20 h-20 border-2 border-white rounded-full"
                />
                <strong className="my-4">{user?.name}</strong>
            </div>
            <ul>
                {Object.entries(titles).map(([key, title]) => (
                    <Fragment key={key}>
                        {key === "register-agency" && isAgency ? undefined : (
                            <li>
                                <PanelSidebarLink
                                    isButton={key === "signout"}
                                    handleOnClick={() => {
                                        if (key === "signout") {
                                            logout();
                                        }
                                    }}
                                    title={title}
                                    iconKey={key}
                                    href={"/panel/" + key}
                                />
                            </li>
                        )}
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};

export default PanelSidebar;
