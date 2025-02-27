import { GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "../../../mock/contacts";

export const columns: GridColDef<(typeof mockDataContacts)[number]>[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'registrarId',
        headerName: 'Registrar ID',
        width: 120
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 230
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 90
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 200
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200
    },
    {
        field: 'city',
        headerName: 'City',
        width: 120
    },
    {
        field: 'zipCode',
        headerName: 'ZipCode',
        width: 120
    }
]