import React from 'react'
import { Button as Btn, useTheme } from '@mui/material'
import { tokens } from '../redux/reducer/theme/theme';

type IProps = {
    children: React.ReactNode;
}
const Button: React.FC<IProps> = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Btn
            variant='contained'
            type='submit'
            sx={{
                textTransform: 'uppercase',
                backgroundColor: colors.greenAccent[400],
                padding: '.5rem',
                fontSize: '.75rem',
                fontWeight: 'bold',
                alignSelf: 'flex-end',
            }}
        >
            {children}
        </Btn>
    )
}

export default Button