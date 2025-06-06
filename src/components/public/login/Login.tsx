import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../../features/Button'
import { loginSchema, LoginType } from './typeAndSchema'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {

  const loginData: LoginType = {
    username: '',
    password: ''
  }
  const submitLogin: SubmitHandler<LoginType> = (data) => {
    console.log(data);
    reset();
  }

  const { control, handleSubmit, reset, formState: { errors } } = useForm<LoginType>({
    defaultValues: loginData,
    resolver: zodResolver(loginSchema)
  })
  console.log(errors);

  return (
    <FormControl
      sx={{ width: "100%" }}
      component="form"
      onSubmit={handleSubmit(submitLogin)}
    >
      <Stack spacing={2}>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              variant='filled'
              label="Username"
              error={errors.username ? true : false}
              helperText={errors.username ? errors.username.message : false}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              variant='filled'
              label="Password"
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : false}
            />
          )}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link to='/register'>Qeydiyyatdan keç</Link>
          <Button>
            Enter
          </Button>
        </Stack>
      </Stack>
    </FormControl>

  )
}

export default Login