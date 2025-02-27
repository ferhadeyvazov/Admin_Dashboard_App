import { Box, Typography, useTheme } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../../mock/team";
import { tokens } from "../../../redux/reducer/theme/Theme";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

interface AccessProps {
    row: {
        access: string;
    }
}

const renderAccess: React.FC<AccessProps> = ({ row: { access } }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            component="div"
            width="70%"
            // m="0 auto"
            p="5px"
            borderRadius={1}
            display='flex'
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            bgcolor={
                access === "admin"
                    ? colors.greenAccent[400]
                    : colors.greenAccent[300]
            }
        >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[900]} marginLeft="5px">
                {access}
            </Typography>
        </Box>
    )
}

export const columns: GridColDef<(typeof mockDataTeam)[number]>[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 180
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 90
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150
    },
    {
        field: 'access',
        headerName: 'Access Level',
        width: 150,
        renderCell: renderAccess
    }
]