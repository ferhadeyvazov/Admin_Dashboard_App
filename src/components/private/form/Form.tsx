import React from 'react'
import Title from '../../../layouts/Title'
import MainLayout from '../../../layouts/MainLayout'
import { Box, Button, FormControl, Stack, TextField, useTheme } from '@mui/material'
import { FormProperties } from './formType'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tokens } from '../../../redux/reducer/theme/Theme'
import { formSchema } from './formSchema'

const Form: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formData: FormProperties = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address1: '',
    address2: ''
  }
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })

  // }
  const submitForm: SubmitHandler<FormProperties> = (data) => {
    console.log(data)
    reset();
  }
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormProperties>({
    defaultValues: formData,
    resolver: zodResolver(formSchema)
  })
  console.log(errors);
  
  return (
    <MainLayout>
      {/* TITLE */}
      <Box my='1.25rem'>
        <Title
          title='Profile Form'
          subtitle='Managing the team members' />
      </Box>

      {/* FORM */}
      <Box mt="40px" height="75vh" width="100%">
        {/* FORM COMPONENTS */}
        <FormControl
          component='form'
          onSubmit={handleSubmit(submitForm)}
          fullWidth
        >
          <Stack
            direction="column"
            spacing={2}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Controller
                name='firstName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.firstName?true:false}
                    helperText={errors.firstName?errors.firstName.message:false}
                    variant="filled"
                    label='First name'
                    fullWidth
                  />
                )}
              />
              <Controller
                name='lastName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.lastName?true:false}
                    helperText={errors.lastName?errors.lastName.message:false}
                    variant="filled"
                    label='Last name'
                    fullWidth
                  />
                )}
              />
            </Stack>
            <Stack
              direction='column'
              spacing={2}
            >
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.email?true:false}
                    helperText={errors.email?errors.email.message:false}
                    variant="filled"
                    label='Email'
                    fullWidth
                  />
                )}
              />
              <Controller
                name='contactNumber'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.contactNumber?true:false}
                    helperText={errors.contactNumber?errors.contactNumber.message:false}
                    variant="filled"
                    label='Contact number'
                    fullWidth
                  />
                )}
              />
              <Controller
                name='address1'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.address1?true:false}
                    helperText={errors.address1?errors.address1.message:false}
                    variant="filled"
                    label='Address 1'
                    name='address1'
                    fullWidth
                  />
                )}
              />
              <Controller
                name='address2'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={false}
                    variant="filled"
                    label='Address 2'
                    name='address2'
                    fullWidth
                  />
                )}
              />
            </Stack>
            <Button
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
              Create new user
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </MainLayout>
  )
}

export default Form