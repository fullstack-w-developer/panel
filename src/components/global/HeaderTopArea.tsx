import GlobalSearchForm from "@/components/global/GlobalSearchForm";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import Link from "next/link";

const HeaderTopArea = () => {
    const { user } = useAuthContext();
    return (
        <div className="header-search-area !py-4">
            <div className="container custom-container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-8 col-lg-6">
                        <GlobalSearchForm />
                    </div>
                    <div className="justify-end hidden header-action lg:flex col-2 col-md-1">
                        <ul>
                            <li className="header-user">
                                <Link
                                    href={user ? "/panel/dashboard" : "/login"}
                                >
                                    <a>
                                        <i className="flaticon-user" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopArea;
