import { useState, SyntheticEvent } from 'react'
import { default as MuiTabs } from '@mui/material/Tabs'
import { default as MuiTab } from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children: React.ReactNode,
  index: number,
  value: number,
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  const isHiddden = value !== index

  return (
    <div
      role='tabpanel'
      hidden={isHiddden}
      style={{
        display: isHiddden ? 'none' : 'block',
        minWidth: 0,
        minHeight: 0,
      }}
      {...other}
    >
      {children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function Tabs({ children }: {
  children: { name: string, element: JSX.Element }[]
}) {
  const [value, setValue] = useState(0)
  const handleChange = (_e: SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <>
      <Box sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100%',
      }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
        >
          {children.map((child, index) =>
            <MuiTab key={index} label={child.name} {...a11yProps(index)} />
          )}
        </MuiTabs>
        {children.map((child, index) => {
          return (
            <TabPanel
              value={value}
              index={index}
              key={index}
            >
              {child.element}
            </TabPanel>
          )
        })}
      </Box>
    </>
  )
}

export default Tabs
