import { useRef, useEffect, useState } from 'react'
import echarts, { importChart, importComponent } from '../echarts-lib/index.js'
import echartsAnotherDarkTheme from '../echarts-lib/echartsAnotherDarkTheme.js'
import { ECharts, EChartsOption, SeriesOption } from '../echarts-lib/echarts.js'
import { debounce } from '@mui/material'

echarts.registerTheme('another-dark', echartsAnotherDarkTheme)

interface LibsToImport {
  charts: Set<string>,
  components: Set<string>,
}

function getChartOption(chartContent: string): EChartsOption | null {
  try {
    return new Function(
      'let option;'
      + chartContent
      + ';return option'
    )()
  } catch {}
  return null
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
window.addEventListener("resize", debounce(() => {
  chartInst && chartInst.resize()
}, 400))

function Preview({ chartContent }: { chartContent: string }) {
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
    if (!chartContent || !chartContainer.current) {
      return
    }

    const optionalChartOption: EChartsOption | null = getChartOption(chartContent)
    const chartOption: EChartsOption = optionalChartOption || {}
    setIsSyntaxError(optionalChartOption === null)

    importChartLibs(chartOption)
      .then(() => renderChart(chartOption))
  }, [chartContent])

  return (
    <div
      id='chart-container'
      className={[
        isSyntaxError ? 'syntax-error' : undefined,
        isRenderError ? 'render-error' : undefined,
      ].join(' ')}
      ref={chartContainer}
    ></div>
  )
}

export default Preview
