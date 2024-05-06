import { MouseEventHandler, useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../App'

function TitleBarIcon({ href, onClick, children }: {
  href?: string,
  onClick?: MouseEventHandler,
  children: JSX.Element,
}) {
  return (
    <IconButton
      size='large'
      edge='start'
      onClick={onClick}
      href={href ? href : ''}
      color='inherit'
      sx={{ mr: 2 }}
    >{children}</IconButton>
  )
}

function TitleBar() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            ECharts Playground
          </Typography>

          <TitleBarIcon onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </TitleBarIcon>
          <TitleBarIcon href='https://github.com/BHznJNs/echarts-playground'>
            <GitHub fontSize='inherit' />
          </TitleBarIcon>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TitleBar
