import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
    link: string;
    title: string;
    subMenus: MenuItemProps[];
    className?: string;
}

const MenuItem = ({ link, title, subMenus, className }: MenuItemProps) => {
    const { pathname } = useRouter();
    return (
        <li
            className={clsx(
                pathname === link && "active",
                subMenus.length > 0 && "menu-item-has-children",
                className
            )}
        >
            <Link href={link}>
                <a>{title}</a>
            </Link>
            {subMenus.length > 0 && (
                <ul className="submenu">
                    {subMenus.map((menuItem, i) => (
                        <MenuItem key={i} {...menuItem} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
