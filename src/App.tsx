import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useAppSelector } from './redux/Store'

import Routes from './components/routes/Routes'
import { themeSettings } from './redux/reducer/theme/theme'
import Topbar from './layouts/Topbar'


const App: React.FC = () => {
  const { mode } = useAppSelector(state => state.theme);
  const useMode = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={useMode}>
      <CssBaseline />
      <Topbar />
      <Routes />
    </ThemeProvider>
  )
}

export default App