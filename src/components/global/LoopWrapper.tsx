import OverlayLoader from "@/components/global/OverlayLoader";
import { Fragment, LegacyRef, ReactNode } from "react";

interface LoopWrapperProps {
    isFetching: boolean;
    children: ReactNode;
    divRef: null | LegacyRef<HTMLDivElement>;
}

const LoopWrapper = ({ divRef, isFetching, children }: LoopWrapperProps) => {
    return (
        <Fragment>
            <OverlayLoader active={isFetching} />
            <div ref={divRef}></div>
            {children}
        </Fragment>
    );
};

export default LoopWrapper;
