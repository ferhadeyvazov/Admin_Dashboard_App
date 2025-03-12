import React from 'react'
import { TextField } from '@mui/material'

type IProps = {
    inpLabel: string;
    inpName: string;
}

const InputForm: React.FC<IProps> = ({inpLabel, inpName}) => {
    return (
        <>
            <TextField
                error={false}
                // helperText="write first name"
                variant="filled"
                label={inpLabel}
                name={inpName}
                fullWidth
            />

        </>
    )
}

export default InputForm