import FadeImage from "@/components/common/FadeImage";
import FooterContactList from "@/components/global/FooterContactList";
import FooterCopyright from "@/components/global/FooterCopyright";
import FooterWidget from "@/components/global/FooterWidget";
import Logo from "@/components/global/Logo";
import SocialIcons from "@/components/global/SocialIcons";
import useMenuItems from "@/hooks/global/useMenuItems";

const Footer = () => {
    const links = useMenuItems();
    return (
        <footer>
            <div className="footer-area gray-bg pt-80 pb-30">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="footer-logo mb-25 logo">
                                    <Logo />
                                </div>
                                <FooterContactList />
                                <div className="footer-social">
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>
                        <FooterWidget links={links} title="صفحات" />
                        <FooterWidget title="نمادهای اعتماد">
                            <div className="flex gap-3">
                                <a href="#0">
                                    <FadeImage
                                        width={120}
                                        height={120}
                                        src="/media/namad/enamad.png"
                                    />
                                </a>
                                <a href="#0">
                                    <FadeImage
                                        width={120}
                                        height={120}
                                        src="/media/namad/samandehi.png"
                                    />
                                </a>
                            </div>
                        </FooterWidget>
                    </div>
                </div>
            </div>
            <FooterCopyright />
        </footer>
    );
};

export default Footer;
