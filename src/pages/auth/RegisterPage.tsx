import { Container, useTheme } from '@mui/material';
import React from 'react';
import Register from '../../components/public/register/Register';
import AuthLayout from '../../layouts/AuthLayout';
import Title from '../../layouts/Title';
import { tokens } from '../../redux/reducer/theme/theme';

const RegisterPage: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <AuthLayout>
      <Container maxWidth="sm"
        sx={{
          border: "1px solid",
          p: "1rem",
          backgroundColor: colors.primary[400],
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Title title="Register" />
        <Register />
      </Container>
    </AuthLayout>
  )
}

export default RegisterPage