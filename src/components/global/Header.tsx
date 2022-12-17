import HeaderMenu from "@/components/global/HeaderMenu";
import HeaderTopArea from "@/components/global/HeaderTopArea";
import Logo from "@/components/global/Logo";
import MobileMenuArea from "@/components/global/MobileMenuArea";
import { useUIContext } from "src/contexts/ManagedUIContext";
import clsx from "clsx";

const Header = () => {
    const { setMenuOpen, menuOpen } = useUIContext();
    return (
        <header className={clsx(menuOpen && "mobile-menu-visible")}>
            <HeaderTopArea />
            <div id="sticky-header" className="!py-3 menu-area">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <HeaderMenu />
                                    </div>
                                    <div
                                        className="mobile-nav-toggler !mt-0"
                                        onClick={() => setMenuOpen(true)}
                                    >
                                        <i className="fas fa-bars" />
                                    </div>
                                    <div className="logo">
                                        <Logo />
                                    </div>
                                </nav>
                            </div>
                            <MobileMenuArea />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
