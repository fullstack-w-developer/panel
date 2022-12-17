import ContactUsForm from "@/components/global/ContactUsForm";
import SocialIcons from "@/components/global/SocialIcons";
import useInitQuery from "@/hooks/query/useInitQuery";

const ContactUs = () => {
    const { data } = useInitQuery();
    return (
        <section className="contact-area pt-90 pb-90">
            <div className="container">
                <div className="container-inner-wrap">
                    <div className="row justify-content-center justify-content-lg-between">
                        <div className="order-2 col-lg-6 col-md-8 order-lg-0">
                            <div className="contact-title mb-25">
                                <h1 className="sub-title">ارتباط با ما</h1>
                            </div>
                            <div className="contact-wrap-content">
                                <p>
                                    در صورت داشتن هرگونه سوال یا ابهام در رابطه
                                    با محصولات ما، می‌توانید با ما در ارتباط
                                    باشید
                                </p>
                                <ContactUsForm />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="contact-info-wrap">
                                <div className="contact-img">
                                    <img src="/media/contact_img.png" />
                                </div>
                                <div className="contact-info-list">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="content">
                                                <p>{data?.address}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <p>{data?.phone}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope-open" />
                                            </div>
                                            <div className="content">
                                                <p>{data?.email}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-social">
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
