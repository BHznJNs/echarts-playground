import { createContext, useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Main from './components/Main'
import TitleBar from './components/TitleBar'
import CssBaseline from '@mui/material/CssBaseline'

export const ColorModeContext = createContext({toggleColorMode() {}})

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prevMode) =>
      (prevMode === 'light' ? 'dark' : 'light'))
  }), [])
  const theme = useMemo(() =>
    createTheme({
      palette: { mode }
    }), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <TitleBar/>
        <Main mode={mode}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
