import { useMemo } from "react";

const useMenuItems = () => {
    return useMemo(() => {
        return [
            {
                link: "/",
                title: "خانه",
                subMenus: [],
            },
            {
                link: "/products",
                title: "محصولات",
                subMenus: [],
            },
            {
                link: "/posts",
                title: "مقالات",
                subMenus: [],
            },
            {
                link: "/agencies",
                title: "نمایندگی ها",
                subMenus: [],
            },
            {
                link: "/contact-us",
                title: "تماس با ما",
                subMenus: [],
            },
            {
                link: "/barcode",
                title: "اصالت کالا",
                subMenus: [],
            },
            {
                link: "/about",
                title: "درباره ما",
                subMenus: [],
            },
        ];
    }, []);
};

export default useMenuItems;
