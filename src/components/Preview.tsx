import { useRef, useEffect, useState } from 'react'
import echarts, { importChart, importComponent } from '../echarts-lib/index.js'
import { ECharts, EChartsOption, SeriesOption } from '../echarts-lib/echarts.js'
import Snackbar from '@mui/material/Snackbar'
import debounce from '@mui/material/utils/debounce.js'

interface LibsToImport {
  charts: Set<string>,
  components: Set<string>,
}

function chartOptionResolver(option: EChartsOption): LibsToImport {
  const libsToImport: LibsToImport = {
    charts: new Set(),
    components: new Set(),
  }
  const ignoredProps: string[] = [
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

  for (const key in option) {
    if (ignoredProps.includes(key)) {
      continue
    }
    if (key === 'series') {
      const series = option.series as SeriesOption | SeriesOption[]
      if (!(series instanceof Array)) {
        series.type && libsToImport.charts.add(series.type)
        continue
      }
      // when `series` is an Array
      series.forEach((item: SeriesOption) =>
        item.type && libsToImport.charts.add(item.type))
      continue
    }

    switch (key) {
      case 'xAxis':
      case 'yAxis':
        libsToImport.components.add('grid')
        continue
      case 'radiusAxis':
      case 'angleAxis':
        libsToImport.components.add('polar')
        continue
      case 'parallelAxis':
        libsToImport.components.add('parallel')
        continue
    }
    libsToImport.components.add(key)
  }
  return libsToImport
}

async function importChartLibs(chartOption: EChartsOption) {
  const libsToImport = chartOptionResolver(chartOption)

  const chartsToImport = Array.from(libsToImport.charts).map(importChart)
  const componentsToImport = Array.from(libsToImport.components).map(importComponent)
  await Promise
    .all(chartsToImport.concat(componentsToImport))
    .then(echarts.use)
}

let chartInst: ECharts | null = null
window.addEventListener('resize', debounce(() => {
  chartInst && chartInst.resize()
}, 100))

function Preview({ option }: { option: EChartsOption | null }) {
  const [isSyntaxError, setIsSyntaxError] = useState<boolean>(false)
  const [isRenderError, setIsRenderError] = useState<boolean>(false)
  const chartContainer = useRef<HTMLDivElement>(null)

  function renderChart(chartOption: EChartsOption) {
    chartInst && chartInst.dispose()
    const newChartInst: ECharts = echarts.init(chartContainer.current)
    chartInst = newChartInst
    try {
      newChartInst.setOption(chartOption)
      setIsRenderError(false)
    } catch {
      setIsRenderError(true)
    }
  }

  useEffect(() => {
    setIsSyntaxError(option === null)
    if (!option || !chartContainer.current) {
      return
    }

    importChartLibs(option)
      .then(() => renderChart(option))
  }, [option])

  return (
    <>
      <div id='chart-container' ref={chartContainer}></div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isSyntaxError}
        autoHideDuration={5000}
        onClose={() => setIsSyntaxError(false)}
        message='Syntax Error!'
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isRenderError}
        autoHideDuration={5000}
        onClose={() => setIsRenderError(false)}
        message='Render Error!'
      />
    </>

  )
}

export default Preview
