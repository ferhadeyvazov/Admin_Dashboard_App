import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import Button from '../../../features/Button'
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/Store'
import { register } from '../../../redux/reducer/auth/RegisterSlice'
import { registerSchema, RegisterType } from "./typeAndSchema"

const Register: React.FC = () => {
  const registerData = useAppSelector((state: RootState) => state.register);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset, formState: { errors } } = useForm<RegisterType>({
    defaultValues: registerData,
    resolver: zodResolver(registerSchema)
  })
  const registerSubmit: SubmitHandler<RegisterType> = (data) => {
    dispatch(register(data));
    reset();
  }
  
  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(registerSubmit)}
    >
      <Stack spacing={2}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="filled"
                label="Ad"
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? errors.firstName.message : false}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="filled"
                label="Soyad"
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? errors.lastName.message : false}
              />
            )}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="filled"
                label="Email"
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : false}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="filled"
                label="Password"
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : false}
              />
            )}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link to='/login'>Hesabın varsa</Link>
          <Button>
            Enter
          </Button>
        </Stack>
      </Stack>

    </FormControl>
  )
}

export default Register