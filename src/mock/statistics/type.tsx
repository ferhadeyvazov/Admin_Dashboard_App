import { EmailOutlined, PersonAddAlt1Outlined, PointOfSaleOutlined, TrafficOutlined } from "@mui/icons-material";

export type IStatistics = {
    title: string,
    subtitle: string,
    progress: number,
    increase: string,
    iconStyle: {
        color: string,
        fontSize: string
    },
    icon: IconsName;
}

export enum IconsName {
    Email = "EmailOutlined",
    PointOfSale = "PointOfSaleOutlined",
    PersonAdd = "PersonAddAlt1Outlined",
    Traffic = "TrafficOutlined"
}

export const iconsMap = {
    [IconsName.Email]: EmailOutlined,
    [IconsName.PointOfSale]: PointOfSaleOutlined,
    [IconsName.PersonAdd]: PersonAddAlt1Outlined,
    [IconsName.Traffic]: TrafficOutlined,
};