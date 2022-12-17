import IranMap from "@/components/global/IranMap";
import { useAgencyContext } from "src/contexts/ManagedAgenciesContext";
import { scrollToRef } from "@/helpers/scroll-to-ref";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";

interface AgenciesMapProps {
    provinces: FormattedProvinceItem[];
}

const AgenciesMap = ({ provinces }: AgenciesMapProps) => {
    const { divRef, query, setQuery, setActiveProvince } = useAgencyContext();
    const update = useUpdateQuery();
    return (
        <section
            className="px-4 py-8 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url(/media/city.png)" }}
        >
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl border-b-2 border-primary-main pb-1 mb-3 border-opacity-40">
                        انتخاب استان
                    </h1>
                    <p className="text-sm">
                        جهت نمایش نمایندگی های مربوط به هر استان روی آن کلیک
                        کنید
                    </p>
                </div>
                <IranMap
                    onLocationClick={(province) => {
                        scrollToRef(divRef);
                        setActiveProvince(province.title);
                        const newQuery = {
                            ...query,
                            page: 1,
                            province_id: province.id,
                        };
                        update({ newQuery, setQuery });
                    }}
                    provinces={provinces}
                />
            </div>
        </section>
    );
};

export default AgenciesMap;
