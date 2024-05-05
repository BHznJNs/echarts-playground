import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub'

function TitleBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Echarts Playground
          </Typography>

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            href='https://github.com/BHznJNs/echarts-playground'
            sx={{ mr: 2 }}
          >
            <GitHub fontSize='inherit'/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TitleBar
