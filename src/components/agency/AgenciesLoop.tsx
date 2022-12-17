import { Fragment, useEffect, useRef } from "react";
import AgencyCard from "@/components/agency/AgencyCard";
import Pagination from "@/components/common/Pagination";
import useUpdateQuery from "@/hooks/global/useUpdateQuery";
import useAgenciesQuery from "@/hooks/query/useAgenciesQuery";
import { useAgencyContext } from "src/contexts/ManagedAgenciesContext";
import { scrollToRef } from "@/helpers/scroll-to-ref";

interface AgenciesLoopProps {
    initialData: FormattedAgencies;
}

const AgenciesLoop = ({ initialData }: AgenciesLoopProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { activeProvince, setDivRef, divRef, query, setQuery } =
        useAgencyContext();
    const { data, isFetching } = useAgenciesQuery({ query, initialData });
    const update = useUpdateQuery();
    useEffect(() => {
        setDivRef(ref);
    }, [ref]);
    return (
        <Fragment>
            <div ref={ref}></div>
            <section className="my-12">
                <div className="container">
                    <div className="flex justify-center items-center gap-4 flex-col mb-8">
                        <h2 className="text-lg border-b-2 border-primary-main border-opacity-40">
                            {activeProvince
                                ? "لیست نمایندگی های " + activeProvince
                                : "لیست نمایندگی ها"}
                        </h2>
                    </div>
                    <div>
                        <div className="row">
                            {data?.data.map((agency, i) => (
                                <div
                                    className="mb-4 col-xl-3 col-md-3 col-6"
                                    key={i}
                                >
                                    <AgencyCard agency={agency} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Pagination
                        noItem={data?.data.length === 0 && !isFetching}
                        page={query.page}
                        count={data?.meta?.lastPage}
                        onChange={(_, page) => {
                            scrollToRef(divRef);
                            const newQuery = { ...query, page };
                            update({ newQuery, setQuery });
                        }}
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default AgenciesLoop;
