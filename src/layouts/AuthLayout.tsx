import { Box, Container } from '@mui/material';
import React from 'react';
import Topbar from './Topbar';

type IProps = {
  children: React.ReactNode;
}
const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Topbar />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {children}
      </Box>
    </Container>
  )
}

export default AuthLayout