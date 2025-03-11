import { GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../../mock/invoices";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../redux/reducer/theme/Theme";

interface CostProps {
    row: {
        cost: string;
    }
}
const renderCost:React.FC<CostProps> = ({row: {cost}})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Typography color={colors.greenAccent[500]}>
            {cost}
        </Typography>
    )
}

export const columns: GridColDef<(typeof mockDataInvoices)[number]>[] = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 1,
        // width: 70  width is not needed when using flex
    },
    {
        flex: 1,
        field: 'name',
        headerName: 'Name',
        // width: 230
    },
    {
        flex: 1,
        field: 'email',
        headerName: 'Email',
        // width: 250
    },
    {
        flex: 1,
        field: 'cost',
        headerName: 'Cost',
        // width: 90,
        renderCell: renderCost
    },
    {
        flex: 1,
        field: 'phone',
        headerName: 'Phone',
        // width: 200
    },
    {
        flex: 1,
        field: 'date',
        headerName: 'Date',
        // width: 120
    }
]