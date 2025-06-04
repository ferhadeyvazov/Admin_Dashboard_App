import { Container, useTheme } from '@mui/material';
import React from 'react';
import Login from '../../components/public/login/Login';
import AuthLayout from '../../layouts/AuthLayout';
import Title from '../../layouts/Title';
import { tokens } from '../../redux/reducer/theme/theme';
import { RootState, useAppSelector } from '../../redux/Store';
import Loading from '../../features/Loading';

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { status } = useAppSelector((state: RootState) => state.login);

  if (status === "pending") {
    return <Loading />
  }
  
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