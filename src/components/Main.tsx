import { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Tabs from './Tabs'
import Editor, { EditorMethods } from './Editor'
import Preview from './Preview'
import Presets, { ChartType } from './Presets'
import chartOptionParser from './chartOptionParser'
import { EChartsOption } from '../echarts-lib/echarts'
import LineChartContent from '../assets/line-chart.txt?raw'
import BarChartContent from '../assets/bar-chart.txt?raw'
import PieChartContent from '../assets/pie-chart.txt?raw'
import ScatterChartContent from '../assets/scatter-chart.txt?raw'
import RadarChartContent from '../assets/radar-chart.txt?raw'

const chartIdentifierMap: Map<ChartType, string> = new Map([
  [ChartType.Line, LineChartContent],
  [ChartType.Bar , BarChartContent],
  [ChartType.Pie , PieChartContent],
  [ChartType.Scatter, ScatterChartContent],
  [ChartType.Radar  , RadarChartContent],
])

function Subfield({children, ratio}: {
  children: JSX.Element,
  ratio: number,
}) {
  return (
    <Grid
      item
      sx={{
        height: '100%',
        padding: '1rem 1rem 2rem',
      }}
      xs={ratio}
    >
      <Paper
        sx={{ height: '100%' }}
      >{ children }</Paper>
    </Grid>
  )
}

function Main() {
  const editor = useRef<EditorMethods>(null)
  const [editorContent, setEditorContent] = useState<string>('')
  const [chartOption, setChartOption] = useState<EChartsOption | null>(null)

  function applyPreset(identifier: ChartType) {
    const targetChartContent: string = chartIdentifierMap.get(identifier) as string
    editor.current?.setValue(targetChartContent)
  }

  useEffect(() => {
    const newChartOption = chartOptionParser(editorContent)
    setChartOption(newChartOption)
  }, [editorContent])

  return (
    <Grid container sx={{ height: '100%', minHeight: 0 }}>
      <Subfield ratio={5}>
        <Tabs children={[
          {name: 'Editor', element: <Editor ref={editor} onEdited={setEditorContent}/>},
          {name: 'Analysis', element: <div>test content 2</div>},
          {name: 'Presets', element: <Presets applyPreset={applyPreset}/>}
        ]}/>
      </Subfield>
      <Subfield ratio={7}>
        <Preview option={chartOption}/>
      </Subfield>
    </Grid>
  )
}

export default Main
