import { EChartsOption } from '../echarts-lib/echarts.js'

export default function (
  chartContent: string
): EChartsOption | null {
  try {
    return new Function(
      'let option;'
      + chartContent
      + ';return option'
    )()
  } catch { }
  return null
}
