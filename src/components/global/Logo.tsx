import useInitQuery from "@/hooks/query/useInitQuery";
import Link from "next/link";

const Logo = () => {
    const { data } = useInitQuery();
    return (
        <Link href="/">
            <a>
                <img className="object-contain" src={data?.logo} />
            </a>
        </Link>
    );
};

export default Logo;
