import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";

const OrderItemSkeleton = () => {
    return (
        <TableRow
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                <Skeleton />
            </TableCell>
            <TableCell>
                <Skeleton />
            </TableCell>
            <TableCell>
                <Skeleton />
            </TableCell>
            <TableCell>
                <Skeleton />
            </TableCell>
            <TableCell>
                <Skeleton />
            </TableCell>
        </TableRow>
    );
};

export default OrderItemSkeleton;
