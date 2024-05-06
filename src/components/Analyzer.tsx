import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { EChartsOption, SeriesOption } from '../echarts-lib/echarts'

export const chartIgnoredProps: string[] = [
  'width',
  'height',
  'color',
  'backgroundColor',
  'darkMode',
  'textStyle',
  'aria',
  'axisPointer',
  'animation',
  'animationThreshold',
  'animationDuration',
  'animationEasing',
  'animationDelay',
  'animationDurationUpdate',
  'animationEasingUpdate',
  'animationDelayUpdate',
  'stateAnimation',
  'blendMode',
  'hoverLayerThreshold',
  'options',
  'useUTC',
  'media',
]

interface ChartInfo {
  types: string[],
  components: string[],
  data: [string, string[][]][],
}

function chartOptionAnalyze(option: EChartsOption): ChartInfo {
  function dataResolve(entry: string, sourceData: any[]) {
    const parsedDataList: string[] = sourceData.map(item => JSON.stringify(item))
    if (!data.has(entry)) {
      data.set(entry, [])
    }
    const targetDataBucket: string[][] | undefined = data.get(entry)
    targetDataBucket && targetDataBucket.push(parsedDataList)
  }
  function seriesResolve(series: SeriesOption) {
    series.type && types.add(series.type)
    series.data && dataResolve('series', series.data as any[])
  }

  const types: Set<string> = new Set()
  const components: Set<string> = new Set()
  const data: Map<string, string[][]> = new Map()

  for (const key in option) {
    if (chartIgnoredProps.includes(key)) {
      continue
    }
    if (key === 'series') {
      const series = option.series as SeriesOption | SeriesOption[]
      if (!(series instanceof Array)) {
        seriesResolve(series)
        continue
      }
      // when `series` is an Array
      series.forEach((item: SeriesOption) => seriesResolve(item))
      continue
    }

    switch (key) {
      case 'xAxis':
      case 'yAxis':
        const sourceData = (option[key] as { data: any[] | undefined }).data
        sourceData && dataResolve(key, sourceData)
        components.add('grid')
        continue
      case 'radiusAxis':
      case 'angleAxis':
        components.add('polar')
        continue
      case 'parallelAxis':
        components.add('parallel')
        continue
    }
    components.add(key)
  }
  return {
    types: Array.from(types),
    components: Array.from(components),
    data: Array.from(data),
  }
}

function CollapseListItem({ primaryText, indent=undefined, children }: {
  primaryText: string,
  indent?: number,
  children: JSX.Element,
}) {
  const [open, setOpen] = useState(true)
  const handleClick = () => setOpen(!open)

  return (
    <>
      <ListItemButton sx={{paddingLeft: indent}} onClick={handleClick}>
        <ListItemText primary={primaryText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  )
}

function Analyzer({ option }: { option: EChartsOption | null }) {
  const [chartInfo, setChartInfo] = useState<ChartInfo>({
    types: [],
    components: [],
    data: [],
  })

  useEffect(() => {
    if (option === null) return
    const newChartInfo = chartOptionAnalyze(option)
    setChartInfo(newChartInfo)
  }, [option])

  return (
    <Box sx={{
      height: '100%',
      overflow: 'auto',
    }}>
      <List>
        <CollapseListItem primaryText='Chart Types: '>
          <>
            {chartInfo.types.map((typeName: string, index: number) =>
              <ListItemButton sx={{ pl: 4 }} key={index}>
                <ListItemText primary={typeName} />
              </ListItemButton>
            )}
          </>
        </CollapseListItem>
        <CollapseListItem primaryText='Used Components: '>
          <>
            {chartInfo.components.map((componentName: string, index: number) =>
              <ListItemButton sx={{ pl: 4 }} key={index}>
                <ListItemText primary={componentName} />
              </ListItemButton>
            )}
          </>
        </CollapseListItem>
        <CollapseListItem primaryText='Chart Data: '>
          <>
            {chartInfo.data.map((dataItem, index: number) => {
              const [dataSource, dataGroup]: [string, string[][]] = dataItem
              const dataGroupNode = dataGroup.map((dataList, index) => (
                <CollapseListItem
                  primaryText={index + ': '}
                  indent={6}
                  key={index}
                >
                  <>
                    {dataList.map((data: string, index: number) => (
                      <ListItemButton sx={{ pl: 8 }} key={index}>
                        <ListItemText secondary={data} />
                      </ListItemButton>
                    ))}
                  </>
                </CollapseListItem>
              ))
              return (
                <CollapseListItem
                  primaryText={dataSource + ': '}
                  indent={4}
                  key={index}
                >
                  <>{dataGroupNode}</>
                </CollapseListItem>
              )
            })}
          </>
        </CollapseListItem>
      </List>
    </Box>
  )
}

export default Analyzer
