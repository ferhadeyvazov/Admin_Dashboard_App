import { useTheme } from "@mui/material";
import { tokens } from "../../redux/reducer/theme/theme";
import { IStatistics, IconsName } from './type';

export const mockStatistics = ():IStatistics[] =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        [
            {
                title: "12,361",
                subtitle: "Emails Sent",
                progress: 0.75,
                increase: '+14%',
                iconStyle: {
                    color: colors.greenAccent[400],
                    fontSize: '26px'
                },
                icon: IconsName.Email
            },
            {
                title: "431,225",
                subtitle: "Sales Obtained",
                progress: 0.50,
                increase: '+21%',
                iconStyle: {
                    color: colors.greenAccent[400],
                    fontSize: '26px'
                },
                icon: IconsName.PointOfSale
            },
            {
                title: "32,441",
                subtitle: "New Clients",
                progress: 0.30,
                increase: '+5%',
                iconStyle: {
                    color: colors.greenAccent[400],
                    fontSize: '26px'
                },
                icon: IconsName.PersonAdd
            },
            {
                title: "1,325,134",
                subtitle: "Traffic Received",
                progress: 0.80,
                increase: '+43%',
                iconStyle: {
                    color: colors.greenAccent[400],
                    fontSize: '26px'
                },
                icon: IconsName.Traffic
            }
        ]
    )
} 