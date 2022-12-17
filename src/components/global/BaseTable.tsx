import Table, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface BaseTableProps extends TableProps {
    headings?: React.ReactNode[];
}

const BaseTable = ({ headings, children, ...props }: BaseTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table {...props}>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        {headings?.map((heading, i) => (
                            <TableCell key={i}>{heading}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default BaseTable;
