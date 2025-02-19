import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import './App.css'
import { useAppSelector } from './redux/Store'
import { themeSettings } from './redux/reducer/theme/Theme'
// PAGES
import Routes from './routes/Routes'


const App: React.FC = () => {
  const { mode } = useAppSelector(state => state.theme);
  const useMode = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={useMode}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App