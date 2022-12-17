import { FormattedNumber } from "react-intl";

interface PercentageProps {
    percent: number;
}

const Percentage = ({ percent }: PercentageProps) => {
    return (
        <span>
            <FormattedNumber value={percent} /> %
        </span>
    );
};

export default Percentage;
