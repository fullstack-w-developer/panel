import useInitQuery from "@/hooks/query/useInitQuery";
import { Fragment } from "react";

const SocialIcons = () => {
    const { data } = useInitQuery();
    return (
        <Fragment>
            {data && (
                <ul>
                    <li>
                        <a href={data.facebook}>
                            <i className="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li>
                        <a href={data.twitter}>
                            <i className="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href={data.instagram}>
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href={data.linkedin}>
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </li>
                </ul>
            )}
        </Fragment>
    );
};

export default SocialIcons;
