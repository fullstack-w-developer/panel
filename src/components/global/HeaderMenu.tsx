import MenuItem from "@/components/global/MenuItem";
import { useAuthContext } from "src/contexts/ManagedAuthContext";
import useMenuItems from "@/hooks/global/useMenuItems";

const HeaderMenu = () => {
    const menuItems = useMenuItems();
    const { user } = useAuthContext();
    return (
        <ul className="navigation">
            <MenuItem
                link={user ? "/panel/dashboard" : "/login"}
                title={user ? "ناحیه کاربری" : "ورود"}
                subMenus={[]}
                className="lg:!hidden"
            />
            {menuItems.map((menuItem, i) => (
                <MenuItem key={i} {...menuItem} />
            ))}
        </ul>
    );
};

export default HeaderMenu;
