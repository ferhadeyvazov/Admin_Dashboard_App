import { Container, useTheme } from '@mui/material';
import React from 'react';
import Login from '../../components/public/login/Login';
import AuthLayout from '../../layouts/AuthLayout';
import Title from '../../layouts/Title';
import { tokens } from '../../redux/reducer/theme/theme';

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <AuthLayout>
      <Container maxWidth='xs'
        sx={{
          border: "1px solid",
          p: "1rem",
          backgroundColor: colors.primary[400]
        }}>
          <Title title="Login" />
          <Login />
      </Container>
    </AuthLayout>
  )

}
export default LoginPage