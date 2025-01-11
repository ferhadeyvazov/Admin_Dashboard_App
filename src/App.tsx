import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import './App.css'
import { useAppSelector } from './redux/Store'
import { themeSettings } from './redux/reducer/theme/theme'
import { Grid } from '@mui/material'
// PAGES
import Sidebar from './layouts/Sidebar'
import Topbar from './layouts/Topbar'
import Routes from './routes/Routes'


const App: React.FC = () => {
  const { mode } = useAppSelector(state => state.theme);
  const useMode = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={useMode}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Topbar />
          <Routes />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App