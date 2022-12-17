import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

interface CheckboxItemProps extends CheckboxProps {
    children: React.ReactNode;
}

const CheckboxItem = ({ children, ...props }: CheckboxItemProps) => {
    return (
        <li>
            <label className="flex items-center">
                <Checkbox {...props} />
                <span>{children}</span>
            </label>
        </li>
    );
};

export default CheckboxItem;
