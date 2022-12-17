import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import OrdersSVG from "@/components/svg/OrdersSVG";
import PlaceSVG from "@/components/svg/PlaceSVG";
import UserSVG from "@/components/svg/UserSVG";
import HeartSVG from "@/components/svg/HeartSVG";
import SignoutSVG from "@/components/svg/SignoutSVG";
import AgencySVG from "@/components/svg/AgencySVG";
import ConditionalWrapper from "@/components/common/ConditionalWrapper";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const renderIcon = (value: string) => {
    switch (value) {
        case "addresses":
            return <PlaceSVG />;
        case "orders":
            return <OrdersSVG />;
        case "dashboard":
            return <UserSVG />;
        case "favorites":
            return <HeartSVG />;
        case "signout":
            return <SignoutSVG />;
        case "register-agency":
            return <AgencySVG />;
        default:
    }
};

interface PanelSidebarLinkProps {
    href: string;
    title: React.ReactNode;
    iconKey: string;
    isButton?: boolean;
    handleOnClick?: Function;
}

const PanelSidebarLink = ({
    href,
    title,
    iconKey,
    isButton = false,
    handleOnClick,
}: PanelSidebarLinkProps) => {
    const { pathname } = useRouter();
    const Tag = isButton ? "button" : "a";
    const { isLoading } = useAuthContext();
    return (
        <ConditionalWrapper
            condition={!isButton}
            wrap={(child) => {
                return <Link href={href}>{child}</Link>;
            }}
        >
            <Tag
                type={isButton ? "button" : undefined}
                className={clsx(
                    "relative flex w-full px-4 py-3 transition-all duration-150 hover:shadow-primary group",
                    isLoading && "pointer-events-none opacity-60"
                )}
                onClick={() => handleOnClick && handleOnClick()}
            >
                {pathname === href && (
                    <span className="absolute top-0 right-0 z-10 w-full h-full transition-all duration-150 bg-gradient-to-l opacity-100 from-primary-main to-primary-light"></span>
                )}
                <div
                    className={clsx(
                        "relative z-20 flex items-center transition-all duration-150 space-i-4 group-hover:text-primary-main",
                        pathname === href ? "text-white" : "text-gray-500"
                    )}
                >
                    {isButton && isLoading ? (
                        <CircularProgress
                            className="group-hover:!text-white !text-gray-500 !fill-current"
                            size={20}
                        />
                    ) : (
                        <span className="svg-wrapper">
                            {renderIcon(iconKey)}
                        </span>
                    )}
                    <span>{title}</span>
                </div>
            </Tag>
        </ConditionalWrapper>
    );
};

export default PanelSidebarLink;
