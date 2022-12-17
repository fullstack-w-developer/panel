import HeaderMenu from "@/components/global/HeaderMenu";
import Logo from "@/components/global/Logo";
import { useUIContext } from "src/contexts/ManagedUIContext";
import { Fragment } from "react";

const MobileMenuArea = () => {
    const { setMenuOpen } = useUIContext();
    return (
        <Fragment>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="flex items-center justify-between p-4">
                        <div className="w-12 h-12">
                            <Logo />
                        </div>
                        <button
                            type="button"
                            className="close-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                    <div className="menu-outer">
                        <HeaderMenu />
                    </div>
                </nav>
            </div>
            <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
        </Fragment>
    );
};

export default MobileMenuArea;
