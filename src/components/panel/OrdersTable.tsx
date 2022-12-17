import { useTranslation } from "next-i18next";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import FormattedDate from "@/components/common/FormattedDate";
import OrderItemSkeleton from "@/components/skeletons/OrderItemSkeleton";
import BaseTable from "@/components/global/BaseTable";
import Price from "@/components/common/Price";
import { FormattedNumber } from "react-intl";

interface OrdersTableProps {
    orders?: FormattedOrderListItem[];
    isLoading: boolean;
}

const renderSkeletons = (count: number) => {
    return [...Array(count)].map((_, i) => <OrderItemSkeleton key={i} />);
};

const mapStatusToChipVariant = (status: OrderStatus) => {
    switch (status) {
        case "canceled":
            return "error";
        case "ready_to_send":
            return "info";
        case "received":
            return "success";
        case "sent":
            return "primary";
        case "unsuccessful":
            return "error";
        case "verified":
            return "success";
        case "waiting_for_verification":
            return "warning";
        default:
            return "default";
    }
};

const OrdersTable = ({ orders, isLoading }: OrdersTableProps) => {
    const { t } = useTranslation("panel", { keyPrefix: "order" });
    const obj = t("table", { returnObjects: true });
    const headings = Object.values(obj);
    return (
        <BaseTable headings={headings} sx={{ minWidth: 650 }}>
            {isLoading
                ? renderSkeletons(10)
                : orders?.map((row, i) => (
                      <TableRow
                          key={i}
                          sx={{
                              "&:last-child td, &:last-child th": {
                                  border: 0,
                              },
                          }}
                      >
                          <TableCell component="th" scope="row">
                              <FormattedNumber value={i + 1} />
                          </TableCell>
                          <TableCell>{row.code}</TableCell>
                          <TableCell>
                              <FormattedDate
                                  distanceFormat={false}
                                  date={row.date}
                              />
                          </TableCell>
                          <TableCell>
                              <Chip
                                  className="font-bold"
                                  variant="outlined"
                                  color={mapStatusToChipVariant(row.status)}
                                  label={t(`statuses.${row.status}`)}
                              />
                          </TableCell>
                          <TableCell>
                              <Price price={row.sum} />
                          </TableCell>
                      </TableRow>
                  ))}
        </BaseTable>
    );
};

export default OrdersTable;
