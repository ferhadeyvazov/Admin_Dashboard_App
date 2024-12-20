import React from 'react'
import './App.css'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useAppSelector } from './redux/Store'

import Routes from './components/routes/Routes'
import { themeSettings } from './redux/reducer/theme/theme'


const App:React.FC = () => {
  const {mode} = useAppSelector(state=>state.theme);
  const useMode = createTheme(themeSettings(mode));
  
  return (
    <ThemeProvider theme={useMode}>
      <CssBaseline />
      <Routes />

    </ThemeProvider>
  )
}

export default App